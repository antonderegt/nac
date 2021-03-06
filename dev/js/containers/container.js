import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { actionDisplay } from '../actions/actions'
import { HOME, INFO, CHRONO, JURY, CONTACT } from '../actions/actions'
import Home from './container-home'
import Info from './container-info'
import Contact from './container-contact'
import Jury from './container-jury'
import Chrono from './container-chrono'

class Container extends Component {
  render() {
    return (
      <div className="container">
        {
          this.props.display == HOME ?
            <Home /> :
          this.props.display == JURY ?
            <Jury /> :
          this.props.display == CHRONO ?
            <Chrono /> :
          this.props.display == INFO ?
            <Info /> :
          <Contact />
        }
      </div>
    )
  }
}

// Get acces to the store
function mapStateToProps(state) {
  return {
    display: state.display.display
  }
}

// Connect store and actions to the class Container
export default connect(mapStateToProps)(Container)
