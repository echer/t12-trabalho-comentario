import React from "react";
import { PostAPI } from "../api/PostAPI";
import { PlusCircle, Check2, InfoCircle } from "react-bootstrap-icons";
import { toast } from "react-toastify";

export class NovoPostComponent extends React.Component {
    state = {
        texto: "",
        titulo: ""
    };

    setPost(event) {
        this.setState({ texto: event.target.value });
    }

    setTitulo(event) {
        this.setState({ titulo: event.target.value });
    }

    save(event) {
        if (this.state.texto === "") {
            toast.warn("Digite o post!");
            return;
        }

        var obj = {
            texto: this.state.texto,
            titulo: this.state.titulo,
            likes: 0,
            unlike: 0
        };
        PostAPI.add(obj).then((resp) => {
            toast.success("Publicação realizada!")
            this.setState({ texto: "",titulo:""})
            this.props.onSearchPosts();
        }).catch((error) => {
            toast.error("Error: " + error);
            debugger;
        });
    }

    render() {
        return (
            <>
                <div className="card mt-3">
                    <div className="card-header">
                        <h5 className="card-title"><PlusCircle></PlusCircle>&nbsp;Novo Post</h5>
                    </div>
                    <div className="card-body">
                        <div className="form-group">
                            <label htmlFor="novo-post-titulo">Título</label>
                            <input className="form-control"
                                id="novo-post-titulo"
                                value={this.state.titulo}
                                onChange={(event) => this.setTitulo(event)}
                            ></input>
                            <small id="novo-post-titulo" className="form-text text-muted"><InfoCircle></InfoCircle> &nbsp;Digite o título da sua publicação!</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="novo-post-titulo">Conteúdo</label>
                            <textarea className="form-control"
                                id="novo-post"
                                value={this.state.texto}
                                onChange={(event) => this.setPost(event)}
                            ></textarea>
                            <small id="novo-post" className="form-text text-muted"><InfoCircle></InfoCircle> &nbsp;Digite o conteúdo da sua publicação!</small>
                        </div>

                        <button className="btn btn-primary" type="button" onClick={(event) => this.save(event)}>Publicar&nbsp;<Check2></Check2></button>
                    </div>
                </div>
            </>
        );
    }
}