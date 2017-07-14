import React, { Component } from 'react'
import { View } from 'react-native'
import firebase from 'firebase'

import { Button, Header, Spinner } from './components/common'
import LoginForm from './components/LoginForm'
import firebaseConfig from '../firebase-config'

export default class App extends Component {
  state = { loggedIn: null }
  componentWillMount() {
    firebase.initializeApp(firebaseConfig)
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ loggedIn: !!user })
    })
  }
  renderContent() {
    if (this.state.loggedIn === false) {
      return <LoginForm />
    }
    return (
      <View style={styles.container}>
        {this.state.loggedIn ?
          <Button onPress={() => firebase.auth().signOut()}>Log out</Button>
          : null
        }
        {this.state.loggedIn === null ? <Spinner /> : null}
      </View>
    )
  }
  render() {
    return (
      <View>
        <Header>Authentication</Header>
        {this.renderContent()}
      </View>
    )
  }
}

const styles = {
  container: {
    paddingTop: 10,
    flexDirection: 'row'
  }
}
