import http from "./httpservice";

const url = "/todos"; //move to config

function createUrl(id) {
    return `${url}/${id}`;
}

export function getTodos() {
    return http.get(url);
}
export function createTodo(todo) {
    return http.post(url, todo);
}
export function saveTodo(id, todo) {
    let body = {...todo};
    if (todo._id) delete body._id;
    if (todo.__v) delete body.__v;
    return http.patch(createUrl(id), body);
}
export function removeTodo(id) {
    return http.delete(createUrl(id));
}