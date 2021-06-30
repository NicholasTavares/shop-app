import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { Platform } from 'react-native'

import Colors from '../constants/Colors'

// COMPONENTS
import ProductsOverviewScreen from '../screens/shop/ProductsOverView'
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';


const Stack = createStackNavigator()

const ProductsNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{
                headerStyle: {
                    backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
                },
                headerTitleStyle: {
                    fontFamily: 'open-sans-bold'
                },
                headerBackTitleStyle: {
                    fontFamily: 'open-sans'
                },
                headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
                gestureEnabled: false
            }}>
                <Stack.Screen name="Home" component={ProductsOverviewScreen} options={{ title: 'All Products' }} />

                <Stack.Screen name="ProductDetail" component={ProductDetailScreen} options={({ route }) => ({ title: route.params.productTitle })} />



            </Stack.Navigator>
        </NavigationContainer>

    )
}

export default ProductsNavigator

