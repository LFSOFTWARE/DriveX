import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../pages/login'
import Type from '../pages/steps/type'
import Car from '../pages/steps/car'
import Payment from '../pages/steps/payment'
import Ride from '../pages/ride'
import Home from '../pages/home'



const Stack = createNativeStackNavigator();

const Routes = () =>(
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen 
                options={{headerShown:false}}
                name="Login"
                component={Login}
            />
        </Stack.Navigator>
    </NavigationContainer>

    
)


export default Routes