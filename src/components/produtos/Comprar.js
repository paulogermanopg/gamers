import React, { Component } from 'react'
import { View, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native'
import * as Font from 'expo-font'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

let customFonts = {
    'PTSans-Bold': require('../../../assets/fonts/PTSans-Bold.ttf'),
  }

class Comprar extends Component {
    state = {
        fontsLoaded: false,
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

    render() {
        return (
            <TouchableOpacity style={styles.container}
                onPress={() => this.ordenar('Popular')}>
                <Text style={this.state.fontsLoaded ? styles.texto : styles.textoSemFonte }>+Carrinho</Text>
                <FontAwesomeIcon icon={ faShoppingCart } size={28} color={'rgb(255,255,255)'}/>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
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

export default Comprar