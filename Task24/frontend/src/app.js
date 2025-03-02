import $ from "jquery";
import { TodosManager } from "./scripts/todos.js";
import { TodoAPI } from "./api/todos.js";

import "./styles/main.scss";

const $form = $("form");
const $contentContainer = $("[data-content]");

const view = new TodosManager($contentContainer);

$(document).ready(fetchTodos);

$form.on("submit", handleFormSubmit);

async function handleFormSubmit(e) {
    e.preventDefault();
    const title = e.currentTarget.elements.todo.value.trim();
    const description = e.currentTarget.elements.description.value.trim();

    if (!title) return;

    const data = new TodoAPI(title, description);

    await TodoAPI.save(process.env.BASE_SERVICE_URL, data).then(() => {
        fetchTodos();
    }).catch((e) => {
        fetchErrorHandler(e);
    });
}

async function handleFormDelete(e) {
    e.preventDefault();
    const id = e.currentTarget.elements.todo.id.trim();
    const title = e.currentTarget.elements.todo.value.trim();
    const description = e.currentTarget.elements.description.value.trim();

    if (!title) return;

    const data = new TodoAPI(id, title, description);

    await TodoAPI.delete(process.env.BASE_SERVICE_URL, data, id).then(() => {
        fetchTodos();
    }).catch((e) => {
        fetchErrorHandler(e);
    });
}


function fetchTodos() {
    view.renderLoader("loading");

    TodoAPI.getAll(process.env.BASE_SERVICE_URL)
        .then((todos) => {
            view.renderData(todos);
        })
        .catch((e) => {
            fetchErrorHandler(e);
        });
}

function fetchErrorHandler(e) {
    view.renderLoader("error");
    view.renderError(e.message);
}