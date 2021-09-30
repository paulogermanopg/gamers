import React, {Component} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AppLoading from 'expo-app-loading'
import * as Font from 'expo-font'

let customFonts = {
  'ConcertOne-Regular': require('../../assets/fonts/ConcertOne-Regular.ttf'),
}


export default class Spash extends Component { 
  state = {
    fontsLoaded: false,
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts)
    this.setState({ fontsLoaded: true })
  }

  componentDidMount() {
    this._loadFontsAsync()
  }

  render() {
    if (this.state.fontsLoaded) {
      return (
        <View style={styles.container}>
          <Text style={{ fontFamily: 'ConcertOne-Regular' }}>Home</Text>
        </View>
        
      )
    } else {
      return (
        <View style={styles.container}>
          <Text>Home</Text>
        </View>
      )
    }
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
