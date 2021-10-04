import React, { Component } from 'react'
import { StyleSheet, View, Dimensions, Text, FlatList } from 'react-native'
import * as Font from 'expo-font'

import FavoritosContent from './FavoritosContent'

let customFonts = {
    'ConcertOne-Regular': require('../../../assets/fonts/ConcertOne-Regular.ttf'),
    'PTSans-Bold': require('../../../assets/fonts/PTSans-Bold.ttf'),
    'PTSans-Regular': require('../../../assets/fonts/PTSans-Regular.ttf'),
  }

class Favoritos extends Component {
    state = {
        fontsLoaded: false,
        favoritos: this.props.favoritos,
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
                        Lista de Desejos
                    </Text>
                </View>

                {/* Lista Horizontal dos jogos favoritados */}
                <View style={styles.faixa}>

                    <View style={{ justifyContent: 'center', marginHorizontal: 10 }}>
                        <FlatList data={this.state.favoritos}
                            horizontal={true}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={( { item } ) =>
                            <FavoritosContent key={item.id} {...item} onAtualizar={this.props.onAtualizar} />} />
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
    faixa: {
        flexDirection: 'row',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#3c6090',
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 20,
        marginVertical: 5,
        width: Dimensions.get('window').width * 0.95,
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
})

export default Favoritos