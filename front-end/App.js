import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, Platform, TextInput, } from 'react-native';
import Field from './components/Field';
import ButtonPrimary from './components/ButtonPrimary';

export default function App() {
  const [peso, setPeso] = useState(null)
  const [altura, setAltura] = useState(null)
  const [imc,setIMC] = useState(0)

  const onPress = () => {
    if (peso != '' && altura != ''){
      setIMC(parseFloat((parseFloat(peso)/parseFloat(altura)).toFixed(2)))
    }
    console.log(imc)
    console.log(altura)
    console.log(peso)
  }

  return (
    <SafeAreaView style={styles.androidSafeArea}>
      <View style={styles.header}>
        <Text style={styles.header.titulo}>HEALTH</Text>
        <Text style={styles.header.texto}>APP</Text>
      </View>
      <StatusBar style="auto"/>
      <View style={styles.content}>
        <Field title={'Peso:'} mode='numeric' onChange={setPeso} value={peso}/>
        <Field title={'Altura:'} mode='numeric' onChange={setAltura} value={altura}/>
        <ButtonPrimary title={'CALCULAR'} onPress={onPress}/>
      </View>
      <View style={styles.container}>
      {(imc != 0 ) ? (<Text style={styles.result}>{imc}</Text>) : (<Text>Informe seu peso e altura</Text>)}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  androidSafeArea:{
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
  container: {
    flex: 1,
    width:'100%',
    height:'100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  result:{
    fontSize: 40,
  },
  content:{
    padding: 30,
    gap: 15,
  },
  button:{
    paddingTop: 14,
    paddingBottom: 14,
    borderRadius:100,
  },
  header: {
    height: '15%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#161A30',
    texto:{
      fontSize: 20,
      color: '#fff',
    },
    titulo:{
      fontSize: 35,
      color: '#fff',
    }
  }
});
