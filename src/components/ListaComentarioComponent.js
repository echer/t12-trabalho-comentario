import React from "react";
import { CommentAPI } from "../api/CommentAPI";

export class ListaComentarioComponent extends React.Component {

    state = {
        results: []
    };

    componentDidMount() {
        CommentAPI.getAll().then((comentarios) => {
            this.setState({ results: comentarios.data });
        }).catch((error) => {
            alert("Error: " + error);
            debugger;
        });
    }

    getResults() {
        if (this.state.results && this.state.results.length > 0) {
            return (
                <div>
                    {this.state.results.map((r) =>
                        (
                            <>
                                <div>Comentário: {r.texto}</div>
                                <div>Data: {r.datahora}</div>
                            </>
                        )
                    )}
                </div>
            );
        } else {
            return (
                <h4>Ninguem comentou essa publicação ainda!</h4>
            );
        }
    }

    render() {
        return this.getResults();
    }

}