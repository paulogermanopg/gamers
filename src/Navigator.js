import React from 'react'
import { createAppContainer} from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Home from './screens/Home'
import AreaGamer from './screens/AreaGamer'
import Produtos from './screens/Produtos'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSearchDollar, faGamepad, faHome } from '@fortawesome/free-solid-svg-icons'

const MenuRoutes = {
    Home: {
        name: 'Home',
        screen: Home,
        navigationOptions: {
            title: 'Home',
            tabBarIcon: ({ tintColor }) =>
               <FontAwesomeIcon icon={ faHome } size={32} color={tintColor}/>
        }
    },
    Produtos: {
        name: 'Produtos',
        screen: Produtos,
        navigationOptions: {
            title: 'Produtos',
            tabBarIcon: ({ tintColor }) =>
               <FontAwesomeIcon icon={ faSearchDollar } size={32} color={tintColor}/>
        }
    },
    AreaGamer: {
        name: 'AreaGamer',
        screen: AreaGamer,
        navigationOptions: {
            title: 'AreaGamer',
            tabBarIcon: ({ tintColor }) =>
                <FontAwesomeIcon icon={ faGamepad } size={32} color={tintColor}/>
        }
    },
    
}

const MenuConfig = {
    initialRouteName: 'Home',
    tabBarOptions: {
        showLabel: false,
        activeTintColor: '#789ac7',
        inactiveTintColor: '#fff',
        style: {
            backgroundColor: '#3c0068'
        }
    }
}

const MenuNavigator = createBottomTabNavigator(MenuRoutes, MenuConfig)

export default createAppContainer(MenuNavigator)