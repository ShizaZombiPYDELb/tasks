import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addTodo} from "./TODOSlice.js";

function TODO() {
    const dispatch = useDispatch();
    const [tasks, setTasks] = useState('');
    const todos = useSelector((state) => state.todos)
    const totalTodos = todos.length

    const handleSubmit = (e) => {
        e.preventDefault();
        if (tasks.trim()) {
            dispatch(addTodo(tasks));
            setTasks('')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={tasks}
                onChange={(e) => setTasks(e.target.value)}
                placeholder="new task"
            />
            <button type="submit">add</button>

            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.text}</li>
                ))}
            </ul>

            <p>всього: {totalTodos}</p>
        </form>


    )
}

export default TODO;