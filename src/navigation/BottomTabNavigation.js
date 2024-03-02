import React from 'react'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen'; 
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; 

const Tab = createBottomTabNavigator(); 


export default function BottomTabNavigation() {
    return ( 
        <Tab.Navigator> 
            <Tab.Screen 
                name="Home" 
                component={HomeScreen} 
                options={{
                    title: 'digidrobe', 
                    tabBarLabel: 'My Closet',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name = "home" color={color} size={size} />
                    ),
                }}
            /> 

            <Tab.Screen 
                name="Profile"
                component={ProfileScreen}
                options={{
                    title:'digidrobe', 
                    tabBarLabel: 'Profile', 
                }}
            />
        </Tab.Navigator>
    );
}