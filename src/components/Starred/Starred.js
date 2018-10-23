import React, { Component } from 'react';
import Input from '../_common/Input';

class Starred extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: ''
        };
    }

    onChange = (event) => {
        this.setState({user: event.target.value})
    }

    render() {
        return(
            <div className={'Container'}>
                <Input onChange={this.onChange} value={this.state.user}/>
            </div>
        )
    }
}

export default Starred;