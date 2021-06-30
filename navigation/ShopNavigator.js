import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { Platform } from 'react-native'

import ProductsOverviewScreen from '../screens/shop/ProductsOverView'
import Colors from '../constants/Colors'

const Stack = createStackNavigator()

const ProductsNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{
                headerStyle: {
                    backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
                },
                headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
                gestureEnabled: false
            }}>
                <Stack.Screen name="Home" component={ProductsOverviewScreen} options={{ title: 'All Products' }} />



            </Stack.Navigator>
        </NavigationContainer>

    )
}

export default ProductsNavigator

