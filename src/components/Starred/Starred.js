import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from '../_common/Input';
import './Starred.css'

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

    onSubmit = () => {
        this.props.getUserStarred(this.state.user);
    }

    render() {
        return(
            <div className='starred-container'>
                <Input onChange={this.onChange} value={this.state.user} style='input'/>
                <button onClick={this.onSubmit}>Click me</button>
            </div>
        )
    }
}

Starred.propTypes = {
    getUserStarred: PropTypes.func
}

export default Starred;