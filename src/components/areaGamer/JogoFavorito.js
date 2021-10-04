import React, { Component } from 'react'
import { View, StyleSheet, Image, Dimensions, Modal } from 'react-native'
import { requiresImages, indice } from '../produtos/requiresImages'

import Titulo from '../produtos/Titulo'
import Preco from '../produtos/Preco'
import Comprar from '../produtos/Comprar'
import Favoritar from '../produtos/Favoritar'

class JogoFavorito extends Component {
    //Este é o componente responsável pelo container do produto, chamando como filhos Titulo, Preço e Comprar 

    render() {
        return (
            <Modal transparent={true} visible={this.props.isVisible} onRequestClose={this.props.onCancel}
                animationType='fade' transparent={true}>
                
                <View style={styles.container}>

                    <View style={styles.containerJogo}>

                        <View style={styles.blocoEsquerdo}>
                            <View style={styles.containerImage}>
                                <Image source={requiresImages[indice.indexOf(this.props.jogo.image)]} style={styles.image} />
                            </View>   
                        </View>

                        <View style={styles.blocoDireito}>

                            <Titulo name={this.props.jogo.name} />
                            <Preco price={this.props.jogo.price} />
                            <View style={{ flexDirection:  'row' }}>
                                <Comprar jogo={this.props.jogo} onCancel={this.props.onCancel}/>
                                <Favoritar jogo={this.props.jogo} onAtualizar={this.props.onAtualizar} />
                            </View>

                        </View>
                        
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
        backgroundColor: 'rgba(0,0,0,0.7)',
    },
    containerJogo: {
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

export default JogoFavorito