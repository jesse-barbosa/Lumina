import React from 'react';
import 'react-native-url-polyfill/auto';
import { enableScreens } from 'react-native-screens';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './store';
import { StatusBar } from 'expo-status-bar';
import { MenuProvider } from 'react-native-popup-menu';
import './global.css';

// Screens
import IntroductionScreen from 'app/Introduction';
import RegisterScreen from 'app/Register';
import LoginScreen from 'app/Login';
import HomeScreen from 'app/Home';
import NotationsScreen from 'app/Notations';
import ViewNotationScreen from 'app/ViewNotation';
import SettingsScreen from 'app/Settings';

export default function App() {
  enableScreens();
  const Stack = createStackNavigator();

  return (
    <Provider store={store}>
      <MenuProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Introduction">
            <Stack.Screen name="Introduction" component={IntroductionScreen} options={{ headerShown: false, }} />
            <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false, animation: 'none' }} />
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false, animation: 'none' }} />
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false, animation: 'none' }} />
            <Stack.Screen name="Notations" component={NotationsScreen} options={{ headerShown: false, animation: 'none' }} />
            <Stack.Screen name="ViewNotation" component={ViewNotationScreen} options={{ headerShown: false, animation: 'none' }} />
            <Stack.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false, animation: 'none' }} />
          </Stack.Navigator>
        </NavigationContainer>
        <StatusBar style="auto" />
      </MenuProvider>
    </Provider>
  );
}