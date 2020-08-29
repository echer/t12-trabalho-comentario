import React from "react";
import { NovoComentarioComponent } from './NovoComentarioComponent';
import { ListaComentarioComponent } from './ListaComentarioComponent';
import { CommentAPI } from "../api/CommentAPI";
import { ToastContainer, toast } from 'react-toastify';

export class ComentarioComponent extends React.Component {

    state = {
        results: []
    };

    componentDidMount() {
        this.onSearchComments();
    }

    onSearchComments = async => {
        CommentAPI.getAll(this.props.uuid).then((_results) => {
            this.setState({ results: _results.data });
        }).catch((error) => {
            toast.error("Error: " + error);
            debugger;
        });
    }


    render() {
        return <>
            <ListaComentarioComponent onSearchComments={this.onSearchComments} results={this.state.results}></ListaComentarioComponent>
            <NovoComentarioComponent onSearchComments={this.onSearchComments} uuid={this.props.uuid}></NovoComentarioComponent>
        </>
    };
}