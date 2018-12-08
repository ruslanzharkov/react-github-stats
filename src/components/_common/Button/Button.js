import React, {Component} from 'react';

class Input extends Component {
    render() {
        return(
            <button onClick={this.props.onClick} className={this.props.styles}>
                {this.props.value || this.props.children}
            </button>
        )
    }
};

export default Input;