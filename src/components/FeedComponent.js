import React from "react";
import { NovoPostComponent } from './NovoPostComponent';
import { ListaPostComponent } from "./ListaPostComponent";

export class FeedComponent extends React.Component {
    state = {

    };

    componentDidMount() {

    }


    render() {
        return <>
            <NovoPostComponent></NovoPostComponent>
            <ListaPostComponent></ListaPostComponent>
        </>
    };
}