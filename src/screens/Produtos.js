import React, {Component} from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'

import Header from '../components/common/Header'
import ProdutosContent from '../components/produtos/ProdutosContent'
import data from '../../products.json'

let jogos = data

export default class Produtos extends Component {
  state = {
    produtos: jogos
  }

  render() {

    console.log(data.length)
      return (
        <View style={styles.container}>
          <Header />

          <Text style={styles.titulo}>Jogos Disponíveis</Text>

          <FlatList data={this.state.produtos}
            keyExtractor={item => `${item.id}`}
            renderItem={( { item } ) =>
            <ProdutosContent key={item.id} {...item} />} />
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
  titulo: {
    fontSize: 20
  }
});
