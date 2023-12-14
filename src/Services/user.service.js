import {axiosService} from "./axios.service";

export const userService = {
getUsers:() => axiosService.get("users").then(value => value.data),
getUser:(id) => axiosService.get(`users/${id}`).then(value => value.data),
getUserPosts:(id) => axiosService.get(`users/${id}/posts`).then(value => value.data),
createUserPosts:(id) => axiosService.post(`posts`,
    JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: id
    })
).then(value => value.data),
getPosts:() => axiosService.get(`posts`).then(value => value.data),
}
