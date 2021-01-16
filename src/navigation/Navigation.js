import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../component/Home.component'
import Details from "../component/Details.component";
import Fav from "../component/Viewed.component";
import {BottomNavigation, BottomNavigationTab} from "@ui-kitten/components";
import {ViewedIcon, HomeIcon} from '../assets/Icons'


const stack = createStackNavigator();
const { Navigator, Screen } = createBottomTabNavigator();

const HomeNavigator = () => (
    <stack.Navigator headerMode='none'>
        <stack.Screen name='Home' component={Home}/>
        <stack.Screen name='Details' component={Details}/>
    </stack.Navigator>
);


const BottomTabBar = ({ navigation, state }) => (
    <BottomNavigation
        selectedIndex={state.index}
        onSelect={index => navigation.navigate(state.routeNames[index])}>
        <BottomNavigationTab icon={HomeIcon} title='Accueil'/>
        <BottomNavigationTab icon={ViewedIcon} title='Viewed'/>
    </BottomNavigation>
);

const TabNavigator = () => (
    <Navigator tabBar={props => <BottomTabBar {...props} />}>
        <Screen name='Home' component={HomeNavigator}/>
        <Screen name='Viewed' component={Fav}/>
    </Navigator>
);

export const AppNavigator = () => (
    <NavigationContainer>
        <TabNavigator/>
    </NavigationContainer>
);
