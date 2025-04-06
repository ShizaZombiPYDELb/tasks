import { put, takeLatest, call } from "redux-saga/effects";
import { addTask, removeTask, clearTasks, editTask, setLoading } from "./TODO.slice";

const ADD_TASK = 'ADD_TASK';
const REMOVE_TASK = 'REMOVE_TASK';
const CLEAR_TASKS = 'CLEAR_TASKS';
const EDIT_TASK = 'EDIT_TASK';

export const addTaskAction = (payload) => ({ type: ADD_TASK, payload });
export const removeTaskAction = (payload) => ({ type: REMOVE_TASK, payload });
export const clearTasksAction = () => ({ type: CLEAR_TASKS });
export const editTaskAction = (payload) => ({ type: EDIT_TASK, payload });

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

function* handleAddTask({ payload }) {
    yield put(setLoading(true));
    yield call(delay, 1000);
    yield put(addTask(payload));
    yield put(setLoading(false));
}

function* handleRemoveTask({ payload }) {
    yield put(setLoading(true));
    yield call(delay, 1000);
    yield put(removeTask(payload));
    yield put(setLoading(false));
}

function* handleClearTasks() {
    yield put(setLoading(true));
    yield call(delay, 1000);
    yield put(clearTasks());
    yield put(setLoading(false));
}

function* handleEditTask({ payload }) {
    yield put(setLoading(true));
    yield call(delay, 1000);
    yield put(editTask(payload));
    yield put(setLoading(false));
}

export default function* taskSaga() {
    yield takeLatest(ADD_TASK, handleAddTask);
    yield takeLatest(REMOVE_TASK, handleRemoveTask);
    yield takeLatest(CLEAR_TASKS, handleClearTasks);
    yield takeLatest(EDIT_TASK, handleEditTask);
}

export {
    addTaskAction as ADD_TASK,
    removeTaskAction as REMOVE_TASK,
    clearTasksAction as CLEAR_TASKS,
    editTaskAction as EDIT_TASK
};