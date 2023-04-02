import React from "react";
import { Text, View, StyleSheet } from "react-native";


import MyTextInput from "../../Components/TextInput";
import Button from "../../Components/Button";

const RegistroLugares = () => {
    //nueva forma
    const [place, setPlace] = React.useState({
        name: " ",
        description: "",
        address: "",
    });

    const [errors, setErrors] = React.useState({
        name: {
            text: 'Complete el campo de nombre',
            status: false, 
        },
        description: {
            text: 'Complete el campo de descripción',
            status: false,
        },
        address: {
            text: 'Completa el campo address',
            status: false,
            },
    });

    const registrar = () => {
        let newErrors = errors;
        for (let property in place){
            if(place[property]=== ""){
            newErrors = {
                ...newErrors,
                [property]: {
                    ...newErrors[property],
                    status: true,
                    },
                };
            }    else{
                newErrors = {
                    ...newErrors,
                    [property]: {
                        ...newErrors[property],
                        status: false,
                    },
                };
            }        
        }

        setErrors(newErrors);
    /* alert(`${name} ${description} ${address}`);*/
    };

const changePlaceProperties = (property, text) => {
    setPlace({
        ...place,
        [property]: text,
    });
};

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Registrar un Lugar</Text>
        <MyTextInput 
        label="Nombre"
        value={place.name}
        setValue={text => changePlaceProperties("name", text)} 
        errorMsg ={errors.name.status && errors.name.text}
        />
        <MyTextInput
        label="Descripción" 
        value={place.description} 
        setValue={text => changePlaceProperties("description", text)} 
        errorMsg ={errors.description.status && errors.description.text}
        />
        <MyTextInput
        label="Dirección" 
        value={place.address} 
        setValue={text => changePlaceProperties("address", text)} 
        errorMsg ={errors.address.status && errors.address.text}
        />
        <Button text='Registrar Lugar' onClick={registrar}/>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        padding: 10,

    },

    title: {
        fontSize: 20,
        fontWeight: "bold",
        letterSpacing: 2,
        marginBottom: 10,
    },

});

export default RegistroLugares;