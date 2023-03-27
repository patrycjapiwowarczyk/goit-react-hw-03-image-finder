import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
    render() {
        return (
            <button onClick={this.props.onClick}>{this.props.children}</button>
        );
    }
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
}

export default Button;