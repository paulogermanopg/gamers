import React, { Component } from 'react'
import { View, StyleSheet, Dimensions, Text, TouchableOpacity, Modal, FlatList } from 'react-native'
import * as Font from 'expo-font'
import ProdutosCarrinho from './ProdutosCarrinho'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import data from '../../../products.json'
let jogos = data

let customFonts = {
    'ConcertOne-Regular': require('../../../assets/fonts/ConcertOne-Regular.ttf'),
    'PTSans-Bold': require('../../../assets/fonts/PTSans-Bold.ttf'),
    'PTSans-Regular': require('../../../assets/fonts/PTSans-Regular.ttf'),
  }

class Carrinho extends Component {
    state = {
        fontsLoaded: false,
        produtos: jogos,
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
            <Modal transparent={true} visible={this.props.isVisible} onRequestClose={this.props.onCancel}
                animationType='fade' transparent={true}>
                <View style={styles.container}>

                    <View style={styles.bloco}>
                        {/* Parte do título e botão de sair */}
                        <View style={styles.blocoTitulo}>
                            <TouchableOpacity style={styles.left} onPress={this.props.onCancel}>
                                <FontAwesomeIcon icon={ faTimes } size={40} color='#300053'/>
                            </TouchableOpacity>
                            <View style={styles.center}>
                                <Text style={this.state.fontsLoaded ? styles.textoTitulo: styles.textoTituloSemFonte}>
                                    Carrinho
                                </Text>
                            </View>
                        </View>
                        
                        {/* Lista de produtos adicionados */}
                        <View style={styles.blocoProdutos}>
                            <FlatList data={this.state.produtos}
                                keyExtractor={item => `${item.id}`}
                                renderItem={( { item } ) =>
                                <ProdutosCarrinho key={item.id} {...item} />} />
                        </View> 

                        {/* Informações do checkout */}
                        <View style={{ flexDirection: 'row' }}>

                            <View style={styles.checkoutTitulo}>
                                <Text style={this.state.fontsLoaded ? styles.tituloValores : styles.tituloValoresSemFonte }>
                                    Subtotal:
                                </Text>
                                <Text style={this.state.fontsLoaded ? styles.tituloValores : styles.tituloValoresSemFonte }>
                                    Frete:
                                </Text>
                                <Text style={this.state.fontsLoaded ? styles.tituloValores : styles.tituloValoresSemFonte }>
                                    Total:
                                </Text>
                            </View>

                            <View style={styles.checkoutValores}>
                                <Text style={this.state.fontsLoaded ? styles.valores : styles.valoresSemFonte }>
                                    R$ 102,09
                                </Text>
                                <Text style={this.state.fontsLoaded ? styles.valores : styles.valoresSemFonte }>
                                    R$ 10
                                </Text>
                                <Text style={this.state.fontsLoaded ? styles.valores : styles.valoresSemFonte }>
                                    R$ 112,09
                                </Text>
                            </View>

                        </View>
                        
                        {/* Botões para finalizar ou comprar mais */}
                        <TouchableOpacity style={styles.left} onPress={this.props.onCancel}>
                            <View style={styles.botoesFinais02}>
                                <Text style={this.state.fontsLoaded ? styles.textoBotao : styles.textoBotaoSemFonte }>
                                    Continuar Comprando
                                </Text>
                            </View>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={styles.left} onPress={this.props.onCancel}>
                            <View style={styles.botoesFinais}>
                                <Text style={this.state.fontsLoaded ? styles.textoBotao : styles.textoBotaoSemFonte }>
                                    Finalizar Compra
                                </Text>
                            </View>
                        </TouchableOpacity>
                        

                    </View>
                </View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderColor: '#BBB',
    },
    bloco: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: '#ebeff5',
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#300053',
        width: Dimensions.get('window').width * 0.9
    },
    blocoTitulo: {
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 10,
    },
    blocoProdutos: {
        width: Dimensions.get('window').width * 0.8,
        height: Dimensions.get('window').height * 0.25,
        marginBottom: 10,
    },
    checkoutTitulo: {
        width: Dimensions.get('window').width * 0.4,
        justifyContent: 'flex-start'
    },
    checkoutValores: {
        width: Dimensions.get('window').width * 0.4,
        justifyContent: 'flex-end'
    },
    left: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginLeft: 5,
    },
    center: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: -40
    },
    textoTitulo: {
        fontFamily: 'PTSans-Bold',
        color: '#300053',
        textAlign: 'justify',
        fontSize: 25,
        margin: 10
    },
    textoTituloSemFonte: {
        color: '#300053',
        textAlign: 'justify',
        fontSize: 25,
        margin: 10
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
   tituloValores: {
        fontFamily: 'PTSans-Bold',
        color: '#300053',
        textAlign: 'left',
        fontSize: 18,
        margin: 3
    },
    valores: {
        fontFamily: 'PTSans-Bold',
        color: '#300053',
        textAlign: 'right',
        fontSize: 18,
        margin: 3
    },
   valoresSemFonte: {
        color: '#300053',
        textAlign: 'left',
        fontSize: 18,
        margin: 3
    },
    botoesFinais: {
        width: Dimensions.get('window').width * 0.8,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#300053',
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 20,
        marginVertical: 5,
    },
    botoesFinais02: {
        width: Dimensions.get('window').width * 0.8,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#3c6090',
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 20,
        marginVertical: 5,
    },
    textoBotao: {
        fontFamily: 'PTSans-Bold',
        color: '#fff',
        textAlign: 'center',
        fontSize: 22,
        margin: 5
    },
   textoBotaoSemFonte: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 22,
        margin: 5
    },
})

export default Carrinho