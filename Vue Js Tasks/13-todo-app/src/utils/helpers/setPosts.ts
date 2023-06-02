import store from "@/store";
import router from "@/router";
import { getAllPosts } from "@/services/post/post.service";

export const setStore = async () => {
    if (store.getters["post/getPosts"].length === 0) {
        try {
            const allPosts = await getAllPosts();
            store.dispatch("post/setPosts", allPosts.data);
        } catch (error) {
            router.push({ name: "404" });
        }
    }
};
