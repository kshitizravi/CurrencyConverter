import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,Keyboard, Text, Image , View,SafeAreaView,TextInput,TouchableOpacity, Alert, TouchableWithoutFeedback } from 'react-native';

const currencyPerRupee =
{
  DOLLAR:0.014,
  EURO:0.012,
  POUND:0.099,
  DINAR:0.0041,
  YEN:1.44,
  FRANC:0.012,
  RIAL:0.0052,
  RAND:0.23,
  TAKA:1.15
}

export default class App extends React.Component{
  constructor(props){
    super(props);
      this.state ={
        inputValue:"",
        resultValue :"0.0"
      }
  }
  buttonPressed = (currency) =>{
    if(this.state.inputValue ==="")
    {
       Alert.alert("Enter Some Value In  "+currency);
    }
    else
    {
      let result = parseFloat(this.state.inputValue)  * currencyPerRupee[currency];
      this.setState({resultValue:result.toFixed(2)})
    }
  }
  render(){

  
  return (
    
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <SafeAreaView style={styles.container}>
      <View style={styles.screenview}>
      <Image style={styles.image} source={require("./assets/logo.png")}/>
          <View style={styles.resultcontainer}>
            <Text style={styles.resultValue}>{this.state.resultValue}</Text>
          </View>
          <View style={styles.inputcontainer}>
            <TextInput
              style={styles.input}
              selectionColor="white"
              keyboardType="number-pad"
              placeholder="Enter Amount"
              placeholderTextColor="white"
              value={this.state.inputValue}
              onChangeText={
                inputValue => this.setState({
                  inputValue
                })
              }
            />
          </View>
          <View style={styles.converterButtonContainer}>
            <TouchableOpacity
            onPress={()=> {
              this.buttonPressed("DOLLAR");
            }}
            style={styles.buttonConverter}
            >
              <Text style={styles.textButtonConverter}>U$D</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=> {
              this.buttonPressed("EURO");
            }}
            style={styles.buttonConverter}
            >
              <Text style={styles.textButtonConverter}>EURO</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=> {
              this.buttonPressed("POUND");
            }}
            style={styles.buttonConverter}
            >
              <Text style={styles.textButtonConverter}>POUND</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=> {
              this.buttonPressed("POUND");
            }}
            style={styles.buttonConverter}
            >
              <Text style={styles.textButtonConverter}>DINAR</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=> {
              this.buttonPressed("DINAR");
            }}
            style={styles.buttonConverter}
            >
              <Text style={styles.textButtonConverter}>YEN</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=> {
              this.buttonPressed("YEN");
            }}
            style={styles.buttonConverter}
            >
              <Text style={styles.textButtonConverter}>FRANC</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=> {
              this.buttonPressed("FRANC");
            }}
            style={styles.buttonConverter}
            >
              <Text style={styles.textButtonConverter}>RIAL</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=> {
              this.buttonPressed("RIAL");
            }}
            style={styles.buttonConverter}
            >
              <Text style={styles.textButtonConverter}>RAND</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=> {
              this.buttonPressed("RAND");
            }}
            style={styles.buttonConverter}
            >
              <Text style={styles.textButtonConverter}>TAKA</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=> {
              this.buttonPressed("TAKA");
            }}
            ></TouchableOpacity>
          </View>
          </View>
        <StatusBar style="auto" />
        </SafeAreaView>
        </TouchableWithoutFeedback>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d6e0f0',
   
  
  },
  screenview:{
    marginTop:20,
  },
  resultcontainer:{
    height:70,
    marginTop:20,
    justifyContent:"center",
    borderColor:"#c1c1c1",
    borderWidth:2,
    backgroundColor:"#0A79DE",
    alignItems:"center",
  

  },
  resultValue:{
      fontSize:30,
      fontWeight:"bold",
      color:"white"
  },
  image:{
      height:150,
      width:150,
      alignSelf:"center",
      marginTop:10
  },
  inputcontainer:{
    height:70,
    backgroundColor:"#0A79DE",
    marginTop:10,
    borderWidth:2,
    alignItems:"center",
    borderColor:"#c1c1c1",
    justifyContent:"center",
    color:"white"

  },
  input:{
    color:"white",
    fontSize:30

  },
  converterButtonContainer:{
    flexDirection:"row",
    flexWrap:"wrap",
    marginTop:20,
    borderColor:"#c1c1c1",
    borderWidth:2
  },
  buttonConverter:{
    alignItems:"center",
    justifyContent:"center",
    height:100,
    borderColor:"#c1c1c1",
    borderWidth:2,
    width:"33.33%",
    backgroundColor:"#0A79DE"

  },
  textButtonConverter:
  {
    color:"#fff",
    fontSize: 20,
    fontWeight:"bold"

  }
});