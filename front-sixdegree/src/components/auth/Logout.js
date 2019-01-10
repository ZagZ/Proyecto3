import React from 'react'
import { Redirect } from 'react-router-dom'
import {logout} from '../services/auth'

class Logout extends React.Component {

  state = {
    redirect: false,
    user: {}
  }

  setRedirect = () => {
    logout()
    this.setState({
      redirect: true,
      user:{}
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/' />
    }
  }

  render () {
    return (
       <div>
        {this.renderRedirect()}
        <button onClick={this.setRedirect}>Redirect</button>
       </div>
    )
  }
}

export default Logout;