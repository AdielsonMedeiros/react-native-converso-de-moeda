import React from 'react';
import {Picker} from '@react-native-picker/picker'

export default function Picker2(){
    const [moeda,setMoeda] = useState([
        { key: '1', nome: 'USD', valor: 10},
        { key: '2' , nome: 'EUR', valor: 10},
      ]);
      let MoedasItem = moeda.map( (v,k)  => {
        return <Picker.Item key={k} value={k} label= {v.nome}/>
      })
    }