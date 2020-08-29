import React from "react";
import { PostAPI } from "../api/PostAPI";

export class NovoPostComponent extends React.Component {
    state = {
        texto: ""
    };

    setPost(event) {
        this.setState({ texto: event.target.value });
    }

    save(event) {
        if (this.state.texto === "") {
            alert("Digite o post!");
            return;
        }

        var obj = {
            texto: this.state.texto,
            likes: 0
        };
        PostAPI.add(obj);

        alert("Post Salvo!");

    }

    render() {
        return (
            <>
                <h3>Novo Post</h3>
                <textarea
                    value={this.state.texto}
                    onChange={(event) => this.setPost(event)}
                ></textarea>
                <button type="button" onClick={(event) => this.save(event)}>Publicar</button>
            </>
        );
    }
}