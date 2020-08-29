import React from "react";
import { PostAPI } from "../api/PostAPI";
import { ComentarioComponent } from "./ComentarioComponent";

export class ListaPostComponent extends React.Component {

    incCurtida(post) {
        post.likes = post.likes + 1;
        PostAPI.update(post).then((result) => {
            this.props.onSearchPosts();
        }).catch((error) => {
            alert("Error: " + error);
            debugger;
        });
    }

    getResults() {
        if (this.props.results && this.props.results.length > 0) {
            return (
                <>
                    {this.props.results.map((r) =>
                        (
                            <div key={r.uuid}>
                                <div className="card-body">
                                    <p className="card-text">{r.texto}</p>
                                    <button className="btn btn-primary" type="button" onClick={() => this.incCurtida(r)}>Curtir {r.likes}</button>
                                </div>
                                <div className="card-footer text-muted">
                                    {r.datahora}
                                </div>
                                <ComentarioComponent uuid={r.uuid}></ComentarioComponent>
                            </div>
                        )
                    )}
                </>
            );
        } else {
            return (
                <div className="card-body">
                    <p className="card-title">Nenuma publicação encontrada!</p>
                </div>
            );
        }
    }

    render() {
        return (
            <>
                <div className="card">
                    <div className="card-header">
                        <h5 className="card-title">Feed de Noticias</h5>
                    </div>
                    {this.getResults()}
                </div>
            </>
        )
    }

}