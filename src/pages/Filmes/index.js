import React, { Component } from 'react';
import {Info} from './filme_style';

class Filme extends Component {

    constructor(props) {
        super(props)
        this.state = {
            filme: []
        }
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        let url = `https://sujeitoprogramador.com/r-api/?api=filmes/${id}`
        fetch(url)
            .then((r) => r.json())
            .then((json) => {
                this.setState({ filme: json });
                console.log(json)
            })
    }

    render() {
        return (
            <Info>
                <h1>{this.state.filme.nome}</h1>
                <img src={this.state.filme.foto} alt="capa" />
                {this.state.filme.length !== 0 &&
                    <h3>sinopse</h3>
                }
                {this.state.filme.sinopse}


                {/* <div>
                    {this.state.filme.map((item) => {
                        return (
                            <article key={item.id}>
                                <strong>{item.nome}</strong>
                                <img scr={item.foto} alt="capa" />
                                <p>{item.sinopse}</p>
                            </article>
                        );
                    })}
                </div> */}
            </Info>
        );
    }
}

export default Filme;