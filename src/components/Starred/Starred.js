import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from '../_common/Input';
import Button from '../_common/Button';
import Link from '../_common/Link';
import './Starred.css'


class Starred extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            userStars: [],
            paginationUserStars: [],
            itemsStart: 0,
            itemsEnd: 5,
            pageIncrement: 5
        };
        
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log(nextProps.userStars)
        if (nextProps.userStars !== prevState.userStars) {
            return {
                userStars: nextProps.userStars
            }
        }
            
        return null;
    }

    componentDidUpdate(prevProps) {
        if (this.state.userStars !== prevProps.userStars) {
            this.goNextPage();
        }
    }

    goNextPage = () => {
        let userStars = this.state.userStars;
        let paginationStars = userStars.slice(this.state.itemsStart, this.state.itemsEnd);
        let itemsStart = this.state.itemsEnd;
        let itemsEnd = this.state.itemsEnd;
        itemsEnd += this.state.pageIncrement;

        this.setState({
            itemsStart: itemsStart,
            itemsEnd: itemsEnd,
            paginationUserStars: paginationStars
        })
    };

    onChange = (event) => {
        this.setState({user: event.target.value})
    };

    onSubmit = () => {
        this.props.getUserStarred(this.state.user);
    };

    renderNextPageButton = () => {
        if (this.state.paginationUserStars.length > 0) {
            return (
                <Button onClick={this.goNextPage} style="button-arrow">
                    <span className="arrow-icon">&#8594;</span>
                </Button>
            )
        }
    };

    renderStarInfo = () => {
        if (!this.state.userStars)
            return null;

        return (
            <div>
                {this.state.paginationUserStars.map((item, index) => 
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
                            <div className="block">
                                <div className="repo-name">
                                    <Link url={item.svn_url}>Link to repo</Link>
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
                {this.renderNextPageButton()}
            </div>
        )
    }
}

Starred.propTypes = {
    getUserStarred: PropTypes.func
}

export default Starred;