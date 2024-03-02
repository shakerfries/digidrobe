import React from 'react'; 
import { View, StyleSheet } from 'react-native'; 
import Clothes from '../components/Clothes'; 

const HomeScreen = () => {
    return (
        <View style={styles.container}> 
        <Clothes /> 
        </View>
    ); 
}; 

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: 'pink', 
        alignItems: 'center', 
        justifyContent: 'center',
    },
}); 


export default HomeScreen;