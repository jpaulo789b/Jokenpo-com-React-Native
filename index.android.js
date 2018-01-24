/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
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
        <View style={styles.painelAcao}>
        <View style={styles.btnEscolha}>
          <Button onPress={() => { this.jokenpo('0') }} title="Pedra" />
        </View>
        <View style={styles.btnEscolha}>
          <Button onPress={() => { this.jokenpo('1') }} title="Papel" />
        </View>
        <View style={styles.btnEscolha}>
          <Button onPress={() => { this.jokenpo('2') }} title="Tesoura" />
        </View>
      </View>
        <View style={styles.palco}>
        <Text style={styles.txtResultado}> {this.state.resultado}</Text>
        
        {/* <Text> Escolha do computador: {this.state.escolhaMaquina}</Text>
        <Image source={require('./imgs/tesoura.png')} /> */}
        <Icone escolha={this.state.escolhaMaquina} jogador='Computador' ></Icone>
        <Icone escolha={this.state.escolhaUsuario} jogador='Minha escolha' ></Icone>
        {/* <Text> Minha escolha: {this.state.escolhaUsuario}</Text>
        <Image source={require('./imgs/tesoura.png')} /> */}
        </View>
      </View>
    );
  }
}
class Topo extends Component {
  render() {
    return (
      <View>
        <Image source={require('./imgs/jokenpo.png')} />
      </View>
    )
  }
}
class Icone extends Component {
  render() {
    return (
      <View style={styles.palco}>
        <Text> Escolha do {this.props.jogador}: {this.props.escolha}</Text>
        {this.props.escolha == 'Papel' &&
          <Image source={require('./imgs/Papel.png')} />
        }
        {this.props.escolha == 'Pedra' &&
          <Image source={require('./imgs/Pedra.png')} />
        }
        {this.props.escolha == 'Tesoura' &&
          <Image source={require('./imgs/Tesoura.png')} />
        }
      </View>
    )
  }
}
const styles = StyleSheet.create({
  btnEscolha: {
    width: 90
  },
  painelAcao: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  palco: {
    alignItems: 'center',
    marginTop: 20,
  },
  txtResultado: {
    fontSize: 25,
    fontWeight: 'bold',
    color:'red',
    height:60
  }
})
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