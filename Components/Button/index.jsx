import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

export default function Button({ onClick, text }){
    return (
    <TouchableOpacity onPress={onClick}>
        <View style={styles.button}>
            <Text style={styles.text}>{text}</Text>
        </View>
    </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
button: {
    backgroundColor: "#6e7bca",
    borderRadius: 8,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    width: "50%",
},
text: {
    fontWeight: "bold",
    color: "#ffffff",
},
});