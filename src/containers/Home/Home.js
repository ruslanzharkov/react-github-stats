
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import HomePage from '../../components/Home/Home'

class HomeScreen extends Component {
    render() {
      return (
        <HomePage/>
      )
    }
  }
  
  function mapStateToProps () {
    return {};
  };
  
  function mapDispatchToProps(dispatch) {
    return bindActionCreators({
    }, dispatch);
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)