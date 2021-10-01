import React, { Component } from 'react'
import { View, StyleSheet, Text, Image, Dimensions, TouchableOpacity } from 'react-native'
import { requiresImages, indice } from '../produtos/requiresImages'
import * as Font from 'expo-font'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

import Comprar from '../produtos/Comprar'

let customFonts = {
    'PTSans-Bold': require('../../../assets/fonts/PTSans-Bold.ttf'),
    'PTSans-Regular': require('../../../assets/fonts/PTSans-Regular.ttf'),
  }

class ProdutosCarrinho extends Component {
    //Este é o componente responsável pelo container do produto dentro do Carrinho
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
    //------------------------

    render() {
        return (
            <View style={styles.container}>

                {/* Container mostrando o jogo */}
                <View style={styles.blocoEsquerdo}>
                    <View style={styles.containerImage}>
                        <Image source={requiresImages[indice.indexOf(this.props.image)]} style={styles.image} />
                    </View>   
                </View>

                <View style={styles.blocoDireito}>
                    <Text style={this.state.fontsLoaded ? styles.titulo : styles.tituloSemFonte }>{this.props.name}</Text>
                    <Text style={this.state.fontsLoaded ? styles.texto : styles.textoSemFonte }>{`R$ ${this.props.price}`}</Text>
                </View>

                {/* Botão para excluir o produto do carrinho */}
                <View>
                    <TouchableOpacity style={styles.botoes}
                        onPress={this.nada}>
                        <FontAwesomeIcon icon={ faTrash } size={28} color={'rgb(255,255,255)'}/>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#3c6090',
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 20,
        marginVertical: 5,
    },
    image: {
        width: Dimensions.get('window').width * 0.15,
        height: Dimensions.get('window').width * 0.15,
        resizeMode: 'contain',
        marginLeft: 5,
        marginVertical: 5,
        
    },
    containerImage: {
        borderWidth: 1.5,
        borderTopLeftRadius: 20,
        borderColor: '#3c6090',
        backgroundColor: '#ebeff5'
    },
    blocoEsquerdo: {
        flexDirection: 'column',
        alignSelf: 'flex-start',
    },
    blocoDireito: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    titulo: {
        fontFamily: 'PTSans-Bold',
        fontSize: 16,
        textAlign: 'left',
        marginLeft: 5,
        color: '#fff',
        width: Dimensions.get('window').width * 0.42,
    },
    tituloSemFonte: {
        fontFamily: '',
        fontSize: 16,
        textAlign: 'left',
        marginLeft: 5,
        color: '#fff',
        width: Dimensions.get('window').width * 0.42,
    },
    texto: {
        fontFamily: 'PTSans-Bold',
        fontSize: 18,
        textAlign: 'left',
        marginLeft: 5,
        color: '#fff',
        width: Dimensions.get('window').width * 0.42,
    },
    textoSemFonte: {
        fontFamily: '',
        fontSize: 18,
        textAlign: 'left',
        marginLeft: 5,
        color: '#fff',
        width: Dimensions.get('window').width * 0.42,
    },
    botoes: {
        //flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        margin: 10,
        padding: 5,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#fff'
    }
})

export default ProdutosCarrinho