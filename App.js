import React, {Component} from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import Constants from 'expo-constants';
import Usuario from './components/Usuario'
import ListarUsuarios from './components/ListarUsuarios'
  
export default class App extends Component {


  render(){
    return( 
      <View style={styles.loader}> 
        <Usuario/>
        <ListarUsuarios/>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  loader:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
   }
});
