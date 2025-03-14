import React, { useState } from 'react';

function Todolist() {

    const [todo, setTodo] = useState([])
    const [task, setTask] = useState('')

    const handleInputTask = (event) => {
        setTask(event.target.value)
    }

    const handleAddTodo = () => {
        if (task.trim() !== '') {
            setTodo([...todo, task]);
            setTask('')
        }
    }

    const handleRemove = (index) => {
        const newTodo = todo.filter((_,i) => i !== index)
        setTodo(newTodo)
    };


    return (
        <div>
            <h1>Todo List</h1>
            <input
                type="text"
                value={task}
                onChange={handleInputTask}
                placeholder="Add a new task"
            />
            <button onClick={handleAddTodo}>Add</button>
            <ul>
                {todo.map((todo, index) => (
                    <li key={index}>
                        {todo}
                        <button onClick={() => handleRemove(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export {Todolist};