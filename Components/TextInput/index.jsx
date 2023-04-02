import React from "react";

import {TextInput, StyleSheet, View, Text} from 'react-native';

const MyTextInput = ({label = "", value, setValue, errorMsg}) => {
    return (

<View>
    <Text style = {styles.label}>{label}</Text>
<TextInput 
value={value} 
style={styles.container} 
onChangeText={text => setValue(text) } 
/>
<Text style = {styles.errorMsg}>{errorMsg}</Text>
</View>
        
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f4f4f4',
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 4,
        paddingHorizontal: 10,
        paddingVertical: 5,
        color: '#6e7bca',
        marginBottom: 5,
    },
    label: {
        fontWeight: 800 ,
        fontSize: 14,
        color: '#D66BA0'
    },
    errorMsg: {
        fontWeight: 800 ,
        fontSize: 14,
        color: '#9E0031'

    },
})

export default MyTextInput;