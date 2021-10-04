import React, { Component } from 'react'
import { View, StyleSheet, Dimensions, Text, TouchableOpacity, Modal, FlatList } from 'react-native'
import * as Font from 'expo-font'
import ProdutosCarrinho from './ProdutosCarrinho'

import { connect } from 'react-redux'
import { addCarrinho, limparCarrinho } from '../../store/actions/produtos'
import { registrar } from '../../store/actions/user'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTimes, faGhost } from '@fortawesome/free-solid-svg-icons'

let customFonts = {
    'ConcertOne-Regular': require('../../../assets/fonts/ConcertOne-Regular.ttf'),
    'PTSans-Bold': require('../../../assets/fonts/PTSans-Bold.ttf'),
    'PTSans-Regular': require('../../../assets/fonts/PTSans-Regular.ttf'),
  }

class Carrinho extends Component {
    state = {
        fontsLoaded: false,
        carrinho: this.props.carrinho,
        subTotal: 0,
        total: 0,
        frete: 0,
        semProdutos: true,
        desabilitar: true,
        historico: this.props.historico,
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

    //Varifica toda vez que houver atualização no estado da aplicação
    componentDidUpdate = prevProps => {
        if (prevProps != this.props) {
       
             if(this.props.carrinho.length == 0){
                this.setState({ 
                    carrinho: this.props.carrinho,
                    semProdutos: true,
                    desabilitar: true
                 })
             } else {
                this.setState({ 
                    carrinho: this.props.carrinho,
                    semProdutos: false,
                    desabilitar: false
                 })
             }
             this.calcularValores()
        }
    }

    //calculrValores é chamado no componentDidUpdate toda vez que o props é atualizado
    calcularValores = () => {
        let frete = this.state.carrinho.length * 10
        let subTotal = 0
        let total = 0
        let cont = 0

        while (cont < this.state.carrinho.length){
            subTotal = subTotal + this.state.carrinho[cont].price
            cont ++
        }

        if (subTotal > 250){
            frete = 0
        }

        total = subTotal + frete

        this.setState({ 
            subTotal: parseFloat(subTotal.toFixed(2)), 
            total: parseFloat(total.toFixed(2)), 
            frete: frete 
        })
    }

    //apagarJogo é passado como propriedade para o ProdutosCarrinho, e retorna via callback o id
    apagarJogo = async(id) => {
        let array = []
        let cont = 0
        let ocorrencia = 0

        //ocorrencia dirá quantas vezes o item se repete no carrinho
        ocorrencia = this.state.carrinho.filter(obj => obj.id == id).length 
        //array será uma lista sem o item a ser excluído
        array = this.state.carrinho.filter(obj => obj.id != id) 
        
        //se acaso tiver mais de um item repetido, irá adicionar todos exceto 1 ao array
        if (ocorrencia > 1){
            while (cont < this.state.carrinho.length) {
                if (this.state.carrinho[cont].id == id){
                    array.push(this.state.carrinho[cont])
                    ocorrencia = ocorrencia - 1
                    if (ocorrencia == 1){ 
                        cont = this.state.carrinho.length
                    }
                }
                cont++
            }
        }
        
        await this.setState({ carrinho: array })
        this.props.onAddCarrinho({ ...this.state  })
    }

    //Fecha o modal do Carrinho e redireciona para a screem Produtos
    continuarComprando = () => {
        this.props.onCancel()
        this.props.navigation.navigate('Produtos')
    }

    //Finaliza a compra, zerando o array do carrinho e enviando o histórico
    finalizarCompra = async() => {
        let arrayHistorico = this.state.historico
        let cont = 0
        while (cont < this.state.carrinho.length){
            arrayHistorico.push(this.state.carrinho[cont])
            cont ++
        }
        await this.setState({ historico: arrayHistorico, carrinho: [] })
        this.props.onRegistrar({ ...this.state  })
        this.props.onLimparCarrinho()
        this.props.onCarrinho && this.props.onCarrinho()
        this.props.onCancel()
        this.props.navigation.navigate('AreaGamer')
    }

    render() {
        return (
            <Modal transparent={true} visible={this.props.isVisible} onRequestClose={this.props.onCancel}
                animationType='fade' transparent={true}>
                <View style={styles.container}>

                    <View style={styles.bloco}>
                        {/* Parte do título e botão de sair */}
                        <View style={styles.blocoTitulo}>
                            <TouchableOpacity style={styles.left} onPress={this.props.onCancel}>
                                <FontAwesomeIcon icon={ faTimes } size={40} color='#006666'/>
                            </TouchableOpacity>
                            <View style={styles.center}>
                                <Text style={this.state.fontsLoaded ? styles.textoTitulo: styles.textoTituloSemFonte}>
                                    Carrinho
                                </Text>
                            </View>
                        </View>
                        
                        {/* Mostra Lista de produtos adicionados se houver produtos */}
                        {!this.state.semProdutos &&
                            <View style={styles.blocoProdutos}>
                                <FlatList data={this.state.carrinho}
                                    keyExtractor={(item, index) => index.toString()}
                                    renderItem={( { item } ) =>
                                    <ProdutosCarrinho key={item.id} {...item} 
                                        onApagarJogo={this.apagarJogo} />} />
                            </View>
                        }

                        {/* Mostra fantasma acaso não tenha produtos */}
                        {this.state.semProdutos && 
                            <View style={styles.blocoProdutos}>
                                <View style={{ alignItems: 'center', marginTop: 20}}>
                                    <FontAwesomeIcon icon={ faGhost } size={90} color='rgba(0, 102, 102,0.5)'/>
                                </View>
                            </View>
                        }
                        

                        {/* Informações do checkout */}
                        <View style={{ flexDirection: 'row' }}>

                            <View style={styles.checkoutTitulo}>
                                <Text style={this.state.fontsLoaded ? styles.tituloValores : styles.tituloValoresSemFonte }>
                                    Subtotal:
                                </Text>
                                <Text style={this.state.fontsLoaded ? styles.tituloValores : styles.tituloValoresSemFonte }>
                                    Frete:
                                </Text>
                                <Text style={this.state.fontsLoaded ? styles.tituloValores : styles.tituloValoresSemFonte }>
                                    Total:
                                </Text>
                            </View>

                            {/* Os valores são puxados diretamente do state */}
                            <View style={styles.checkoutValores}>
                                <Text style={this.state.fontsLoaded ? styles.valores : styles.valoresSemFonte }>
                                    {`R$ ${this.state.subTotal}`}
                                </Text>
                                <Text style={this.state.fontsLoaded ? styles.valores : styles.valoresSemFonte }>
                                    {`R$ ${this.state.frete}`}
                                </Text>
                                <Text style={this.state.fontsLoaded ? styles.valores : styles.valoresSemFonte }>
                                    {`R$ ${this.state.total}`}
                                </Text>
                            </View>

                        </View>
                        
                        {/* Botões para finalizar ou comprar mais */}
                        <TouchableOpacity style={styles.left} onPress={this.continuarComprando}>
                            
                            <View style={styles.botoesFinais02}>
                                <Text style={this.state.fontsLoaded ? styles.textoBotao : styles.textoBotaoSemFonte }>
                                    Continuar Comprando
                                </Text>
                            </View>

                        </TouchableOpacity>
                        
                        {/* O disabled indica se há produtos ou não no carrinho para poder finalizar a compra */}
                        <TouchableOpacity style={styles.left} onPress={this.finalizarCompra}
                            disabled={this.state.desabilitar}>
                            
                            <View style={this.state.desabilitar ? 
                                    styles.botoesFinalizarDesabilitado : styles.botoesFinalizar}>
                                <Text style={this.state.fontsLoaded ? styles.textoBotao : styles.textoBotaoSemFonte }>
                                    Finalizar Compra
                                </Text>
                            </View>

                        </TouchableOpacity>
                        
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
        flexDirection: 'column',
        backgroundColor: 'rgba(0,0,0,0.7)',
        borderColor: '#BBB',
    },
    bloco: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: '#ebeff5',
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#006666',
        width: Dimensions.get('window').width * 0.9
    },
    blocoTitulo: {
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 10,
    },
    blocoProdutos: {
        width: Dimensions.get('window').width * 0.8,
        height: Dimensions.get('window').height * 0.25,
        marginBottom: 10,
    },
    checkoutTitulo: {
        width: Dimensions.get('window').width * 0.2,
        justifyContent: 'flex-start'
    },
    checkoutValores: {
        width: Dimensions.get('window').width * 0.6,
        justifyContent: 'flex-end'
    },
    left: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginLeft: 5,
    },
    center: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: -40
    },
    textoTitulo: {
        fontFamily: 'PTSans-Bold',
        color: '#005252',
        textAlign: 'justify',
        fontSize: 25,
        margin: 10
    },
    textoTituloSemFonte: {
        color: '#005252',
        textAlign: 'justify',
        fontSize: 25,
        margin: 10
    },
   tituloValores: {
        fontFamily: 'PTSans-Bold',
        color: '#005252',
        textAlign: 'left',
        fontSize: 18,
        margin: 3
    },
    tituloValoresSemFonte: {
        color: '#005252',
        textAlign: 'left',
        fontSize: 18,
        margin: 3
    },
    valores: {
        fontFamily: 'PTSans-Bold',
        color: '#005252',
        textAlign: 'right',
        fontSize: 18,
        margin: 3
    },
   valoresSemFonte: {
        color: '#005252',
        textAlign: 'left',
        fontSize: 18,
        margin: 3
    },
    botoesFinalizar: {
        width: Dimensions.get('window').width * 0.8,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#006666',
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 20,
        marginVertical: 5,
    },
    botoesFinalizarDesabilitado: {
        width: Dimensions.get('window').width * 0.8,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 102, 102,0.5)',
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 20,
        marginVertical: 5,
    },
    botoesFinais02: {
        width: Dimensions.get('window').width * 0.8,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#3c6090',
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 20,
        marginVertical: 5,
    },
    textoBotao: {
        fontFamily: 'PTSans-Bold',
        color: '#fff',
        textAlign: 'center',
        fontSize: 22,
        margin: 5
    },
   textoBotaoSemFonte: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 22,
        margin: 5
    },
})

const mapStateToProps = ({ produtos, user }) => {
    return {
        carrinho: produtos.carrinho,
        historico: user.historico
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddCarrinho: produtos => dispatch(addCarrinho(produtos)),
        onLimparCarrinho: () => dispatch(limparCarrinho()),
        onRegistrar: produtos => dispatch(registrar(produtos))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Carrinho)
