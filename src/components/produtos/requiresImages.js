// No React Native não é permitido usar variáveis dentro de um require, deste modo a implementação dinâmica:
//     <Image source={require(`../../../assets/images/jogos/${valor}`)} />
// Não seria possível. Contudo, a criação dos dois Arrays abaixo servem para substituir esta falta.
// Onde o primeiro Array estõ os requires com seus respectivos endereço
// E o segundo Array com o nome da imagem que estará no campo image do objeto,
// Sendo assim, é possivel pegar a imagem correta idependentemente da posição do objeto dentro do json.

export const requiresImages = [
    require('../../../assets/images/jogos/super-mario-odyssey.png'),
    require('../../../assets/images/jogos/call-of-duty-infinite-warfare.png'),
    require('../../../assets/images/jogos/the-witcher-iii-wild-hunt.png'),
    require('../../../assets/images/jogos/call-of-duty-wwii.png'),
    require('../../../assets/images/jogos/mortal-kombat-xl.png'),
    require('../../../assets/images/jogos/shards-of-darkness.png'),
    require('../../../assets/images/jogos/terra-media-sombras-de-mordor.png'),
    require('../../../assets/images/jogos/fifa-18.png'),
    require('../../../assets/images/jogos/horizon-zero-dawn.png')
]

export const indice = [
    'super-mario-odyssey.png','call-of-duty-infinite-warfare.png', 'the-witcher-iii-wild-hunt.png',
    'call-of-duty-wwii.png', 'mortal-kombat-xl.png', 'shards-of-darkness.png', 'terra-media-sombras-de-mordor.png',
    'fifa-18.png', 'horizon-zero-dawn.png'
]