import React, { Component } from 'react'
import { View } from 'react-native'
import firebase from 'firebase'

import { Header } from './components/common'
import LoginForm from './components/LoginForm'
import firebaseConfig from '../firebase-config'

export default class App extends Component {
  componentWillMount() {
    firebase.initializeApp(firebaseConfig)
  }
  render() {
    return (
      <View>
        <Header>Authentication</Header>
        <LoginForm />
      </View>
    )
  }
}
