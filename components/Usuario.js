import React, {Component} from 'react'
import { Text, View, Image } from 'react-native'

export default class Usuario extends Component {
  constructor(props) {
      super(props);
      
      this.state = {
        id: 0,
        email: '',
        primeiro_nome: '',
        ultimo_nome: '',
        imagem: ''
      };
  }

  componentDidMount(){
    this.fetchJSON();
  }

  fetchJSON(){
    fetch("https://reqres.in/api/users/12")
    .then(item => item.json())
    .then((item) => {

      var id = item['data']['id']
      var email = item['data']['email']
      var primeiro_nome = item['data']['first_name']
      var ultimo_nome = item['data']['last_name']
      var imagem = item['data']['avatar']

      this.setState({
        id: id,
        email: email,
        primeiro_nome: primeiro_nome,
        ultimo_nome: ultimo_nome,
        imagem: imagem
      })

    })
    .catch(error => console.log(error)) 
  }

  render() {
    return(
      <View>
        <Image source={{uri:this.state.imagem}}> </Image>
        <Text>{this.state.id}</Text>
        <Text>{this.state.email}</Text>
        <Text>{this.state.primeiro_nome} {this.state.ultimo_nome}</Text>
      </View>
    )
  }
}