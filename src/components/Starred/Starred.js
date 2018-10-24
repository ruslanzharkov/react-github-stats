import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from '../_common/Input';
import './Starred.css'

class Starred extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            userStars: []
        };
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.userStars !== prevState.userStars)
            return{
                userStars: nextProps.userStars
            }
        return null;
    }

    onChange = (event) => {
        this.setState({user: event.target.value})
    }

    onSubmit = () => {
        this.props.getUserStarred(this.state.user);
    }

    renderStarInfo = () => {
        if (!this.state.userStars)
            return null;

        return (
            <div>
                <ol>
                    {this.state.userStars.map(item => 
                        <li>{item.name}</li>
                    )}
                </ol>
                
            </div>
        )
    }

    render() {
        return(
            <div className='starred-container'>
                <Input onChange={this.onChange} value={this.state.user} style='input'/>
                <button onClick={this.onSubmit}>Click me</button>
                {this.renderStarInfo()}
            </div>
        )
    }
}

Starred.propTypes = {
    getUserStarred: PropTypes.func
}

export default Starred;