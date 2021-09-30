import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import * as Font from 'expo-font'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

let customFonts = {
    'ConcertOne-Regular': require('../../../assets/fonts/ConcertOne-Regular.ttf'),
  }

class Header extends Component {
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

        return(
            <View style={styles.container}>
                {this.state.fontsLoaded &&
                    <Text style={styles.title}>Gamer$</Text>
                }
                <FontAwesomeIcon icon={ faShoppingCart } size={32} color={'rgb(255,255,255)'}/>
                
            </View>
            
        )
        
    } 
}

const styles = StyleSheet.create({
    container: {
        marginTop: 1,
        padding: 10,
        borderBottomWidth: 0.5,
        borderColor: '#BBB',
        backgroundColor: '#3c0068',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        color: '#FFF',
        fontFamily: 'ConcertOne-Regular',
        fontSize: 30,
    },
})

export default Header
