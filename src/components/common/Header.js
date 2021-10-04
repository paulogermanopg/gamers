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
                    
                    {/* Renderiza a contagem do carrinho apenas quando o número de produtos for maior que 0 */}
                    {(this.state.fontsLoaded && this.props.carrinho.length > 0) &&
                    <View style={styles.numeroProdutos}>
                        <Text style={styles.textNumeroProdutos}>{this.props.carrinho.length}</Text>
                    </View>
                    }
                    
                    {/* Simplesmente o ícone do carrinho */}
                    <FontAwesomeIcon icon={ faShoppingCart } size={32} 
                        color={this.props.carrinho.length > 0 ? '#789ac7' : 'rgb(255,255,255)'}/>
                
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
    textNumeroProdutos: {
        color: '#789ac7',
        fontFamily: 'ConcertOne-Regular',
        fontSize: 12,
        padding: 5,
    },
    numeroProdutos: {
        justifyContent: 'center',
        alignSelf: 'flex-end',
        backgroundColor: '#fff',
        borderRadius: 100,
        marginRight: 3,
    },
    carrinho: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 5,
        paddingTop: 5
    }
})

export default Header
