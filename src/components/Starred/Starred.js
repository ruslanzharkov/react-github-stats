import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from '../_common/Input/index';
import './Starred.css'
import Button from '../_common/Button';

class Starred extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            userStars: [],
            itemsStart: 0,
            itemsCount: 5,
        };
        
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log(nextProps.userStars)
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
                {this.state.userStars.map((item, index) => 
                    <div className="repo-item" key={index}>
                        <div className="content-about">
                            <div className="block">
                                <div className="repo-name">{item.name}</div>
                                <div className="repo-image"><img src={item.owner.avatar_url} alt='avatar' className='avatars-github'/></div>
                            </div>
                            <div className="block">
                                <div className="repo-name">
                                    <span className="stars">&#10029;</span> {item.stargazers_count}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        )
    }

    render() {
        return(
            <div className='starred-container'>
                <Input onChange={this.onChange} value={this.state.user} style='input-starred' placeholder='Write github username...'/>
                <Button onClick={this.onSubmit} value={'Search user'} style='button-starred'/>
                {this.renderStarInfo()}
            </div>
        )
    }
}

Starred.propTypes = {
    getUserStarred: PropTypes.func
}

export default Starred;