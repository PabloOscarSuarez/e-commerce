import React from 'react';
import { connect } from 'react-redux'
import Sidebar from './Sidebar';

class SidebarContainer extends React.Component {

  render() {
    return (
      <Sidebar />
    );
  }
}

const mapStateToProps = function (state, ownProps) {
  return {  };
}

const mapDispatchToProps = function (dispatch, ownProps) {
  return {  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SidebarContainer);
