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
        let itemsStart = this.state.itemsStart;
        let itemsEnd = this.state.itemsEnd;
        let paginationStars;

        paginationStars = userStars.slice(itemsStart, itemsEnd);

        if (itemsStart === 0) {
            itemsStart = this.state.pageIncrement;
        } else itemsStart = itemsEnd;

        itemsEnd = itemsStart + this.state.pageIncrement;

        if (itemsEnd < this.state.userStars.length) {
            this.setState({
                itemsStart: itemsStart,
                itemsEnd: itemsEnd,
                paginationUserStars: paginationStars
            })
        }
    };

    goPrevPage = () => {
        let userStars = this.state.userStars;
        let paginationStars;
        let itemsStart = this.state.itemsStart;
        let itemsEnd = this.state.itemsEnd;
        
        itemsEnd = itemsStart;
        itemsStart = itemsEnd - this.state.pageIncrement;

        if (itemsStart < 0) 
            return;

        paginationStars = userStars.slice(itemsStart, itemsEnd);
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
        this.setState({
            itemsStart: 0,
            itemsEnd: 5,
        });
        this.props.getUserStarred(this.state.user);
    };

    renderNextPageButton = () => {
        if (this.state.paginationUserStars.length > 0) {
            return (
                <Button onClick={this.goNextPage} styles={"button-arrow"}>
                    <span className="arrow-icon">→</span>
                </Button>
            )
        }
    };

    renderPrevPageButton = () => {
        if (this.state.paginationUserStars.length > 0)
            return (
                <Button onClick={this.goPrevPage} styles={"button-arrow"}>
                    <span className="arrow-icon">←</span>
                </Button>
            )
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
                <div className={'search-container'}>
                    <Input onChange={this.onChange} onKeyPress={this.onSubmit} value={this.state.user} styles={'input-starred'} placeholder='Write github username...'/>
                    <Button onClick={this.onSubmit} value={'Find'} styles={'button-starred'}/>
                </div>
                {this.renderStarInfo()}
                <div className={'pagination-buttons'}>
                    {this.renderPrevPageButton()}
                    {this.renderNextPageButton()}
                </div>
            </div>
        )
    }
}

Starred.propTypes = {
    getUserStarred: PropTypes.func
}

export default Starred;