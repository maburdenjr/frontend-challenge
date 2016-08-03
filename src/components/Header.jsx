import React, { Component } from 'react';

export default class Header extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <header>
                <a className="brand-link">Medi<span>Bowling</span></a>
            </header>
        )
    }
}