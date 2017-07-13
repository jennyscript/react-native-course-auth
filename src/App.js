import React, { Component } from 'react'
import { View, Text } from 'react-native'
import firebase from 'firebase'

import { Header } from './components/common'
import firebaseConfig from '../firebase-config'

export default class App extends Component {
  componentWillMount() {
    firebase.initializeApp(firebaseConfig)
  }
  render() {
    return (
      <View>
        <Header>Authentication</Header>
        <Text>An App!</Text>
      </View>
    )
  }
}
