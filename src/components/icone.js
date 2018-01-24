import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import {Estilo} from '../styles/estilo'
export default class Icone extends Component {
    render() {
        return (
            <View style= { Estilo.palco } >
            <Text>Escolha do { this.props.jogador }: { this.props.escolha } </Text>
        {
            this.props.escolha == 'Papel' &&
            <Image source={ require('../../imgs/Papel.png') } />
        }
        {
            this.props.escolha == 'Pedra' &&
            <Image source={ require('../../imgs/Pedra.png') } />
        }
        {
            this.props.escolha == 'Tesoura' &&
            <Image source={ require('../../imgs/Tesoura.png') } />
        }
        </View>
      )
    }
}