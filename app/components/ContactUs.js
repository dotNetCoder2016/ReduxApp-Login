import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'

class Contactus extends Component {
  render () {
    return (
        <div className="content">
         This is user Contactus page <Link to='/dashboard'>back</Link>
        </div>
    )
  }
}

function select (state) {
  return {
    data: state
  }
}

export default connect(select)(Contactus)
