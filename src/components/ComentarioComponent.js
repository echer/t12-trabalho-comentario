import React from "react";
import { NovoComentarioComponent } from './NovoComentarioComponent';
import { ListaComentarioComponent } from './ListaComentarioComponent';

export class ComentarioComponent extends React.Component {
    state = {

    };

    componentDidMount() {

    }


    render() {
        return <>
            <ListaComentarioComponent uuid={this.props.uuid}></ListaComentarioComponent>
            <NovoComentarioComponent uuid={this.props.uuid}></NovoComentarioComponent>
        </>
    };
}