import React from 'react';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { useFonts } from 'expo-font'

import productsReducer from './store/reducers/products';

// NAVIGATOR
import ShopNavigator from './navigation/ShopNavigator'

const rootReducer = combineReducers({
  products: productsReducer
})

const store = createStore(rootReducer)

export default function App() {

  const [loaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })

  return (
    <Provider store={store}>
      {loaded ? <ShopNavigator /> : null}
    </Provider>
  );
}
