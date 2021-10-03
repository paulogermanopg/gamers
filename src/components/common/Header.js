import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import * as Font from 'expo-font'
import Carrinho from './Carrinho'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

let customFonts = {
    'ConcertOne-Regular': require('../../../assets/fonts/ConcertOne-Regular.ttf'),
  }

class Header extends Component {
    state = {
        fontsLoaded: false,
        showCarrinho: false,
    }

    //Necessário para usar fonte personalizada no Expo
    async _loadFontsAsync() {
        await Font.loadAsync(customFonts)
        this.setState({ fontsLoaded: true })
    }
    
    componentDidMount() {
        this._loadFontsAsync()
    }
    //-----------------------

    render() {

        return(
            <View style={styles.container}>

                <Carrinho isVisible={this.state.showCarrinho} 
                    onCancel={() => this.setState({ showCarrinho: false })}
                    navigation = { this.props.navigation } />
                
                {this.state.fontsLoaded &&
                    <Text style={styles.title}>Gamer$</Text>
                }



                <TouchableOpacity style={styles.carrinho}
                    onPress={() => this.setState({ showCarrinho: true })}>
                    <FontAwesomeIcon icon={ faShoppingCart } size={32} color={'rgb(255,255,255)'}/>
                </TouchableOpacity>

            </View>
            
        )
        
    } 
}

const styles = StyleSheet.create({
    container: {
        marginTop: 0,
        padding: 10,
        paddingTop: 35,
        borderBottomWidth: 0.5,
        borderColor: '#BBB',
        backgroundColor: '#006666',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        color: '#FFF',
        fontFamily: 'ConcertOne-Regular',
        fontSize: 35,
    },
    carrinho: {
        paddingRight: 5,
        paddingTop: 5
    }
})

export default Header
