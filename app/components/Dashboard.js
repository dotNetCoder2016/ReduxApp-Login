import React from 'react'
import {Link} from 'react-router'
function Dashboard () {
  return (
    
    <div>
      <h1>Welcome to Dashboard</h1>
     <ul>
        <li><Link to='/aboutus/profile' >Profile</Link></li>
        <li><Link to='/aboutus/team'>Team</Link></li>
        <li><Link to='/aboutus/contactus'>Contact Us</Link></li>
     </ul>
      </div>
  )
}

export default Dashboard
