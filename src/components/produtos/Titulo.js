import React, { Component } from 'react'
import { View, StyleSheet, Dimensions, Text } from 'react-native'
import * as Font from 'expo-font'

let customFonts = {
    'PTSans-Bold': require('../../../assets/fonts/PTSans-Bold.ttf'),
  }

class Titulo extends Component {
    state = {
        fontsLoaded: false,
    }

    async _loadFontsAsync() {
        await Font.loadAsync(customFonts)
        this.setState({ fontsLoaded: true })
    }
    
    componentDidMount() {
        this._loadFontsAsync()
    }

    render() {
        return (
            <View style={styles.container}>

                <Text style={this.state.fontsLoaded ? styles.titulo : styles.tituloSemFonte }>{this.props.name}</Text>

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
    titulo: {
        fontFamily: 'PTSans-Bold',
        fontSize: 20,
        textAlign: 'center',
        color: '#fff',
        width: Dimensions.get('window').width * 0.5,
    },
    tituloSemFonte: {
        fontFamily: '',
        fontSize: 20,
        textAlign: 'center',
        color: '#fff',
        width: Dimensions.get('window').width * 0.5,
    },
})

export default Titulo