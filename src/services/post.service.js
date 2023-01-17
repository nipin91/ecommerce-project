import axios from 'axios';

export const getPosts = (pageNumber) => {
    return axios.get(`https://jsonplaceholder.typicode.com/posts?_start=${pageNumber}&_limit=10`).then((res) => res.data);
}

export const getCommentsByPostId = (postId) => {
    return axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`).then((res) => res.data);
}