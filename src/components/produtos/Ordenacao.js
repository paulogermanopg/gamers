import React, { Component } from 'react'
import { View, StyleSheet, Dimensions,Text, TouchableOpacity } from 'react-native'
import * as Font from 'expo-font'
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native"

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSort } from '@fortawesome/free-solid-svg-icons'

let customFonts = {
    'PTSans-Bold': require('../../../assets/fonts/PTSans-Bold.ttf'),
    'PTSans-Regular': require('../../../assets/fonts/PTSans-Regular.ttf'),
  }

class Ordenacao extends Component {
    state = {
        fontsLoaded: false,
        ordernarPor: '',
        collapse: false, //Serve para fechar o collapse ao selecionar uma das opções
    }

    //Necessário para usar fonte personalizada no Expo
    async _loadFontsAsync() {
        await Font.loadAsync(customFonts)
        this.setState({ fontsLoaded: true })
    }
    
    componentDidMount() {
        this._loadFontsAsync()
    }
    // ------------

    //funcção callback que irá retornar o array ordenado para ser renderizado no Flatlist
    ordenar = tipo => {

        switch (tipo){
            case 'Alfabeto':
                function alfabetica(a,b) {
                    if (a.name < b.name)
                       return -1;
                    if (a.name > b.name)
                      return 1;
                    return 0;
                  }
                this.setState({ ordernarPor: 'Alfabeto', collapse: false })
                this.props.onOrdenar && this.props.onOrdenar(this.props.produtos.sort(alfabetica))
                break
            case 'Maior':
                function maiorValor(a,b) {
                    if (a.price > b.price)
                       return -1;
                    if (a.price < b.price)
                      return 1;
                    return 0;
                  }
                this.setState({ ordernarPor: 'Maior Preço', collapse: false })
                this.props.onOrdenar && this.props.onOrdenar(this.props.produtos.sort(maiorValor))
                break
            case 'Menor':
                function menorValor(a,b) {
                    if (a.price < b.price)
                       return -1;
                    if (a.price > b.price)
                      return 1;
                    return 0;
                  }
                this.setState({ ordernarPor: 'Menor Preço', collapse: false })
                this.props.onOrdenar && this.props.onOrdenar(this.props.produtos.sort(menorValor))
                break
            case 'Popular':
                function popular(a,b) {
                    if (a.score > b.score)
                       return -1;
                    if (a.score < b.score)
                      return 1;
                    return 0;
                  }
                this.setState({ ordernarPor: 'Populares', collapse: false })
                this.props.onOrdenar && this.props.onOrdenar(this.props.produtos.sort(popular))
                break
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Collapse onToggle={()=>{this.setState({ collapse: true })}} isCollapsed={this.state.collapse}>
                    <CollapseHeader style={styles.collapseH}>

                        <Text style={this.state.fontsLoaded ? styles.collapseMaior : styles.collapseMaiorSemFonte}>
                            {`Ordenar por: ${this.state.ordernarPor}`}
                        </Text>

                        <View style={styles.direita}>
                            <FontAwesomeIcon icon={ faSort } size={28} color={'rgb(255,255,255)'}/>
                        </View>

                    </CollapseHeader>

                    <CollapseBody>
                        <TouchableOpacity 
                            onPress={() => this.ordenar('Alfabeto')}>

                            <Text style={this.state.fontsLoaded ? styles.collapse : styles.collapseSemFonte}>
                                Ordem Alfabética
                            </Text>

                        </TouchableOpacity>

                        <TouchableOpacity 
                            onPress={() => this.ordenar('Maior')}>

                            <Text style={this.state.fontsLoaded ? styles.collapse : styles.collapseSemFonte}>
                                Maior preço
                            </Text>

                        </TouchableOpacity>

                        <TouchableOpacity 
                            onPress={() => this.ordenar('Menor')}>

                            <Text style={this.state.fontsLoaded ? styles.collapse : styles.collapseSemFonte}>
                                Menor Preço
                            </Text>

                        </TouchableOpacity>

                        <TouchableOpacity 
                            onPress={() => this.ordenar('Popular')}>

                            <Text style={this.state.fontsLoaded ? styles.collapse : styles.collapseSemFonte}>
                                Popularidade
                            </Text>

                        </TouchableOpacity>

                    </CollapseBody>
                </Collapse>
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    direita: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: 10,
    },
    collapseH: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#006666',
        borderRadius: 10,
        width: Dimensions.get('window').width * 0.90,
    },
    collapse: {
        fontFamily: 'PTSans-Regular',
        color: '#fff',
        marginBottom: 10,
        marginVertical: 5,
        fontSize: 18,
        padding: 5,
        alignSelf: 'center',
        borderRadius: 10,
        textAlign: 'center',
        backgroundColor: '#3c6090',
        width: Dimensions.get('window').width * 0.80,
    },
    collapseSemFonte: {
        color: '#fff',
        marginBottom: 10,
        marginVertical: 5,
        fontSize: 18,
        padding: 5,
        alignSelf: 'center',
        borderRadius: 10,
        textAlign: 'center',
        backgroundColor: '#3c6090',
        width: Dimensions.get('window').width * 0.80,
    },
    collapseMaior: {
        fontFamily: 'PTSans-Bold',
        color: '#fff',
        margin: 10,
        fontSize: 18,
        textAlign: 'center',
    },
    collapseMaiorSemFonte: {
        color: '#fff',
        margin: 10,
        fontSize: 18,
        textAlign: 'center',
    },
})

export default Ordenacao