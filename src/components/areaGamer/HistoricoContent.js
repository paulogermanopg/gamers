import React, { Component } from 'react'
import { View, StyleSheet, Text, Image, Dimensions, TouchableOpacity } from 'react-native'
import * as Font from 'expo-font'

let customFonts = {
    'PTSans-Bold': require('../../../assets/fonts/PTSans-Bold.ttf'),
    'PTSans-Regular': require('../../../assets/fonts/PTSans-Regular.ttf'),
  }

class HistoricoContent extends Component {
    //Este é o componente responsável pelo container do produto dentro do Histórico
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
                
                <View style={styles.bloco}>
                    <Text style={this.state.fontsLoaded ? styles.titulo : styles.tituloSemFonte }>{this.props.name}</Text>
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
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 10,
        marginVertical: 6,
        marginHorizontal: 5,
    },
    bloco: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    titulo: {
        fontFamily: 'PTSans-Bold',
        fontSize: 16,
        textAlign: 'left',
        marginLeft: 10,
        paddingVertical: 3,
        color: '#fff',
        width: Dimensions.get('window').width * 0.60,
    },
    tituloSemFonte: {
        fontFamily: '',
        fontSize: 16,
        textAlign: 'left',
        marginLeft: 10,
        paddingVertical: 3,
        color: '#fff',
        width: Dimensions.get('window').width * 0.60,
    },
    texto: {
        fontFamily: 'PTSans-Bold',
        fontSize: 16,
        textAlign: 'right',
        marginRight: 10,
        color: '#fff',
        width: Dimensions.get('window').width * 0.22,
    },
    textoSemFonte: {
        fontFamily: '',
        fontSize: 16,
        textAlign: 'right',
        marginRight: 10,
        color: '#fff',
        width: Dimensions.get('window').width * 0.22,
    },
})

export default HistoricoContent