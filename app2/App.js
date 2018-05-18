
import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, Alert } from 'react-native';

const Estilos = {
  principal:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  botao:{
    backgroundColor: '#538530',
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 20
  },
  textoBotao:{
    color:'#fff',
    fontSize: 20,
    fontWeight: 'bold'
  }
};

const getNewPhrase = () => {
  var randomNumber = Math.random();
  randomNumber = Math.floor(randomNumber * 5);

  phrases = Array();
  phrases[0] = 'A bird in the hand is worth two in the bush';
  phrases[1] = 'Genius is one percent inspiration and 99 percent perspiration';
  phrases[2] = 'Physician heal thyself';
  phrases[3] = 'Once more unto the breach, dear friends, once more';
  phrases[4] = 'Screw your courage to the sticking place';

  Alert.alert(phrases[randomNumber]);
}

type Props = {};
export default class App extends Component<Props> {
  render() {
    const{ principal,botao,textoBotao } = Estilos;
    return (
      <View style={principal}>
        
        <Image source={require('./imgs/logo.png')} />
        
        <TouchableOpacity 
        onPress={getNewPhrase}
        style={botao}>
          <Text style={textoBotao}> Nova frase</Text>
        </TouchableOpacity>

      </View>
    );
  }
}


