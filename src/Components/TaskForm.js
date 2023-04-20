import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createTask } from '../Store/reduxToolkit'

export default function TaskForm({ setOpenModal }) {
    const [todo, settodo] = useState("")
    const dispatch = useDispatch()
    const addHandler = (e) => {
        e.preventDefault()
        dispatch(createTask(todo))
        settodo("")
        setOpenModal(false)
    }
    return (
        <div>
            <form onSubmit={addHandler}>
                <label htmlFor="name">Enter task name :</label>
                <input type="text" value={todo} onChange={(e) => { settodo(e.target.value) }} />
                <input type="submit" value="Add" />

            </form>

        </div>
    )
}
