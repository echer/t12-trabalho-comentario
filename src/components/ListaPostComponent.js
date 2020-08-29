import React from "react";
import { PostAPI } from "../api/PostAPI";
import { ComentarioComponent } from "./ComentarioComponent";
import { Rss, SuitHeart, Clock, InfoCircle, PersonCircle } from 'react-bootstrap-icons';
import { toast } from "react-toastify";

export class ListaPostComponent extends React.Component {

    incCurtida(post) {
        post.likes = post.likes + 1;
        PostAPI.update(post).then((result) => {
            this.props.onSearchPosts();
        }).catch((error) => {
            toast.error("Error: " + error);
            debugger;
        });
    }

    getResults() {
        if (this.props.results && this.props.results.length > 0) {
            return (
                <>
                    {this.props.results.map((r) =>
                        (
                            <div className="card mt-2" key={r.uuid}>
                                <div className="card-body">
                                    <p className="card-text"><PersonCircle size="40"></PersonCircle> &nbsp;{r.texto}</p>
                                </div>
                                <div className="card-footer text-muted">
                                    <button className="btn btn-danger" type="button" onClick={() => this.incCurtida(r)}>{r.likes} &nbsp;<SuitHeart></SuitHeart></button>
                                    <span className="float-right"><Clock></Clock> &nbsp;{r.datahora}</span>
                                </div>
                                <ComentarioComponent uuid={r.uuid}></ComentarioComponent>
                            </div>
                        )
                    )}
                </>
            );
        } else {
            return (
                <p className="card-title"><InfoCircle></InfoCircle> &nbsp;Nenuma publicação encontrada!</p>
            );
        }
    }

    render() {
        return (
            <>
                <div className="card mt-2">
                    <div className="card-header">
                        <h5 className="card-title"><Rss></Rss>&nbsp;Feed de Noticias</h5>
                    </div>
                    <div className="card-body">
                        {this.getResults()}
                    </div>
                </div>
            </>
        )
    }

}