import React, { Component } from 'react'
import { View, StyleSheet, Text, Image, Dimensions, TouchableOpacity } from 'react-native'
import { requiresImages, indice } from '../produtos/requiresImages'
import * as Font from 'expo-font'
import JogoFavorito from './JogoFavorito'

let customFonts = {
    'PTSans-Bold': require('../../../assets/fonts/PTSans-Bold.ttf'),
    'PTSans-Regular': require('../../../assets/fonts/PTSans-Regular.ttf'),
  }

class FavoritosContent extends Component {
    //Este é o componente responsável pelo container do produto dentro do Histórico
    state = {
        fontsLoaded: false,
        showFavorito: false,
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

                {/* Modal do jogo escolhido */}
                <JogoFavorito isVisible={this.state.showFavorito} 
                    onCancel={() => this.setState({ showFavorito: false })}
                    jogo={this.props} onAtualizar={this.props.onAtualizar} />


                {/* Container mostrando o jogo */}
                <TouchableOpacity onPress={() => this.setState({ showFavorito: true })}>
                    <View style={styles.blocoCima}>
                        <View style={styles.containerImage}>
                            <Image source={requiresImages[indice.indexOf(this.props.image)]} style={styles.image} />
                        </View>   
                    </View>
                </TouchableOpacity>

                <View style={styles.blocoBaixo}>
                        <Text style={this.state.fontsLoaded ? styles.texto : styles.textoSemFonte }>{`R$ ${this.props.price}`}</Text>
                    </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#3c6090',
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 20,
        marginVertical: 10,
        marginHorizontal: 5,
    },
    image: {
        width: Dimensions.get('window').width * 0.25,
        height: Dimensions.get('window').width * 0.25,
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
    blocoCima: {
        flexDirection: 'column',
        alignSelf: 'flex-start',
    },
    blocoBaixo: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    texto: {
        fontFamily: 'PTSans-Bold',
        fontSize: 16,
        textAlign: 'left',
        marginLeft: 5,
        color: '#fff',
        width: Dimensions.get('window').width * 0.25,
    },
    textoSemFonte: {
        fontFamily: '',
        fontSize: 16,
        textAlign: 'left',
        marginLeft: 5,
        color: '#fff',
        width: Dimensions.get('window').width * 0.25,
    },
})

export default FavoritosContent