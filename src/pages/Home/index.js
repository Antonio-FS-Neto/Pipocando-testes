import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Container, Lista} from './home_style';

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            filmes: []
        }

        this.getFilmes = this.getFilmes.bind(this);
    }

    componentDidMount() {
        this.getFilmes();
    }

    getFilmes() {
        let url = 'https://sujeitoprogramador.com/r-api/?api=filmes'
        fetch(url)
            .then((r) => r.json())
            .then((json) => {
                this.setState({ filmes: json });
                console.log(json)
            })
    }

    render() {
        return (
            <Container>
                <Lista>
                    {this.state.filmes.map((item) => {
                        return(
                            <article key={item.id}>
                                <strong> {item.nome} </strong>
                                <img src={item.foto} alt="capa"/>
                                <Link to={`/filme/${item.id}`}>Detalhes</Link>
                            </article>
                        );
                    })}
                </Lista>

            </Container>
        );
    }
}

export default Home