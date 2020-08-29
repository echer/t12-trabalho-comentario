import React from "react";
import { CommentAPI } from "../api/CommentAPI";

export class NovoComentarioComponent extends React.Component {


    state = {
        texto: ""
    };

    setComentario(event) {
        this.setState({ texto: event.target.value });
    }

    save(event) {
        if (this.state.texto === "") {
            alert("Digite o comentário!");
            return;
        }

        var obj = {
            texto: this.state.texto 
        };
        CommentAPI.add(obj).then((result)=>{
            alert("Comentário Salvo!");
        }).catch((error)=>{
            alert("Error: "+error);
            debugger;
        });

    }

    render() {
        return (
            <>
                <h4>Novo Comentário</h4>
                <textarea
                    value={this.state.texto}
                    onChange={(event) => this.setComentario(event)}
                ></textarea>
                <button type="button" onClick={(event) => this.save(event)}>Publicar</button>
            </>
        );
    }
}