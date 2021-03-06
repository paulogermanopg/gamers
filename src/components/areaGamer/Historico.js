import React, { Component } from 'react'
import { StyleSheet, View, Dimensions, Text, FlatList } from 'react-native'
import * as Font from 'expo-font'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMoneyCheckAlt } from '@fortawesome/free-solid-svg-icons'

import HistoricoContent from './HistoricoContent'

let customFonts = {
    'ConcertOne-Regular': require('../../../assets/fonts/ConcertOne-Regular.ttf'),
    'PTSans-Bold': require('../../../assets/fonts/PTSans-Bold.ttf'),
    'PTSans-Regular': require('../../../assets/fonts/PTSans-Regular.ttf'),
  }

class Historico extends Component {
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

                <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
                    <Text style={this.state.fontsLoaded ? styles.textoTitulo: styles.textoTituloSemFonte}> 
                        Últimas Compras
                    </Text>
                </View>
                
                {/* Lista Vertical das últimas compras */}
                {/* Se houver produtos no histórico irá renderizar, se não mostrará uma mensagem */}
                <View style={styles.faixa}>
                    {this.props.historico.length > 0 ?

                        <View style={{ justifyContent: 'center', marginHorizontal: 10, paddingTop: 10 }}>
                            <FlatList data={this.props.historico}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={( { item } ) =>
                                <HistoricoContent key={item.id} {...item} />} />
                        </View>

                        :

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ alignItems: 'center', padding: 20 }}>
                                <FontAwesomeIcon icon={ faMoneyCheckAlt } size={50} color='rgba(0, 102, 102,0.5)'/>
                            </View>
                            <Text style={this.state.fontsLoaded ? styles.texto: styles.textoSemFonte}>
                                Você ainda não comprou jogos
                            </Text>
                        </View>

                    }

                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
    },
    faixa: {
        flexDirection: 'row',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#3c6090',
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 20,
        marginVertical: 5,
        width: Dimensions.get('window').width * 0.95,
        height: Dimensions.get('window').height * 0.35,
    },
    textoTitulo: {
        flex: 1,
        fontFamily: 'PTSans-Bold',
        color: '#005252',
        textAlign: 'left',
        fontSize: 22,
        marginVertical: 5,
        marginHorizontal: 15
    },
    textoTituloSemFonte: {
        flex: 1,
        color: '#005252',
        textAlign: 'left',
        fontSize: 22,
        marginVertical: 5,
        marginHorizontal: 15
    },
    texto: { 
        fontFamily: 'PTSans-Bold',
        color: 'rgba(0, 102, 102,0.5)',
        textAlign: 'center',
        fontSize: 18,
        marginVertical: 5,
        marginHorizontal: 15,
        width: Dimensions.get('window').width * 0.5,
    },
    textoSemFonte: {
        color: 'rgba(0, 102, 102,0.5)',
        textAlign: 'center',
        fontSize: 18,
        marginVertical: 5,
        marginHorizontal: 15,
        width: Dimensions.get('window').width * 0.5,
    },
})

export default Historico