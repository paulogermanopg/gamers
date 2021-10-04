import React, {Component} from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'

import { connect } from 'react-redux'

import Header from '../components/common/Header'
import Formalizacao from '../components/areaGamer/Formalizacao'
import Historico from '../components/areaGamer/Historico'
import Favoritos from '../components/areaGamer/Favoritos'

class AreaGamer extends Component {
  state = {
    carrinho: this.props.carrinho,
    favoritos: this.props.favoritos,
    historico: this.props.historico,
  }

  componentDidMount = () => {
    setInterval(() => {
        this.atualizar()
    }, 3500);
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
  atualizar = () => {
    this.setState({ 
      carrinho: this.props.carrinho,
      favoritos: this.props.favoritos
    })
  }

  render() {
      return (
        <View style={styles.container}>   
          <Header navigation = { this.props.navigation } carrinho={this.state.carrinho} />

          <ScrollView>

            <Formalizacao />
            <Favoritos favoritos={this.state.favoritos} onAtualizar={this.atualizar} />
            <Historico historico={this.state.historico} />

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

const mapStateToProps = ({ produtos, user }) => {
  return {
      carrinho: produtos.carrinho,
      favoritos: user.favoritos,
      historico: user.historico
  }
}

export default connect(mapStateToProps)(AreaGamer)
