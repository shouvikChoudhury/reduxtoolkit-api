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
            {!loading && <div><h3>Task Incomplete</h3>
                {todoTask && todoTask.map((item) => {
                    return (
                        <div className="container" key={item.id}>
                            {!item.completed &&
                                (<div className="card d-block">{(edit && ide == item.id) ? <form onSubmit={e => { setedit(!edit); dispatch(updateTask({ id: item.id, valnam: first })) }}>
                                    <input value={first} onChange={(e) => { setfirst(e.target.value) }} />
                                    <input type="submit" value="Save" />
                                </form> : <span>{item.title}</span>}
                                    <button onClick={() => { setedit(!edit); setfirst(item.title); setide(item.id) }}>Edit</button>
                                    <button onClick={() => { dispatch(completeTodos(item.id)) }}>Completed</button>
                                    <button onClick={() => { dispatch(deleteTask(item.id)) }}>Remove</button></div>)
                            }
                        </div>
                    )
                })}

                <h3 className='mt-5 pt-5'>Task Completed</h3>
                {todoTask && todoTask.map((item) => {
                    return (
                        <div className="container" key={item.id}>
                            {item.completed &&
                                (<div className="card d-block">{(edit && ide == item.id) ? <form onSubmit={e => { setedit(!edit); dispatch(updateTask({ id: item.id, valnam: first })) }}>
                                    <input value={first} onChange={(e) => { setfirst(e.target.value) }} />
                                    <input type="submit" value="Save" />
                                </form> : <span>{item.title}</span>}
                                    <button onClick={() => { setedit(!edit); setfirst(item.title); setide(item.id) }}>Edit</button>
                                    <button onClick={() => { dispatch(deleteTask(item.id)) }}>Remove</button></div>)
                            }
                        </div>
                    )
                })}</div>}
        </div >
    )
}
