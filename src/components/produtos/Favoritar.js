import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'

import { connect } from 'react-redux'
import { addCarrinho } from '../../store/actions/produtos'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

class Favoritar extends Component {
    state = {
        carrinho: this.props.carrinho,
    }

    //Varifica toda vez que houver atualização no estado da aplicação
    componentDidUpdate = prevProps => {
        if (prevProps != this.props) {
            this.setState({ 
                carrinho: this.props.carrinho,
             })
        }
    }

    render() {
        return (
            <TouchableOpacity style={styles.container}
                onPress={this.carrinho}>
                <FontAwesomeIcon icon={ faHeart } size={28} color={'rgb(255,255,255)'}/>
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

const mapStateToProps = ({ produtos }) => {
    return {
        carrinho: produtos.carrinho,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddCarrinho: produtos => dispatch(addCarrinho(produtos))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favoritar)