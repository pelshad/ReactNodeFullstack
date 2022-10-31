import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import {add} from '../redux/todoSlice'

export default function InputTodo(){
    const dispatch = useDispatch()

    const [todolist, setTodolist] = useState(
        {
            id : 0,
            text : "",
        }
    )

    function handleText(e) {
        setTodolist({text : e.target.value})
    }

    function onReset() {
        setTodolist({text : ""})
    }

    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault()
                if(todolist.text != ""){dispatch(add(todolist.text))}
                else(alert("no Text"))
                onReset()
            }}>
                <div>
                    <input type="text"
                    value = {todolist.text} onChange={handleText} />
                    <input type="submit" value="+" />
                </div>
            </form>
        </div>
    )
}