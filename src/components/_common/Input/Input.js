import React, {Component} from 'react';

class Input extends Component {
    render() {
        return(
            <input 
                type="text" 
                value={this.props.value} 
                onChange={this.props.onChange} 
                className={this.props.styles}
                placeholder={this.props.placeholder}
            />
        )
    }
};

export default Input;