import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Top } from './header_style'

class Header extends Component {
    render() {
        return (
             <Top>
                 <Link to="/">Pipocando</Link>
             </Top>
        );
    }
}

export default Header