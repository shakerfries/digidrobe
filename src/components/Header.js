import React from 'react'; 
import { View, Text, StyleSheet } from 'react-native'; 

const Header = () => {
    return (
        <View style={styles.header}> 
        <Text style={styles.title}>digidrobe</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    header: {
        height: 100, 
        paddingTop: 12, 
        backgroundColor: 'pink', 
        alignItems: 'center', 
        justifyContent: 'center'
    }, 

    title: {
        fontSize: 20, 
        fontWeight: 'bold', 
        color: 'white'
    },
});

export default Header; 