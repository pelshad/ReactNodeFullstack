import axios from 'axios'
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

    const sendReq = async () => {
        const res = await axios.post('http://localhost:8080/ins_user',
        {NAME : todolist.text});
    }

    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault()
                if(todolist.text != ""){
                    dispatch(add(todolist.text));
                    sendReq();}
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