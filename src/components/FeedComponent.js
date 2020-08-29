import React from "react";
import { NovoPostComponent } from './NovoPostComponent';
import { ListaPostComponent } from "./ListaPostComponent";
import { PostAPI } from "../api/PostAPI";

export class FeedComponent extends React.Component {
    state = {
        results: []
    };

    componentDidMount() {
        this.onSearchPosts();
    }

    onSearchPosts = async => {
        PostAPI.getAll().then((_results) => {
            this.setState({ results: _results.data });
        }).catch((error) => {
            alert("Error: " + error);
            debugger;
        });
    }

    render() {
        return <>
            <NovoPostComponent onSearchPosts={this.onSearchPosts}></NovoPostComponent>
            <ListaPostComponent results={this.state.results} onSearchPosts={this.onSearchPosts}></ListaPostComponent>
        </>
    };
}