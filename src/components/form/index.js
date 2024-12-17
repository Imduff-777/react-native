import React, {useState} from "react";
import {Button, View, Text, TextInput } from "react-native";
import ResultImc from "./resultImc/index";

function Form(){

  //criando variaveis nulas e funções para setar seus valores futuramente
  const[height, setHeight] = useState(null);
  const[weight, setWeight] = useState(null);
  const[messageImc, setMessageImc] = useState("preencha o peso e altura");
  const[imc, setImc] = useState(null);
  const[textButton, setTextButton] = useState("Calcular")

  //função para calcular imc
  function imcCalculator(){
    //setando o valor de imc através da função setImc()
    return setImc((weight/(height*height)).toFixed(2))
  }
  
  //Função para validar imc e ver se os campos não estão vazios para determinar se chama a função de calcular ou a mensagem de preencher peso e altura
  function validationImc(){
    if(weight != null && height != null){
      imcCalculator()
      setHeight(null)
      setWeight(null)
      setMessageImc("Seu imc é de:")
      setTextButton("Calcular Novamente")
      return
    }else{
      setImc(null)
      setTextButton("Calcular")
      setMessageImc("preencha o peso e altura ")
    }
    
  }

    return(
      <View>
        <View>
            <Text>Altura</Text>
            <TextInput placeholder="Ex: 1.75" keyboardType="numeric" onChangeText={setHeight} value={height}/>
            <Text>Peso</Text>
            <TextInput placeholder="Ex: 65.4" keyboardType="numeric" onChangeText={setWeight} value={weight}/>
            <Button onPress={() => validationImc()} title={textButton}/>
            <ResultImc messageResultImc={messageImc} resultImc={imc}/>
            
        </View>
      </View>  
    );
}

export default Form;