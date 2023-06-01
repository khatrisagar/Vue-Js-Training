import { axiosGet, axiosPost,axiosPatch, axiosDelete } from "@/plugins";
import { addPostInterface } from "@/interfaces";


export const getAllPosts = () => {
    return axiosGet("posts");
};

export const getPost = (postId: number) => {
    return axiosGet(`posts/${postId}`);
};

export const getPostComments = (postId: number) => {
    return axiosGet(`posts/${postId}/comments`);
};

export const addNewPost = (data: addPostInterface) => {
    return axiosPost(`posts`, data);
};
export const editExistingPost = (postId: number,data: addPostInterface) => {
    return axiosPatch(`posts/${postId}`, data);
};

export const deletePost = (postId: number) => {
    return axiosDelete(`posts/${postId}`);
};
