import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ActivityIndicator, Keyboard } from 'react-native';
import {Picker} from '@react-native-picker/picker'
import api from './src/services/api'


export default function App() {

const [loading, setLoading]= useState(true)
const [moedaSelect, setMoedaSelecionada]= useState(null)
const [moedaBValor, setMoedaBValor]= useState(0)
const [valorMoeda, setValorMoeda] = useState(null)
const [valorConvertido, setValorConvertido] = useState(0)

const [moeda,setMoeda] = useState([
  { key: '1', nome: 'USD', valor: 10},
  { key: '2' , nome: 'EUR', valor: 10},
]);

let MoedasItem = moeda.map( (v)  => {
  return <Picker.Item key={v.key} value={v.key} label= {v.key}/>
})

useEffect (()=>{
  async function loadMoedas(){
    const response = await api.get('all')
    let arrayMoedas = []
    Object.keys(response.data).map((key)=>{
      arrayMoedas.push({
        key: key,
        label: key,
        value: key
      })
    })
    setMoeda (arrayMoedas)
    setLoading(false)
  }

  loadMoedas();
},[])

async function converter(){
  if (moedaSelect === null || moedaBValor === 0){
    alert('por favor selecione uma moeda')
    return;
  }
  //USD-BRL ele devolve quanto é 1 dolar convertido pra reais//
  const response = await api.get(`all/${moedaSelect}-BRL`);
  //*console.log(response.data[moedaSelect].ask);

  let resultado = (response.data[moedaSelect].ask * parseFloat(moedaBValor))
  setValorConvertido(`R$ ${resultado.toFixed(2)}`);
  setValorMoeda(moedaBValor)

// fecha teclado caso ele esteja aberto
  Keyboard.dismiss();
}


if(loading){
  return(
  <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1}}>
    <ActivityIndicator color="#FFF" size={45}/>
  </View>

  )
} else {

  return (
    <View style={styles.container}>
      <View style={styles.areaMoeda}>
        <Text style={styles.titulo}> Selecione sua moeda </Text>
  
        <Picker selectedValue={moedaSelect}
         onChange={(itemValue, itemIndex)=> setMoedaSelecionada(itemValue)}
         onValueChange={(valor)=> setMoedaSelecionada(valor)}
         >
      {MoedasItem}
  
      </Picker>
      <View style={styles.areaValor}>
      <Text style={styles.titulo}> Digite um valor para converter em R$: </Text>
      <TextInput placeholder='Ex: 150' style={styles.input} keyboardType='numeric' onChangeText={ (value)=> setMoedaBValor(value)}/>
      </View>
        <TouchableOpacity style={ styles.botaoArea} onPress={converter}>
          <Text style={styles.botaoTexto}> Converter </Text>
        </TouchableOpacity>
      </View>
      {valorConvertido !== 0 &&(

        <View style={styles.areaResultado}>
          <Text style={styles.valorConvertido}> {valorMoeda} {moedaSelect}</Text>
          <Text style={[styles.valorConvertido, {fontSize: 18, margin: 10}]}> corresponde a </Text>
          <Text style={styles.valorConvertido}> {valorConvertido} </Text>
        </View>
      )}
    </View>
  );
}
}






const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
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
    width: '85%',
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
    borderRadius: 5
  },
  valorConvertido:{
    fontSize: 39,
    fontWeight: 'bold',
    color: '#000'
  }
});
