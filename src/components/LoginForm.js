import React, { Component } from 'react'
import { Text } from 'react-native'
import firebase from 'firebase'

import { Button, Card, CardSection, Input, Spinner } from './common'

export default class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.onButtonPress = this.onButtonPress.bind(this)
    this.onLoginSuccess = this.onLoginSuccess.bind(this)
    this.onLoginFail = this.onLoginFail.bind(this)
  }
  state = { email: '', password: '', error: '', loading: false }
  onButtonPress() {
    const { email, password } = this.state
    this.setState({ error: '', loading: true })
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess)
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess)
          .catch(this.onLoginFail)
      })
  }
  onLoginSuccess() {
    this.setState({ email: '', password: '', error: '', loading: false })
  }
  onLoginFail() {
    this.setState({ error: 'Could not log in or create an account', loading: false })
  }
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
        {this.state.error ? <Text style={styles.errorText}>
          {this.state.error}
        </Text> : null}
        <CardSection>
          {this.state.loading ?
            <Spinner size="small" /> :
            <Button onPress={this.onButtonPress}>
              Log in
            </Button>
          }
        </CardSection>
      </Card>
    )
  }
}

const styles = {
  errorText: {
    fontSize: 20,
    alignSelf: 'center',
    color: '#f00'
  }
}
