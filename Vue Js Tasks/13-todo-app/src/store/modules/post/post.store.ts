import { State } from "@/interfaces";
import { Commit } from "vuex";
import { addPostInterface } from "@/interfaces";

export default {
    state() {
        return {
            posts: [],
            curruntPost: {
                postData: {},
                commnetsData: {},
            },
        };
    },
    mutations: {
        SET_POSTS(state: State, posts: addPostInterface[]) {
            state.posts = posts;
        },

        SET_CURRENT_POST(state: State, post: addPostInterface) {
            state.curruntPost = post;
        },
    },
    actions: {
        setPosts({ commit }: { commit: Commit }, posts: addPostInterface[]) {
            commit("SET_POSTS", posts);
        },
        setCurrentPost({ commit }: { commit: Commit }, post: addPostInterface) {
            commit("SET_CURRENT_POST", post);
        },
    },
    getters: {
        getPosts(state: State) {
            return state.posts;
        },
        getCurrentPost(state: State) {
            return state.curruntPost;
        },
    },
};
