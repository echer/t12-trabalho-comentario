import React from "react";
import { PostAPI } from "../api/PostAPI";
import { ComentarioComponent } from "./ComentarioComponent";

export class ListaPostComponent extends React.Component {

    state = {
        results: []
    };

    componentDidMount() {
        PostAPI.getAll().then((posts) => {
            this.setState({ results: posts.data });
        }).catch((error) => {
            alert("Error: " + error);
            debugger;
        });
    }

    getResults() {
        if (this.state.results && this.state.results.length > 0) {
            return (
                <>
                    {this.state.results.map((r) =>
                        (
                            <div key={r.uuid}>
                                <div className="card-body">
                                    <p className="card-text">{r.texto}</p>
                                    <p className="card-text">Curtidas: {r.likes}</p>
                                </div>
                                <div className="card-footer text-muted">
                                    Data: {r.datahora}
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