import React from 'react';
import {Picker} from '@react-native-picker/picker'

export default function Picker2(){
    return(
        <Picker
        items= {[{ key: '1', label: 'USD', value: 'USD',},{ key: '2' , label: 'EUR', value: 'EUR',}]}
        onValueChange={ (valor)=> console.log(valor)}/>
    );
}