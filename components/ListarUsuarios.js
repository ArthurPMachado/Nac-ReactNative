import React, {Component} from 'react'
import {Text, View, Image, FlatList} from 'react-native'

export default class ListarUsuarios extends Component {
  
  constructor(props) {
      super(props);
      
      this.state = {
        resposta: []
      };
  }

  componentDidMount(){
    this.fetchJSON();
  }

  fetchJSON(){
    fetch("https://reqres.in/api/users?page=2")
    .then(item => item.json())
    .then((item) => {
       this.setState({
        resposta: item
      })
    })
    .catch(error => console.log(error))
  }
  
  render() {
    return (
      <View>
        <Image source={{uri:this.state.imagem}}
               style={{width: '100%',
                       height: 250,
                       resizeMode:'contain',
                       justifyContent:'center'}}/>
        <Text>{this.state.email}</Text>
        <Text>{this.state.primeiro_nome} {this.state.ultimo_nome}</Text>
      </View>
    )
  }
}