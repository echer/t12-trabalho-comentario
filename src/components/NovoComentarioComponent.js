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
            texto: this.state.texto,
            uuidPost: this.props.uuid
        };

        CommentAPI.add(obj).then((result) => {
            alert("Comentário Salvo!");
        }).catch((error) => {
            alert("Error: " + error);
            debugger;
        });

    }

    render() {
        return (
            <>
                <div className="row">
                    <div className="offset-md-2 col-md-10">
                        <div className="card">
                            <div className="card-header">
                                <h5 className="card-title">Novo Comentário</h5>
                            </div>
                            <div className="card-body">
                                <div className="form-group">
                                    <textarea className="form-control"
                                        id="novo-comentario"
                                        value={this.state.texto}
                                        onChange={(event) => this.setComentario(event)}
                                    ></textarea>
                                    <small id="novo-comentario" className="form-text text-muted">Digite o conteúdo do comentário!</small>
                                </div>
                                <button className="btn btn-primary" type="button" onClick={(event) => this.save(event)}>Publicar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}