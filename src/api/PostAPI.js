import Axios from "axios";

export class PostAPI {

    static baseUrl = "http://localhost:8888";

    static getAll() {
        return Axios.get(`${this.baseUrl}/posts`);
    }

    static add(post) {
        return Axios.post(`${this.baseUrl}/posts`, post);
    }

    static update(post) {
        return Axios.put(`${this.baseUrl}/posts/${post.uuid}`, post);
    }

}