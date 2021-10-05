import React, { Component } from 'react'
import { View, StyleSheet, Image, Dimensions, FlatList, Text } from 'react-native'
import * as Font from 'expo-font'

let customFonts = {
    'PTSans-Bold': require('../../../assets/fonts/PTSans-Bold.ttf'),
  }

class Preco extends Component {
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
    //--------------------

    render() {
        return (
            <View style={styles.container}>

                <Text style={this.state.fontsLoaded ? styles.texto : styles.textoSemFonte }>{`R$ ${this.props.price}`}</Text>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    texto: {
        fontFamily: 'PTSans-Bold',
        fontSize: 22,
        textAlign: 'center',
        color: '#fff',
        width: Dimensions.get('window').width * 0.5,
    },
    textoSemFonte: {
        fontFamily: '',
        fontSize: 22,
        textAlign: 'center',
        color: '#fff',
        width: Dimensions.get('window').width * 0.5,
    },
})

export default Preco