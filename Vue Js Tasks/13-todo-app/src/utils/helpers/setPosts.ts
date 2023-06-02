import store from "@/store";
import router from "@/router";
import { getAllPosts } from "@/services/post/post.service";
import request from "axios";

export const setStore = async () => {
    if (store.getters["post/getPosts"].length === 0) {
        try {
            const allPosts = await getAllPosts();
            store.dispatch("post/setPosts", allPosts.data);
        } catch (error) {
            if (request.isAxiosError(error) && error.response) {
                if (error.response.status === 500) {
                    router.push({ name: "404" });
                }
                if (error.response.status === 404) {
                    router.push({ name: "404" });
                }
            }
        }
    }
};
