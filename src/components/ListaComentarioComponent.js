import React from "react";
import { CommentAPI } from "../api/CommentAPI";

export class ListaComentarioComponent extends React.Component {

    state = {
        results: []
    };

    componentDidMount() {
        if (this.props.uuid && this.props.uuid !== "") {
            CommentAPI.getAll(this.props.uuid).then((comentarios) => {
                this.setState({ results: comentarios.data });
            }).catch((error) => {
                alert("Error: " + error);
                debugger;
            });
        }
    }

    getResults() {
        if (this.state.results && this.state.results.length > 0) {
            return (
                <>
                    {this.state.results.map((r) =>
                        (
                            <div key={r.uuid}>
                                <div className="card">
                                    <div className="card-body">
                                        <p className="card-text">{r.texto}</p>
                                    </div>
                                    <div className="card-footer text-muted">
                                        {r.datahora}
                                    </div>
                                </div>
                            </div>
                        )
                    )
                    }
                </>
            );
        } else {
            return (
                <div className="card-body">
                    <p className="card-title">Ninguem comentou essa publicação ainda!</p>
                </div>
            );
        }
    }

    render() {
        return (
            <>
                <div className="row">
                    <div className="offset-md-2 col-md-10">
                        <div className="card">
                            <div className="card-header">
                                <h5 className="card-title">Comentários</h5>
                            </div>
                            {this.getResults()}
                        </div>
                    </div>
                </div>
            </>
        )
    }

}