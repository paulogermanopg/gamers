import React, { Component } from 'react'
import { StyleSheet, View, Image, Dimensions, ScrollView } from 'react-native'

//onde deve ser colocado o caminho de cada imagem do carousel
const images = [
    require('../../../assets/images/carousel/horizon_zero_dawn.jpg'),
    require('../../../assets/images/carousel/call_of_duty_wwii.jpg'),
    require('../../../assets/images/carousel/fifa_18.jpg'),
    require('../../../assets/images/carousel/super-mario-odyssey-switch-hero.jpg'),
    require('../../../assets/images/carousel/the_witcher_3.jpg'),
    require('../../../assets/images/carousel/mortal_kombat.jpg'),
    require('../../../assets/images/carousel/sombras_de_mordor.jpg'),
]

class Carousel extends Component {
    //referência criada para o scroll
    scrollRef = React.createRef()

    state = {
        active: 0,
        images: images
    }

    //em um intervalo de 3500 milisegundos (3.5 segundos), ele avança horizontalmente
    componentDidMount = () => {
        setInterval(() => {
            this.setState(prev => ({ 
                active: prev.active === images.length - 1 ? 
                0 : prev.active + 1 
            }),
            () => {
                this.scrollRef.current.scrollTo({
                    animated: true,
                    y: 0,
                    x: (Dimensions.get('window').width * 0.95) * this.state.active
                    //o x precisa pegar o tamanho da tela vezes 0.95, referente ao styles.scroll 
                })
            })

            this.props.onCarrinho && this.props.onCarrinho()
        }, 3500);
    }

    render() {
        return (
            <View style={styles.viewCarousel}>
                <ScrollView pagingEnabled 
                            horizontal 
                            style={styles.scroll}
                            ref={this.scrollRef}>
                    {
                        this.state.images.map((item, index) => (
                            <Image key={index} source={item} style={styles.image} />
                        ))
                    }
                </ScrollView>   
            </View>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        width: Dimensions.get('window').width * 0.95,
        height: Dimensions.get('window').width * 0.65,
        resizeMode: 'contain',
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 20,
    },
    viewCarousel: {
        flex: 1,
        marginTop: 10,
    },
    scroll: {
        width: Dimensions.get('window').width * 0.95,
    },
})

export default Carousel