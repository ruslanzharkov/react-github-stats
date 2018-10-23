
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Starred from '../../components/Starred/Starred'
import {ActionsCreators} from '../../actions/index';

class StarredScreen extends Component {
    render() {
      return (
        <Starred 
          userStarred={this.props.userStarred}
          getUserStarred={this.props.getUserStarred}
        />
      )
    }
  }
  
  function mapStateToProps ({userStarred}) {
    return {
      userStarred: userStarred
    };
  };
  
  function mapDispatchToProps(dispatch) {
    const actions = {
      getUserStarred: ActionsCreators.getUserStarred
    };

    return bindActionCreators(actions, dispatch);
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(StarredScreen)