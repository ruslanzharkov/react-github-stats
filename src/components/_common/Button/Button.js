import React, {Component} from 'react';

class Input extends Component {
    render() {
        return(
            <button onClick={this.props.onClick} className={this.props.style}>
                {this.props.value}
            </button>
        )
    }
};

export default Input;