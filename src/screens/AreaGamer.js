import React, {Component} from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'


import Header from '../components/common/Header'
import Formalizacao from '../components/areaGamer/Formalizacao'
import Historico from '../components/areaGamer/Historico'
import Favoritos from '../components/areaGamer/Favoritos'

export default class AreaGamer extends Component { 

  render() {
      return (
        <View style={styles.container}>   
          <Header />

          <ScrollView>

            <Formalizacao />
            <Favoritos />
            <Historico />

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
