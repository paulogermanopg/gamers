import React, { Component } from 'react'
import { View, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native'
import * as Font from 'expo-font'

import { connect } from 'react-redux'
import { addCarrinho } from '../../store/actions/produtos'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

let customFonts = {
    'PTSans-Bold': require('../../../assets/fonts/PTSans-Bold.ttf'),
  }

class Comprar extends Component {
    state = {
        fontsLoaded: false,
        carrinho: this.props.carrinho,
    }

    //Necessário para usar fonte personalizada no Expo
    async _loadFontsAsync() {
        await Font.loadAsync(customFonts)
        this.setState({ fontsLoaded: true })
    }
    
    componentDidMount() {
        this._loadFontsAsync()
    }
    //-------------------------------

    //Varifica toda vez que houver atualização no estado da aplicação
    componentDidUpdate = prevProps => {
        if (prevProps != this.props) {
            this.setState({ 
                carrinho: this.props.carrinho,
             })
        }
    }

    //acrescenta mais um jogo no array do carrinho e upa no redux
    carrinho = async() => {
        let arrayCarrinho = this.state.carrinho
        arrayCarrinho.push(this.props.jogo)
        await this.setState({ carrinho: arrayCarrinho })
        this.props.onAddCarrinho({ ...this.state  })
        this.props.onCarrinho && this.props.onCarrinho()
        
        if (this.props.onCancel){
            this.props.onCancel && this.props.onCancel()
        }
    }

    render() {
        return (
            <TouchableOpacity style={styles.container}
                onPress={this.carrinho}>
                
                <FontAwesomeIcon icon={ faShoppingCart } size={28} color={'rgb(255,255,255)'}/>
                <Text style={this.state.fontsLoaded ? styles.texto : styles.textoSemFonte }>+Carrinho</Text>
                
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        marginHorizontal: 5,
        padding: 5,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#fff'
    },
    texto: {
        fontFamily: 'PTSans-Bold',
        fontSize: 18,
        textAlign: 'center',
        color: '#fff',
    },
    textoSemFonte: {
        fontFamily: '',
        fontSize: 18,
        textAlign: 'center',
        color: '#fff',
    },
})

const mapStateToProps = ({ produtos }) => {
    return {
        carrinho: produtos.carrinho,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddCarrinho: produtos => dispatch(addCarrinho(produtos))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comprar)