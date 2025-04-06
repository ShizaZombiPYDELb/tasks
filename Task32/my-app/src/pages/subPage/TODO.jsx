import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_TASK, REMOVE_TASK, CLEAR_TASKS, EDIT_TASK } from '../../todo/TODO.saga';
import {
    Box,
    Button,
    Checkbox,
    Container,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    TextField,
    Typography,
    CircularProgress,
    Paper
} from '@mui/material';
import { Delete, Edit, Save, Cancel, Add } from '@mui/icons-material';

const Todo = () => {
    const [text, setText] = useState('');
    const [editingId, setEditingId] = useState(null);
    const [editText, setEditText] = useState('');
    const dispatch = useDispatch();
    const { tasks, loading } = useSelector(state => state.todo);

    const handleAddTask = () => {
        if (text.trim()) {
            dispatch(ADD_TASK(text));
            setText('');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            editingId ? handleSaveEdit(editingId) : handleAddTask();
        }
    };

    const handleToggleTask = (id) => {
        const task = tasks.find(t => t.id === id);
        if (task) {
            dispatch(EDIT_TASK({ id, completed: !task.completed }));
        }
    };

    const handleStartEditing = (task) => {
        setEditingId(task.id);
        setEditText(task.text);
    };

    const handleSaveEdit = (id) => {
        if (editText.trim()) {
            dispatch(EDIT_TASK({ id, text: editText }));
            setEditingId(null);
        }
    };

    const handleCancelEdit = () => {
        setEditingId(null);
    };

    return (
        <Container maxWidth="sm" sx={{ mt: 4 }}>
            <Paper elevation={3} sx={{ p: 3 }}>
                <Typography variant="h4" component="h1" gutterBottom align="center">
                    Todo App
                </Typography>

                {loading && (
                    <Box display="flex" justifyContent="center" my={2}>
                        <CircularProgress />
                    </Box>
                )}

                <Box display="flex" gap={1} mb={3}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        size="small"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="New task"
                    />
                    <Button
                        variant="contained"
                        onClick={handleAddTask}
                        startIcon={<Add />}
                    >
                        Add
                    </Button>
                </Box>

                <Box textAlign="center" mb={2}>
                    <Button
                        variant="outlined"
                        color="error"
                        onClick={() => dispatch(CLEAR_TASKS())}
                    >
                        Clear All
                    </Button>
                </Box>

                <List>
                    {tasks.map(task => (
                        <ListItem
                            key={task.id}
                            divider
                            secondaryAction={
                                editingId === task.id ? (
                                    <Box display="flex" gap={1}>
                                        <IconButton
                                            edge="end"
                                            color="primary"
                                            onClick={() => handleSaveEdit(task.id)}
                                        >
                                            <Save />
                                        </IconButton>
                                        <IconButton
                                            edge="end"
                                            color="secondary"
                                            onClick={handleCancelEdit}
                                        >
                                            <Cancel />
                                        </IconButton>
                                    </Box>
                                ) : (
                                    <Box display="flex" gap={1}>
                                        <IconButton
                                            edge="end"
                                            onClick={() => handleStartEditing(task)}
                                        >
                                            <Edit />
                                        </IconButton>
                                        <IconButton
                                            edge="end"
                                            color="error"
                                            onClick={() => dispatch(REMOVE_TASK(task.id))}
                                        >
                                            <Delete />
                                        </IconButton>
                                    </Box>
                                )
                            }
                        >
                            <ListItemButton onClick={() => handleToggleTask(task.id)} dense>
                                <ListItemIcon>
                                    <Checkbox
                                        edge="start"
                                        checked={task.completed || false}
                                        tabIndex={-1}
                                        disableRipple
                                    />
                                </ListItemIcon>
                                {editingId === task.id ? (
                                    <TextField
                                        fullWidth
                                        variant="standard"
                                        value={editText}
                                        onChange={(e) => setEditText(e.target.value)}
                                        onKeyPress={handleKeyPress}
                                        autoFocus
                                    />
                                ) : (
                                    <ListItemText
                                        primary={task.text}
                                        sx={{
                                            textDecoration: task.completed ? 'line-through' : 'none',
                                            color: task.completed ? 'text.disabled' : 'text.primary'
                                        }}
                                    />
                                )}
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Paper>
        </Container>
    );
};

export default Todo;