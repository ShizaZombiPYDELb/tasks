import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  ADD_TASK,
  REMOVE_TASK,
  CLEAR_TASKS,
  EDIT_TASK
} from './store/TODO.saga';

function App() {
  const [text, setText] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');
  const dispatch = useDispatch();
  const { tasks, loading } = useSelector(state => state.todo);

  const handleAdd = () => {
    if (text.trim()) {
      dispatch(ADD_TASK(text));
      setText('');
    }
  };

  const handleToggle = (id) => {
    const task = tasks.find(t => t.id === id);
    if (task) {
      dispatch(EDIT_TASK({
        id,
        completed: !task.completed
      }));
    }
  };

  const startEditing = (task) => {
    setEditingId(task.id);
    setEditText(task.text);
  };

  const saveEdit = (id) => {
    if (editText.trim()) {
      dispatch(EDIT_TASK({
        id,
        text: editText
      }));
      setEditingId(null);
    }
  };

  const cancelEdit = () => {
    setEditingId(null);
  };

  return (
      <div>
        <h1>Todo App</h1>
        {loading && <p>Loading...</p>}

        <div>
          <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="New task"
          />
          <button
              onClick={handleAdd}
          >
            Add
          </button>
        </div>

        <button
            onClick={() => dispatch(CLEAR_TASKS())}
        >
          Clear All
        </button>

        <ul style={{ listStyle: 'none', padding: 0 }}>
          {tasks.map(task => (
              <li
                  key={task.id}
              >
                <input
                    type="checkbox"
                    checked={task.completed || false}
                    onChange={() => handleToggle(task.id)}
                    style={{ marginRight: '10px' }}
                />

                {editingId === task.id ? (
                    <>
                      <input
                          type="text"
                          value={editText}
                          onChange={(e) => setEditText(e.target.value)}
                          style={{
                            flexGrow: 1,
                            padding: '5px',
                            marginRight: '10px'
                          }}
                      />
                      <button
                          onClick={() => saveEdit(task.id)}
                      >
                        Save
                      </button>
                      <button
                          onClick={cancelEdit}
                      >
                        Cancel
                      </button>
                    </>
                ) : (
                    <>
                                <span style={{
                                  textDecoration: task.completed ? 'line-through' : 'none',
                                  flexGrow: 1,
                                  color: task.completed ? '#888' : '#333'
                                }}>
                                    {task.text}
                                </span>
                      <button
                          onClick={() => startEditing(task)}
                      >
                        Edit
                      </button>
                      <button
                          onClick={() => dispatch(REMOVE_TASK(task.id))}
                      >
                        Delete
                      </button>
                    </>
                )}
              </li>
          ))}
        </ul>
      </div>
  );
}

export default App;