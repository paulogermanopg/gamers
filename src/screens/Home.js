import React, {Component} from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'

import Header from '../components/common/Header'
import Carousel from '../components/home/Carousel'
import Apresentacao from '../components/home/Apresentacao'
import Sobre from '../components/home/Sobre'


export default class Home extends Component { 

  render() {
      return (
        <View style={styles.container}>
          <Header />

          <ScrollView>

            <Carousel />
            <Apresentacao />
            <Sobre />
            
          </ScrollView>

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
