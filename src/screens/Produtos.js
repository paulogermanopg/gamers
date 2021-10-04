import React, {Component} from 'react'
import { StyleSheet, View, FlatList } from 'react-native'

import { connect } from 'react-redux'

import Header from '../components/common/Header'
import ProdutosContent from '../components/produtos/ProdutosContent'
import data from '../../products.json'
import Ordenacao from '../components/produtos/Ordenacao'

let jogos = data

class Produtos extends Component {
  state = {
    produtos: jogos,
    carrinho: this.props.carrinho,
    favoritos: this.props.favoritos
  }

  //Varifica toda vez que houver atualização no estado da aplicação
    componentDidUpdate = prevProps => {
        if (prevProps != this.props) {
            this.setState({ 
                carrinho: this.props.carrinho,
             })
        }
    }


  ordenar = organizado => {
    this.setState({ produtos: organizado })
  }

  //funcão para atualizar o icone do carrinho
  carrinho = () => {
    this.setState({ carrinho: this.props.carrinho, favoritos: this.props.favoritos })
  }

  render() {
      return (
        <View style={styles.container}>
          <Header navigation = { this.props.navigation } carrinho={this.state.carrinho}/>

          <Ordenacao produtos={this.state.produtos} onOrdenar={this.ordenar}/>

          <FlatList data={this.state.produtos}
            keyExtractor={item => `${item.id}`}
            renderItem={( { item } ) =>
            <ProdutosContent key={item.id} {...item} onCarrinho={this.carrinho} />} />
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
})

const mapStateToProps = ({ produtos, user }) => {
  return {
      carrinho: produtos.carrinho,
      favoritos: user.favoritos
  }
}

export default connect(mapStateToProps)(Produtos)

