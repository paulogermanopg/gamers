import React, { Component } from 'react'
import { StyleSheet, View, Dimensions, Text } from 'react-native'
import * as Font from 'expo-font'
import moment from 'moment'
import 'moment/locale/pt-br'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCoffee, faMoon, faUserSecret, faCloud } from '@fortawesome/free-solid-svg-icons'

let customFonts = {
    'ConcertOne-Regular': require('../../../assets/fonts/ConcertOne-Regular.ttf'),
    'PTSans-Bold': require('../../../assets/fonts/PTSans-Bold.ttf'),
    'PTSans-Regular': require('../../../assets/fonts/PTSans-Regular.ttf'),
  }

class Formalizacao extends Component {
    state = {
        fontsLoaded: false,
        horas: moment().get('hour'),
        bomDTN: 'Bom',
        icon: faCoffee,
    }

    //Necessário para usar fonte personalizada no Expo
    async _loadFontsAsync() {
        await Font.loadAsync(customFonts)
        this.setState({ fontsLoaded: true })
    }
    
    componentDidMount() {
        this._loadFontsAsync()
        //apenas para controlar a formalização por turnos
        if ((this.state.horas >= 5) && (this.state.horas < 12)) {
            this.setState({ bomDTN: 'Bom dia', icon: faCoffee })
        } else if ((this.state.horas >= 12) && (this.state.horas < 18)) {
            this.setState({ bomDTN: 'Boa tarde', icon: faCloud })
        } else if ((this.state.horas >= 18) && (this.state.horas <24)) {
            this.setState({ bomDTN: 'Boa noite', icon: faMoon })
        } else {
            this.setState({ bomDTN: 'Boa madrugada', icon: faUserSecret })
        }
        //-----------------------------------
    }
    //-------------------------------

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.faixa}>

                    <View style={{ justifyContent: 'center', marginHorizontal: 10 }}>
                        <FontAwesomeIcon icon={ this.state.icon } size={30} color={'rgb(255,255,255)'}/>
                    </View>
                    
                    <Text style={this.state.fontsLoaded ? styles.textoTitulo: styles.textoTituloSemFonte}> 
                        {this.state.bomDTN} Usuário
                    </Text>

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
        flex: 1,
        fontFamily: 'PTSans-Bold',
        color: '#fff',
        textAlign: 'center',
        fontSize: 25,
        marginVertical: 5,
        marginLeft: -30,
    },
    textoTituloSemFonte: {
        flex: 1,
        color: '#fff',
        textAlign: 'center',
        fontSize: 25,
        marginVertical: 5,
        marginLeft: -30,
    },
})

export default Formalizacao