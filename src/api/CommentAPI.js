import Axios from "axios";

export class CommentAPI {

    static baseUrl = "http://localhost:8888";

    static getAll() {
        return Axios.get(`${this.baseUrl}/comentarios`);
    }

    static add(comment) {
        return Axios.post(`${this.baseUrl}/comentarios`, comment);
    }
}