import React, { Component } from 'react'
import { StyleSheet, View, Dimensions, Text } from 'react-native'
import * as Font from 'expo-font'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSearchDollar, faGamepad, faHome } from '@fortawesome/free-solid-svg-icons'

let customFonts = {
    'ConcertOne-Regular': require('../../../assets/fonts/ConcertOne-Regular.ttf'),
    'PTSans-Bold': require('../../../assets/fonts/PTSans-Bold.ttf'),
    'PTSans-Regular': require('../../../assets/fonts/PTSans-Regular.ttf'),
  }

class Sobre extends Component {
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

                <View style={{ flexDirection: 'row'}}>

                    <View style={styles.faixaEsquerda}>
                            <FontAwesomeIcon icon={ faSearchDollar } size={32} color={'#fff'}/>
                    </View>
                    <View style={styles.faixaDireita}>
                            <FontAwesomeIcon icon={ faGamepad } size={32} color={'#fff'}/>
                    </View>

                </View>

                <View style={{ flexDirection: 'row'}}>

                    <View style={styles.bloco}>
                        <Text style={this.state.fontsLoaded ? styles.texto: styles.textoSemFonte}>
                            Compras Rápidas{`\n`}
                            Descontos{`\n`}
                            Frete Grátis{`\n`}
                            Novidades
                        </Text>
                    </View>
                    <View style={styles.bloco}>
                        <Text style={this.state.fontsLoaded ? styles.texto: styles.textoSemFonte}>
                            Rápido Acesso{`\n`}
                            Histórico{`\n`}
                            Favoritos{`\n`}
                            Seguro e prático
                        </Text>
                    </View>

                </View>

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
    faixaDireita: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3c6090',
        borderBottomRightRadius: 20,
        marginVertical: 5,
        padding: 5,
        marginHorizontal: 2.5,
        width: Dimensions.get('window').width * 0.45,
    },
    faixaEsquerda: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3c6090',
        borderTopLeftRadius: 20,
        marginVertical: 5,
        padding: 5,
        marginHorizontal: 2.5,
        width: Dimensions.get('window').width * 0.45,
    },
    bloco: {
        alignItems: 'center',
        borderWidth: 1.5,
        borderRadius: 10,
        borderColor: '#3c6090',
        padding: 5,
        backgroundColor: '#557eb5',
        marginHorizontal: 2.5,
        width: Dimensions.get('window').width * 0.45,
    },
    texto: {
        fontFamily: 'PTSans-Bold',
        color: '#fff',
        textAlign: 'center',
        fontSize: 20,
        margin: 3,
        width: Dimensions.get('window').width * 0.45,
    },
    textoSemFonte: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 20,
        margin: 3,
        width: Dimensions.get('window').width * 0.45,
    },
})

export default Sobre