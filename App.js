import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Available from './components/Available';
import PaymentGateway from './components/PaymentGateway';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Available" component={Available} />
        <Stack.Screen name="PaymentGateway" component={PaymentGateway} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
