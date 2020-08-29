import React from "react";
import { PostAPI } from "../api/PostAPI";
import { PlusCircle, Check2, InfoCircle } from "react-bootstrap-icons";

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
        PostAPI.add(obj).then((resp) => {
            this.setState({ texto: "" })
            this.props.onSearchPosts();
        }).catch((error) => {
            alert("Error: " + error);
            debugger;
        });

        alert("Post Salvo!");

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