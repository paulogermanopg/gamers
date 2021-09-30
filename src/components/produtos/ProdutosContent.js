import React, { Component } from 'react'
import { View, StyleSheet, Image, Dimensions } from 'react-native'
import { requiresImages, indice } from './requiresImages'

import Titulo from './Titulo'
import Preco from './Preco'
import Comprar from './Comprar'

class ProdutosContent extends Component {

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.blocoEsquerdo}>
                    <Image source={requiresImages[indice.indexOf(this.props.image)]} style={styles.image} />
                </View>

                <View style={styles.blocoDireito}>
                    <Titulo name={this.props.name} />
                    <Preco price={this.props.price} />
                    <Comprar />
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#789ac7',
        borderRadius: 20,
        marginTop: 20,
        marginBottom: 10,
    },
    image: {
        width: Dimensions.get('window').width * 0.4,
        resizeMode: 'contain',
        borderRadius: 10,
        marginLeft: 10,
    },
    blocoEsquerdo: {
        flexDirection: 'column',
    },
    blocoDireito: {
        flexDirection: 'column',
        alignItems: 'center',
    },
})

export default ProdutosContent