import React, {Component} from 'react';

class Link extends Component {
    render() {
        return(
            <a href={this.props.url} className={this.props.style}>
                {this.props.value || this.props.children}
            </a>
        )
    }
};

export default Link;