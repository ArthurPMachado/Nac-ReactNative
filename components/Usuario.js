import React, {Component} from 'react'
import { Text, View, Image } from 'react-native'

export default class Usuario extends Component {
  constructor(props) {
      super(props);
      
      this.state = {
        first_name: '',
        last_name: '',
      };
  }

  componentDidMount(){
    this.fetchJSON();
  }

  fetchJSON(){
    fetch("https://reqres.in/api/users/12")
    .then(item => item.json())
    .then((item) => {

      var primeiro_nome = item['data']['first_name']
      var ultimo_nome = item['data']['last_name']

      this.setState({first_name: primeiro_nome,
                  last_name: ultimo_nome})

    })
    .catch(error => console.log(error)) 
  }

  render() {
    return(
      <View>
        <Image>a imagem do usuario</Image>
        <Text>id do usuario</Text>
        <Text>email do usuario</Text>
        <Text>nome do usuario</Text>
      </View>
    )
  }
}