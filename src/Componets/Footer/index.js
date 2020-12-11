import React, { Component } from 'react';
import {HashLink} from 'react-router-hash-link';

class Footer extends Component {
    render() {
        return (
             <div>
                 <hr/>
                 <HashLink smooth to="#inicio">Voltar ao topo</HashLink>
             </div>
        );
    }
}

export default Footer;