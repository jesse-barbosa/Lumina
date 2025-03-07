import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './store';
import { StatusBar } from 'expo-status-bar';
import './global.css';

// Screens
import IntroductionScreen from 'app/Introduction';
import HomeScreen from 'app/Home';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Introduction">
          <Stack.Screen name="Introduction" component={IntroductionScreen} options={{ headerShown: false, animation: 'none' }} />
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false, animation: 'none' }} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </Provider>
  );
}