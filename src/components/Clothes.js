import React, { useState } from 'react'; 
import { View, Text, StyleSheet, TouchableOpacity, Platform, Alert } from 'react-native'; 
import { Camera } from 'expo-camera'; 

//homescreen 

const Clothes = () => {
    const clothesitems = {
        tops: [], 
        bottoms: [], 
        dresses: [],
        outerwears: [], 
        shoes: [],
    };



    return (
        <View style={styles.container}> 
            <Text style={styles.title}>My Closet</Text> 
            {Object.entries(clothesitems).map(([category, items], index) => (
                <View key={index} style={styles.sectionContainer}> 
                    <Text style={styles.sectionTitle}>{category.charAt(0).toUpperCase() + category.slice(1)}</Text>
                    {items.map((item, itemIndex) => (
                        <Text key={itemIndex} style={styles.item}>{item}</Text>
                    ))}
                    <TouchableOpacity style={styles.plusButton} onPress={() => this.goToCamera()}>
                        <Text style={styles.plusButtonText}>+</Text>
                    </TouchableOpacity>
                    
                </View>
            ))}   
        
        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'flex-start', 
        alignItems: 'flex-start', 
        backgroundColor: 'pink',
        width: '100%',
        marginLeft: 10, 

    }, 
    title: {
        fontSize: 40, 
        marginBottom: 10, 
        fontWeight: 'bold', 
    }, 
    sectionContainer: {
        marginBottom: 20, 
        flexDirection: 'column', 
    }, 

    sectionTitle: { //categories
        fontSize: 28, 
        fontWeight: 'bold', 
    },

    item: {
        fontSize: 28, 
    },
    plusButton: {
        width: 50, 
        height: 50, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: 'white', 
        borderRadius: 20, 
        marginTop: 10, 
        marginLeft: 10, 
    },
    plusButtonText: {
        fontSize: 24, 
        color:'black',
    },
});

export default Clothes; 