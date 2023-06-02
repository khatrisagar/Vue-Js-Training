import { axiosGet, axiosPost, axiosDelete } from "@/plugins/axios.plugin";

export const getAllPosts = () => {
    return axiosGet("posts");
};

export const getPost = (postId) => {
    return axiosGet(`posts/${postId}`);
};

export const getPostComments = (postId) => {
    return axiosGet(`posts/${postId}/comments`);
};

export const addPost = (data) => {
    return axiosPost(`posts`, data);
};

export const deletePost = (postId) => {
    return axiosDelete(`posts/${postId}`);
};
