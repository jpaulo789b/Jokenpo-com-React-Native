/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Topo from './src/components/topo';
import Icone from './src/components/icone';
import {Estilo} from './src/styles/estilo'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Image
} from 'react-native';


export default class appUdemy03 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      escolhaUsuario: '',
      escolhaMaquina: '',
      resultado: ''
    }
  }
  jokenpo(usuario) {
    // Gera número aleatório (0,1 ou 2)
    var maquina = Math.floor(Math.random() * 3)
    var opcoes = ['Pedra', 'Papel', 'Tesoura']
    this.setState({ 'escolhaMaquina': opcoes[maquina] });
    this.setState({ 'escolhaUsuario': opcoes[usuario] });
    // Diz qual é o resultado
    this.setState({ resultado: compare(opcoes[maquina], opcoes[usuario]) });
  }


  render() {
    return (
      <View>
        <Topo></Topo>
        <View style={Estilo.painelAcao}>
        <View style={Estilo.btnEscolha}>
          <Button onPress={() => { this.jokenpo('0') }} title="Pedra" />
        </View>
        <View style={Estilo.btnEscolha}>
          <Button onPress={() => { this.jokenpo('1') }} title="Papel" />
        </View>
        <View style={Estilo.btnEscolha}>
          <Button onPress={() => { this.jokenpo('2') }} title="Tesoura" />
        </View>
      </View>
        <View style={Estilo.palco}>
        <Text style={Estilo.txtResultado}> {this.state.resultado}</Text>
        <Icone escolha={this.state.escolhaMaquina} jogador='Computador' ></Icone>
        <Icone escolha={this.state.escolhaUsuario} jogador='Minha escolha' ></Icone>
        </View>
      </View>
    );
  }
}


// const styles = StyleSheet.create({
//   btnEscolha: {
//     width: 90
//   },
//   painelAcao: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     margin: 10,
//   },
//   palco: {
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   txtResultado: {
//     fontSize: 25,
//     fontWeight: 'bold',
//     color:'red',
//     height:60
//   }
// })
var compare = function (choice1, choice2) {
  if (choice1 === choice2)
    return ("O resultado é um empate!")
  else if (choice1 === "Pedra") {
    if (choice2 === "Tesoura")
      return ("pedra vence")
    else {
      return ("papel vence")
    }
  }

  else if (choice1 === "Papel") {
    if (choice2 === "Pedra")
      return "papel vence"
    else {
      return "tesoura vence"
    }
  }

  else if (choice1 === "Tesoura") {
    if (choice2 === "Pedra")
      return "pedra vence"
    else {
      return "tesoura vence"
    }
  }
}

AppRegistry.registerComponent('appUdemy03', () => appUdemy03);