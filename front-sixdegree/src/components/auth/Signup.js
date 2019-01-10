import React, { Component } from "react";
import {signup} from '../services/auth'
import {
  Form, Input, Tooltip, Icon, Button,
} from 'antd';

// const { Option } = Select;
// const AutoCompleteOption = AutoComplete.Option;


class Signup extends Component {
  state={
    user: {},
    confirmDirty: false,
    autoCompleteResult: [],
}

signup = (e) => {
    const { user } = this.state
    e.preventDefault()
    signup(user)
    .then(r => {
        this.props.history.push('/login')
        console.log(r)
    })
    .catch(e => console.log(e))
}

handleText = (e) => {
    const { user } = this.state
    const field = e.target.name
    user[field] = e.target.value
    this.setState({user})
}

//antd
handleSubmit = (e) => {
  e.preventDefault();
  this.props.form.validateFieldsAndScroll((err, values) => {
    if (!err) {
      this.signup(e)
      console.log('Received values of form: ', values);
      
    }
  });
}

handleConfirmBlur = (e) => {
  const value = e.target.value;
  this.setState({ confirmDirty: this.state.confirmDirty || !!value });
}

compareToFirstPassword = (rule, value, callback) => {
  const form = this.props.form;
  if (value && value !== form.getFieldValue('password')) {
    callback('Two passwords that you enter is inconsistent!');
  } else {
    callback();
  }
}

validateToNextPassword = (rule, value, callback) => {
  const form = this.props.form;
  if (value && this.state.confirmDirty) {
    form.validateFields(['confirm'], { force: true });
  }
  callback();
}

handleWebsiteChange = (value) => {
  let autoCompleteResult;
  if (!value) {
    autoCompleteResult = [];
  } else {
    autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
  }
  this.setState({ autoCompleteResult });
}



render() {
  
  const { getFieldDecorator } = this.props.form;

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };

  // const prefixSelector = getFieldDecorator('prefix', {
  //   initialValue: '86',
  // })(
  //   <Select style={{ width: 70 }}>
  //     <Option value="86">+86</Option>
  //     <Option value="87">+87</Option>
  //   </Select>
  // );

  // const websiteOptions = autoCompleteResult.map(website => (
  //   <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
  // ));


return (
      <div className="container">
        {/* <div className="row">
          <div className="col s8 offset-s2">
            <Link to="/" className="btn-flat waves-effect">
              <i className="material-icons left">keyboard_backspace</i> Back to
              home
            </Link>
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>Register</b> below
              </h4>
              <p className="grey-text text-darken-1">
                Already have an account? <Link to="/login">Log in</Link>
              </p>
            </div>
            <form noValidate onSubmit={signup}>
              <div className="input-field col s12">
              <input onChange={handleText} name="name" className="input" type="text"/>
                <label htmlFor="name">Name</label>
              </div>
              <div className="input-field col s12">
              <input onChange={handleText} name="email" className="input" type="email"/>
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-field col s12">
              <input onChange={handleText} name="password" className="input" type="password"/>
                <label htmlFor="password">Password</label>
              </div>
             
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div> */}

        <Form onSubmit={this.handleSubmit}>

        <Form.Item
          {...formItemLayout}
          label="E-mail"
        >
          {getFieldDecorator('email', {
            rules: [{
              type: 'email', message: 'The input is not valid E-mail!',
            }, {
              required: true, message: 'Please input your E-mail!',
            }],
          })(
            <Input onChange={this.handleText} name="email" type="email"/>
          )}
        </Form.Item>

        <Form.Item
          {...formItemLayout}
          label="Password"
        >
          {getFieldDecorator('password', {
            rules: [{
              required: true, message: 'Please input your password!',
            }, {
              validator: this.validateToNextPassword,
            }],
          })(
            <Input onChange={this.handleText} name="password" type="password"/>
          )}
        </Form.Item>

        <Form.Item
          {...formItemLayout}
          label="Confirm Password"
        >
          {getFieldDecorator('confirm', {
            rules: [{
              required: true, message: 'Please confirm your password!',
            }, {
              validator: this.compareToFirstPassword,
            }],
          })(
            <Input type="password" onBlur={this.handleConfirmBlur} />
          )}
        </Form.Item>

        <Form.Item
          {...formItemLayout}
          label={(
            <span>
              Nickname&nbsp;
              <Tooltip title="What do you want others to call you?">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
          )}
        >
          {getFieldDecorator('nickname', {
            rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
          })(
            <Input onChange={this.handleText} name="name" type="text"/>
          )}
        </Form.Item>


        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">Register</Button>
        </Form.Item>

      </Form>
      </div>
    );
  }
}

const WrappedRegistrationForm = Form.create({ name: 'register' })(Signup);


export default WrappedRegistrationForm;