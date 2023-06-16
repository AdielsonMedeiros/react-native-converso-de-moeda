import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Picker} from '@react-native-picker/picker'

export default function App() {

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
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
    marginTop: 25,
  },
  moeda:{
    marginTop: 15,
    fontSize: 35
  },
});
