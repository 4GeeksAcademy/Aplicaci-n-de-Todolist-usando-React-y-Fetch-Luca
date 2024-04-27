import { BASE_URL } from "./BASE_URL";

export const getList = async () => {
  return await BASE_URL("/users/carlosluca", "GET", {});
};

export const postTodo = async (data) => {
  return await BASE_URL("/todos/carlosluca", "POST", data);
};

export const deleteTodo = async (todoId) => {
  return await BASE_URL(`/todos/${todoId}`, "DELETE", {});
};
