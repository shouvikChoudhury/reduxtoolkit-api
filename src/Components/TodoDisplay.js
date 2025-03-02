import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteTask, getTask, updateTask, completeTodos } from '../Store/reduxToolkit'

export default function TodoDisplay() {
    const [edit, setedit] = useState(false)
    const [first, setfirst] = useState("")
    const [ide, setide] = useState("")
    const { loading, todoTask } = useSelector((state) => ({ ...state.todolist }))
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getTask())
    }, [])

    return (
        <div>
            {todoTask.length == 0 && <h3>No Task added</h3>}
            {!loading && <div style={{ display: 'flex', justifyContent: 'space-between', margin: '25px' }}>
                <div style={{ border: '2px solid green' }}>
                    <h3>Task Incomplete</h3>
                    {todoTask && todoTask.map((item) => {
                        return (
                            <>
                                {!item.completed &&
                                    (<div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <input type='checkbox' checked={item.completed} onChange={(e) => { dispatch(updateTask({ id: item.id, valnam: item.title, flag: e.target.checked })) }} style={{ accentColor: "blue" }} />
                                            {(edit && ide == item.id) ? <form onSubmit={e => { setedit(!edit); dispatch(updateTask({ id: item.id, valnam: first })) }}>
                                                <input value={first} onChange={(e) => { setfirst(e.target.value) }} style={{ accentColor: "#9d3039" }} />
                                                <input type="submit" value="Save" style={{ display: 'none' }} />
                                            </form> : <p>{item.title}</p>}
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <button onClick={() => { setedit(!edit); setfirst(item.title); setide(item.id) }}>Edit</button>
                                            <button onClick={() => { dispatch(deleteTask(item.id)) }}>Remove</button>
                                        </div>
                                    </div>)
                                }
                            </>
                        )
                    })}
                </div>
                <div style={{ border: '2px solid green' }}>
                    <h3 className='mt-5 pt-5'>Task Completed</h3>
                    {todoTask && todoTask.map((item) => {
                        return (
                            <>
                                {item.completed &&
                                    (<div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <input type='checkbox' checked={item.completed} onChange={(e) => { dispatch(updateTask({ id: item.id, valnam: item.title, flag: e.target.checked })) }} style={{ accentColor: "blue" }} />
                                            {(edit && ide == item.id) ? <form onSubmit={e => { setedit(!edit); dispatch(updateTask({ id: item.id, valnam: first })) }}>
                                                <input value={first} onChange={(e) => { setfirst(e.target.value) }} />
                                                <input type="submit" value="Save" style={{ display: 'none' }} />
                                            </form> : <p>{item.title}</p>}
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <button onClick={() => { setedit(!edit); setfirst(item.title); setide(item.id) }}>Edit</button>
                                            <button onClick={() => { dispatch(deleteTask(item.id)) }}>Remove</button>
                                        </div>
                                    </div>)
                                }
                            </>
                        )
                    })}
                </div>
            </div>}
        </div >
    )
}
