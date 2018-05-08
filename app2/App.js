
import React, { Component } from 'react';
import { Text } from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
        <Text style={ Estilos.estiloTexto }>Frases do dia</Text>
    );
  }
}

const Estilos = {
  estiloTexto: {
    fontSize: 30,
    backgroundColor: '#d2691e',
    height: 300,
    width: 300
  }
};
