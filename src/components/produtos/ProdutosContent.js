import React, { Component } from 'react'
import { View, StyleSheet, Image, Dimensions } from 'react-native'
import { requiresImages, indice } from './requiresImages'

import Titulo from './Titulo'
import Preco from './Preco'
import Comprar from './Comprar'

class ProdutosContent extends Component {
    //Este é o componente responsável pelo container do produto, chamando como filhos Titulo, Preço e Comprar 

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.blocoEsquerdo}>
                    <View style={styles.containerImage}>
                        <Image source={requiresImages[indice.indexOf(this.props.image)]} style={styles.image} />
                    </View>   
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
        backgroundColor: '#3c6090',
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 20,
        marginTop: 20,
        marginBottom: 10,
    },
    image: {
        width: Dimensions.get('window').width * 0.4,
        height: Dimensions.get('window').width * 0.4,
        resizeMode: 'contain',
        marginLeft: 10,
        marginVertical: 10,
        
    },
    containerImage: {
        borderWidth: 1.5,
        borderTopLeftRadius: 20,
        borderColor: '#3c6090',
        backgroundColor: '#ebeff5'
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