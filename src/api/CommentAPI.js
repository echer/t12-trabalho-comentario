import Axios from "axios";

export class CommentAPI {

    static baseUrl = "http://localhost:8888";

    static getAll(uuid) {
        return Axios.get(`${this.baseUrl}/comentarios/${uuid}`);
    }

    static add(comment) {
        return Axios.post(`${this.baseUrl}/comentarios`, comment);
    }
}