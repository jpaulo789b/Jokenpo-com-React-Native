import React, { Component } from 'react';
import {StyleSheet} from 'react-native';

export const Estilo = StyleSheet.create({
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