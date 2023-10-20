import './styles.css'

import { Component } from "react";

export class Button extends Component {
    render() {
        const { text, aoClicarCarregar, disabled} = this.props;

        return (
            <button
                className="btn"
                onClick={aoClicarCarregar}
                disabled={disabled}
            >
                {text}
            </button>
        );
    }

}