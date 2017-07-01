import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'

class Team extends Component {
  render () {
    return (
        <div className="content">
         This is user Team page <Link to='/dashboard'>back</Link>
        </div>
    )
  }
}

function select (state) {
  return {
    data: state
  }
}

export default connect(select)(Team)
