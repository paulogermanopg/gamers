import React, { Component } from 'react'
import { StyleSheet, View, Dimensions, Text } from 'react-native'
import * as Font from 'expo-font'

let customFonts = {
    'ConcertOne-Regular': require('../../../assets/fonts/ConcertOne-Regular.ttf'),
    'PTSans-Bold': require('../../../assets/fonts/PTSans-Bold.ttf'),
    'PTSans-Regular': require('../../../assets/fonts/PTSans-Regular.ttf'),
  }

class Apresentacao extends Component {
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
            <View style={styles.container}>
                <View style={styles.faixa}>
                    <Text style={this.state.fontsLoaded ? styles.textoTitulo: styles.textoTituloSemFonte}>
                        Gamer$
                    </Text>
                </View>
                
                <Text style={this.state.fontsLoaded ? styles.texto: styles.textoTituloSemFonte}>
                    {`\t\t\t`}Gamer$ é uma loja virtual e fictícia feita para fictícios 
                    jogadores que pretendem encontrar jogos de alta qualidade, aptos para 
                    avançar de nível e imergir neste mundo Gamer!
                    
                </Text>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
    },
    faixa: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#3c6090',
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 20,
        marginVertical: 5,
        width: Dimensions.get('window').width * 0.95,
    },
    textoTitulo: {
        fontFamily: 'PTSans-Bold',
        color: '#fff',
        textAlign: 'center',
        fontSize: 25,
        margin: 5
    },
    textoTituloSemFonte: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 25,
        margin: 10
    },
    texto: {
        fontFamily: 'PTSans-Regular',
        color: '#005252',
        textAlign: 'justify',
        fontSize: 20,
        margin: 3,
        width: Dimensions.get('window').width * 0.87,
    },
    textoSemFonte: {
        color: '#005252',
        textAlign: 'justify',
        fontSize: 20,
        margin: 3,
        width: Dimensions.get('window').width * 0.87,
    },
})

export default Apresentacao