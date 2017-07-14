import React, { Component } from 'react'
import { Text } from 'react-native'
import firebase from 'firebase'

import { Button, Card, CardSection, Input } from './common'

export default class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.onButtonPress = this.onButtonPress.bind(this)
  }
  state = { email: '', password: '', error: '' }
  onButtonPress() {
    const { email, password } = this.state
    this.setState({ error: '' })
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
            .catch(() => {
              this.setState({ error: 'Could not log in or create an account' })
            })
      })
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
          <Button onPress={this.onButtonPress}>
            Log in
          </Button>
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
