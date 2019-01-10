import React, { Component } from "react";
import { Link } from "react-router-dom";
import {login} from '../services/auth'
import {
    Form, Icon, Input, Button,
  } from 'antd';

class Login extends Component {
    state={
        user: {}
    }

    handleText = (e) => {
        const { user } = this.state
        const field = e.target.name
        user[field] = e.target.value
        this.setState({user})
    }

    login = (e) => {
        const { user } = this.state
        e.preventDefault()
        login(user)
        .then(r => {
            localStorage.setItem('loggedUser', JSON.stringify(r))
            this.props.history.push('/profile')
            console.log(r)
        })
        .catch(e => console.log(e))
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
              this.login(e)
            console.log('Received values of form: ', values);
          }
        });
      }
    


render() {

    const { getFieldDecorator } = this.props.form;

return (

    //   <div style={{ marginTop: "4rem" }} className="row">
    //       <div className="col s8 offset-s2">
    //         <Link to="/" className="btn-flat waves-effect">
    //           <i className="material-icons left">keyboard_backspace</i> Back to
    //           home
    //         </Link>
    //         <div className="col s12" style={{ paddingLeft: "11.250px" }}>
    //           <h4>
    //             <b>Login</b> below
    //           </h4>
    //           <p className="grey-text text-darken-1">
    //             Don't have an account? <Link to="/signup">Sign up</Link>
    //           </p>
    //         </div>
    //         <form noValidate onSubmit={ login }>
    //           <div className="input-field col s12">
    //           <input onChange={handleText} className="input" name="email" type="email" />
    //             <label htmlFor="email">Email</label>
    //           </div>
    //           <div className="input-field col s12">
    //           <input onChange={handleText} className="input" name="password" type="password"/>
    //             <label htmlFor="password">Password</label>
    //           </div>
    //           <div className="col s12" style={{ paddingLeft: "11.250px" }}>
    //             <button
    //               style={{
    //                 width: "150px",
    //                 borderRadius: "3px",
    //                 letterSpacing: "1.5px",
    //                 marginTop: "1rem"
    //               }}
    //               type="submit"
    //               className="btn btn-large waves-effect waves-light hoverable blue accent-3"
    //             >
    //               Login
    //             </button>
    //           </div>
    //         </form>
    //       </div>
    //     </div> 

        <div>
            <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please input your email!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" 
                onChange={this.handleText} name="email" type="email" 
            />
          )}
        </Form.Item>

        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" 
                onChange={this.handleText} name="password" 
            />
          )}
        </Form.Item>

        <Form.Item>          
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <Link to='/signup' >register now!</Link>
        </Form.Item>
      </Form>
        </div>

    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Login);



export default WrappedNormalLoginForm;