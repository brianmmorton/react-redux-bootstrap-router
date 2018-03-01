import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './Login.css';

export default class Login extends Component {

  state = { email: '', password: '' }

  _handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await this.props.login(this.state.email, this.state.password);
    }
    catch (err) {
      console.log(err);
    }
  }

  render () {
    const { email, password } = this.state;

    return (
      <div className='login-container'>
        <div className='login'>
          <Form onSubmit={this._handleSubmit}>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                onChange={e => this.setState({ email: e.target.value })}
                value={email}
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="with a placeholder"
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                onChange={e => this.setState({ password: e.target.value })}
                value={password}
                type="password"
                name="password"
                id="examplePassword"
                placeholder="password placeholder"
              />
            </FormGroup>

            <Button type='submit'>Login</Button>
          </Form>
        </div>
      </div>
    )
  }
}
