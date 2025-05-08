import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

// Import das telas
import HomeScreen from './src/screens/HomeScreen';
import EscudoScreen from './src/screens/EscudoScreen';
import JogadoresScreen from './src/screens/JogadoresScreen';
import TitulosScreen from './src/screens/TitulosScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerActiveTintColor: 'red',
          drawerInactiveTintColor: 'gray',
        }}
      >
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Sobre o Time',
            drawerIcon: ({ color }) => <Ionicons name="home" size={22} color={color} />,
          }}
        />
        <Drawer.Screen
          name="Escudo"
          component={EscudoScreen}
          options={{
            drawerIcon: ({ color }) => <Ionicons name="shield" size={22} color={color} />,
          }}
        />
        <Drawer.Screen
          name="Jogadores"
          component={JogadoresScreen}
          options={{
            drawerIcon: ({ color }) => <Ionicons name="people" size={22} color={color} />,
          }}
        />
        <Drawer.Screen
          name="Titulos"
          component={TitulosScreen}
          options={{
            title: 'Títulos',
            drawerIcon: ({ color }) => <Ionicons name="trophy" size={22} color={color} />,
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}