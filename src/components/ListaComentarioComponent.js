import React from "react";
import { Clock, People, InfoCircle, PersonCircle } from "react-bootstrap-icons";

export class ListaComentarioComponent extends React.Component {

    state = {

    };


    componentDidMount() {

    }

    getResults() {
        if (this.props.results && this.props.results.length > 0) {
            return (
                <>
                    {this.props.results.map((r) =>
                        (
                            <div key={r.uuid}>
                                <div className="card m-2">
                                    <div className="card-body">
                                        <p className="card-text"><PersonCircle size="40"></PersonCircle> &nbsp;{r.texto}</p>
                                    </div>
                                    <div className="card-footer text-muted">
                                        <span className="float-right"><Clock></Clock>&nbsp; {r.datahora}</span>
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
                    <p className="card-title"><InfoCircle></InfoCircle>&nbsp; Ninguem comentou essa publicação ainda!</p>
                </div>
            );
        }
    }

    render() {
        return (
            <>
                <div className="row mt-3">
                    <div className="offset-md-1 col-md-11">
                        <div className="card mr-2 ">
                            <div className="card-header">
                                <h5 className="card-title"><People></People> &nbsp; Comentários</h5>
                            </div>
                            {this.getResults()}
                        </div>
                    </div>
                </div>
            </>
        )
    }

}