import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import {Picker} from '@react-native-picker/picker'

export default function App() {


/*const placeholder = {
  label: 'Selecione uma moeda...',
  value: null,
  color: '#000'
}*/

const [moedaSelect, setMoedaSelecionada]= useState(0)
const [moeda,setMoeda] = useState([
  { key: '1', nome: 'USD', valor: 10},
  { key: '2' , nome: 'EUR', valor: 10},
]);

let MoedasItem = moeda.map( (v,k)  => {
  return <Picker.Item key={k} value={k} label= {v.nome}/>
})





  return (
    <View style={styles.container}>
      <View style={styles.areaMoeda}>
        <Text style={styles.titulo}> Selecione sua moeda </Text>

        <Picker selectedValue={moedaSelect}
      onValueChange={(itemValue, itemIndex)=> setMoedaSelecionada(itemValue)} >
      {MoedasItem}

      </Picker>
      <View style={styles.areaValor}>
      <Text style={styles.titulo}> Digite um valor para converter em R$: </Text>
      <TextInput placeholder='Ex: 150' style={styles.input} keyboardType='numeric'/>
      </View>
        <TouchableOpacity style={ styles.botaoArea}>
          <Text style={styles.botaoTexto}> Converter </Text>
        </TouchableOpacity>

      </View>
        <View style={styles.areaResultado}>
          <Text style={styles.valorConvertido}> 5 usd</Text>
          <Text style={[styles.valorConvertido, {fontSize: 18, margin: 10}]}> corresponde a </Text>
          <Text style={styles.valorConvertido}> 1 milhao de reais </Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 35,
    marginTop: 25,
  },
  areaMoeda:{
    marginTop: 15,
    backgroundColor: '#fff',
    padding: 10,
    width: 350,
    borderRadius: 5,
    marginBottom: 1,

  },
  titulo:{
    fontSize: 15,
    color: '#000',
    paddingTop: 5,
    paddingLeft: 5,
  },
  input:{
    backgroundColor: '#fff',
    paddingTop: 5,
    paddingLeft: 10,
    fontSize: 15,
    marginTop: 8,
    color: '#000'

  },
  botaoArea:{
    marginTop: 10,
    backgroundColor: '#f84b57',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  botaoTexto:{
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',

  },

  areaResultado:{
    marginTop: 35,
    width: '90%',
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
  },
  valorConvertido:{
    fontSize: 39,
    fontWeight: 'bold',
    color: '#000'
  }
});
