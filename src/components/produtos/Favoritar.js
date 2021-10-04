import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'

import { connect } from 'react-redux'
import { favoritar } from '../../store/actions/user'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

class Favoritar extends Component {
    state = {
        favoritos: this.props.favoritos,
        corFavoritada: 'rgb(255,255,255)',
    }

    //Varifica toda vez que houver atualização no estado da aplicação
    componentDidUpdate = prevProps => {
        
        if (prevProps.favoritos !== this.props.favoritos) {

            this.setState({ 
                favoritos: this.props.favoritos,
             })

        }
    }

    favoritos = async() => {
        let arrayFavoritos = this.state.favoritos
        //verifica quantas vezes o jogo aparece na lista, no caso será 0 ou 1
        let ocorrencia = arrayFavoritos.filter(obj => obj.id == this.props.jogo.id).length 

        let cor = ''

        //Se o jogo já tiver na lista de favoritos ele filtra e pega todos menos ele
        //Se não apenas acrescenta o mesmo
        if (ocorrencia > 0){
            arrayFavoritos = arrayFavoritos.filter(obj => obj.id != this.props.jogo.id) 
            cor = 'rgb(255,255,255)'
        } else {
            arrayFavoritos.push(this.props.jogo)
            cor = '#81e6e3'
        }

        await this.setState({ favoritos: arrayFavoritos, corFavoritada: cor })
        this.props.onFavoritar({ ...this.state  })

    }

    render() {
        return (
            <TouchableOpacity style={styles.container}
                onPress={this.favoritos}>
                <FontAwesomeIcon icon={ faHeart } size={28} 
                    color={this.state.corFavoritada}/>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        marginHorizontal: 5,
        padding: 5,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#fff'
    },
})

const mapStateToProps = ({ user }) => {
    return {
        favoritos: user.favoritos,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFavoritar: produtos => dispatch(favoritar(produtos))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favoritar)