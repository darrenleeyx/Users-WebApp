import { baseApi } from "./base";

export function getUsers(options, page = 1) {
  return baseApi
    .get(`/users?page=${page}`, options)
    .then((response) => response.data);
}

export function getUser(userId, options) {
  return baseApi
    .get(`/users/${userId}`, options)
    .then((response) => response.data);
}
