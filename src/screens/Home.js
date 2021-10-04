import React, {Component} from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'

import { connect } from 'react-redux'

import Header from '../components/common/Header'
import Carousel from '../components/home/Carousel'
import Apresentacao from '../components/home/Apresentacao'
import Sobre from '../components/home/Sobre'


class Home extends Component { 
  state = {
    carrinho: this.props.carrinho,
  }

  //Varifica toda vez que houver atualização no estado da aplicação
  componentDidUpdate = prevProps => {
    if (prevProps != this.props) {
        this.setState({ 
            carrinho: this.props.carrinho,
         })
    }
  }

  //funcão para atualizar o icone do carrinho
  carrinho = () => {
    this.setState({ carrinho: this.props.carrinho })
  }

  render() {
      return (
        <View style={styles.container}>
          <Header navigation = { this.props.navigation } carrinho={this.state.carrinho}/>

          <ScrollView>

            <Carousel onCarrinho={this.carrinho} />
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
})

const mapStateToProps = ({ produtos }) => {
  return {
      carrinho: produtos.carrinho
  }
}

export default connect(mapStateToProps)(Home)

