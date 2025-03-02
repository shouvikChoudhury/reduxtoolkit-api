import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getTask = createAsyncThunk("post/getTask", async () => {
    return fetch('https://jsonplaceholder.typicode.com/todos').then((res) => res.json())
})

export const deleteTask = createAsyncThunk("post/deleteTask", async (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: 'DELETE',
    }).then((res) => res.json())
})

export const createTask = createAsyncThunk("post/createTask", async (value) => {
    return fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        body: JSON.stringify({
            title: value,
            completed: false,
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }).then((res) => res.json())
})

export const updateTask = createAsyncThunk("post/updateTask", async ({ id, valnam, flag = false }) => {
    return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            id: id,
            title: valnam,
            completed: flag,
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }).then((res) => res.json())
})

const addTodoReducer = createSlice({
    name: "myTasks",
    initialState: {
        todoTask: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: {
        [getTask.pending]: (state, action) => {
            state.loading = true;
        },
        [getTask.fulfilled]: (state, action) => {
            state.loading = false;
            state.todoTask = action.payload
        },
        [getTask.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload
        },
        [deleteTask.pending]: (state, action) => {
            state.loading = true;
        },
        [deleteTask.fulfilled]: (state, action) => {
            state.loading = false;
            state.todoTask = state.todoTask.filter((item) => item.id !== action.meta.arg)
        },
        [deleteTask.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload
        },
        [createTask.pending]: (state, action) => {
            state.loading = true;
        },
        [createTask.fulfilled]: (state, action) => {
            state.loading = false;
            state.todoTask = [...state.todoTask, action.payload]
        },
        [createTask.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload
        },
        [updateTask.pending]: (state, action) => {
            state.loading = true;
        },
        [updateTask.fulfilled]: (state, action) => {
            state.loading = false;
            state.todoTask = state.todoTask.map((todo) => {
                if (todo.id === action.payload.id) {
                    todo = { ...todo, title: action.payload.title, completed: action.payload.completed };
                }
                return todo;
            });
        },
        [updateTask.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload
        },
    },
});

export const { completeTodos } = addTodoReducer.actions

export default addTodoReducer.reducer;