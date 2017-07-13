import React, { Component } from 'react'

import { Button, Card, CardSection, Input } from './common'

export default class LoginForm extends Component {
  state = { email: '', password: '' }
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="user@gmail.com"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Password"
            onChangeText={password => this.setState({ password })}
            placeholder="password"
            secure
            value={this.state.password}
          />
        </CardSection>
        <CardSection>
          <Button>
            Login
          </Button>
        </CardSection>
      </Card>
    )
  }
}
