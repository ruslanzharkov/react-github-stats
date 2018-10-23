
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Starred from '../../components/Starred/Starred'

class StarredScreen extends Component {
    render() {
      return (
        <Starred/>
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(StarredScreen)