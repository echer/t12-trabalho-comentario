import React from "react";
import { PostAPI } from "../api/PostAPI";
import { ComentarioComponent } from "./ComentarioComponent";
import { Rss, SuitHeart, Clock, InfoCircle, PersonCircle, EmojiLaughing, EmojiAngry } from 'react-bootstrap-icons';
import { toast } from "react-toastify";

export class ListaPostComponent extends React.Component {

    incCurtida(post) {
        post.likes = post.likes + 1;
        this.updatePost(post);
    }

    decCurtida(post) {
        post.unlike = post.unlike + 1;
        this.updatePost(post);
    }

    updatePost(post) {
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
                                    <p className="card-text"><PersonCircle size="40"></PersonCircle> &nbsp;<strong>{r.titulo}</strong></p>
                                    <p className="card-text">{r.texto}</p>
                                </div>
                                <div className="card-footer text-muted">
                                    <button className="btn btn-default" type="button" onClick={() => this.incCurtida(r)}>{r.likes} &nbsp;<EmojiLaughing></EmojiLaughing></button>
                                    <button className="btn btn-default ml-2" type="button" onClick={() => this.decCurtida(r)}>{r.unlike} &nbsp;<EmojiAngry></EmojiAngry></button>
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