import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

export default function RegistroLugaresSeguros() {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [estado, setEstado] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [colonia, setColonia] = useState('');
  const [calle, setCalle] = useState('');
  const [codigoPostal, setCodigoPostal] = useState('');

  const handleRegistrar = () => {
    // Aquí puedes implementar la lógica para registrar el lugar seguro
    console.log('Lugar seguro registrado!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Registro de lugar seguro </Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
      />
      <TextInput
        style={styles.input}
        placeholder="Descripción"
        value={descripcion}
        onChangeText={setDescripcion}
      />
      <View style={styles.addressContainer}>
        <TextInput
          style={[styles.input, styles.addressInput]}
          placeholder="Estado"
          value={estado}
          onChangeText={setEstado}
        />
        <TextInput
          style={[styles.input, styles.addressInput]}
          placeholder="Ciudad"
          value={ciudad}
          onChangeText={setCiudad}
        />
        <TextInput
          style={[styles.input, styles.addressInput]}
          placeholder="Colonia"
          value={colonia}
          onChangeText={setColonia}
        />
        <TextInput
          style={[styles.input, styles.addressInput]}
          placeholder="Calle"
          value={calle}
          onChangeText={setCalle}
        />
        <TextInput
          style={[styles.input, styles.addressInput]}
          placeholder="Código postal"
          value={codigoPostal}
          onChangeText={setCodigoPostal}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleRegistrar}>
        <Text style={styles.buttonText}>Registrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 35,
    color: '#181818',
    fontWeight: 'bold',
    marginBottom: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '90%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
    backgroundColor: '#fff',  
  },
  addressContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 8,
    justifyContent: 'center',
    alignItems: 'center',
      },
  addressInput: {
    flexBasis: '40%',
    marginRight: '2%',
    marginBottom: 8,
    backgroundColor: '#fff',  
  },
  button: {
    width: '80%',
    height: 40,
    backgroundColor: '#31CB00',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    },
});
