
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Starred from '../../components/Starred/StarredPage'
import {ActionsCreators} from '../../actions/index';

class StarredScreen extends Component {
    render() {
      return (
        <Starred 
          userStars={this.props.userStars}
          getUserStarred={this.props.getUserStarred}
        />
      )
    }
  }
  
  function mapStateToProps ({userStars}) {
    return {
      userStars: userStars
    };
  };
  
  function mapDispatchToProps(dispatch) {
    const actions = {
      getUserStarred: ActionsCreators.getUserStarred
    };

    return bindActionCreators(actions, dispatch);
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(StarredScreen)