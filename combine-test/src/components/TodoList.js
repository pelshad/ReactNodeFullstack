import React from "react";
import { useSelector, useDispaatch } from "react-redux";
import {remove, complete} from '../redux/todoSlice';
import s from './TodoList.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesom';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

export default function TodoList() {
    const todolist = useSelector(state => state.todo);
    const dispatch = useDispatch()

    const trsh = <FontAwesomIcon icon={faTrashCan} />

    console.log(todolist);

    const todolistView = todolist.map((todo, idx))
}
