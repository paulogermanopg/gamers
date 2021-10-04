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
             
             if (this.props.favoritos.indexOf(this.props.jogo) != -1) {
                
                this.setState({ corFavoritada: '#DC143C' })
             }
        }
    }

    favoritos = async() => {
        let arrayFavoritos = this.state.favoritos

        if (arrayFavoritos.indexOf(this.props.jogo) != -1){
            
        } else {
            arrayFavoritos.push(this.props.jogo)
        }
        
        await this.setState({ favoritos: arrayFavoritos, corFavoritada: '#00ada8' })
        this.props.onFavoritar({ ...this.state  })

        if (this.props.onAtualizar){
            this.props.onAtualizar && this.props.onAtualizar()
        }
    }

    render() {
        return (
            <TouchableOpacity style={styles.container}
                onPress={this.favoritos}>
                <FontAwesomeIcon icon={ faHeart } size={28} color={this.state.corFavoritada}/>
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