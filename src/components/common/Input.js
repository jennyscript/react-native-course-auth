import React from 'react'
import { Text, TextInput, View } from 'react-native'

export const Input = ({ label, onChangeText, placeholder, value }) =>
  <View style={styles.container}>
    <Text style={styles.label}>
      {label}
    </Text>
    <TextInput
      autoCorrect={false}
      onChangeText={onChangeText}
      placeholder={placeholder}
      style={styles.input}
      value={value}
    />
  </View>

const styles = {
  container: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  label: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  }
}
