import React, {Component} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AppLoading from 'expo-app-loading'
import * as Font from 'expo-font'

import Header from '../components/common/Header'


export default class Produtos extends Component { 

  render() {
      return (
        <View style={styles.container}>
          <Header />
          <Text>Produtos</Text>
        </View>
      )
  }
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
