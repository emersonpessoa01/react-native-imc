import React from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weigth: "",
      height: "",
      info: "-",
      resultad: 0.0,
    };
    this.calculateIMC = this.calculateIMC.bind(this);
  }

  calculateIMC = () => {
    const { weigth, height } = this.state;
    let imc = weigth / (height * height);

    let s = this.state;
    s.resultad = imc;
    imc < 18.5
      ? (s.info = ".Menor que 18.5 - seu quadro é de Magreza")
      : imc < 24.9
      ? (s.info = ".Entre 18.5 e 24.9 - seu quadro é Normal")
      : imc < 29.9
      ? (s.info = ".Entre 25.0 e 29.9 - você está acima do peso")
      : imc < 39.9
      ? (s.info = ".Entre 30.0 e 39.9 - tome cuidado, você está com Obeso")
      : (s.info = ".Maior que 40.0 - está com Obesidade Mórbida");
    this.setState(s);
  };

  clear = () => {
    this.setState({
      weigth: "",
      height: "",
      resultad: 0.0,
      info: "-",
    });
  };

  render() {
    const { viewContainer, text, textInput, input } = styles;
    const {weigth, height, resultad, info} = this.state;
    return (
      <View style={viewContainer}>
        <Text style={text}>Altura (m)</Text>
        <TextInput
          style={textInput}
          value={height}
          onChangeText={(height) => this.setState({ height })}
          placeholder="Exemplo: 1.75"
          keyboardType={"numeric"}
        />
        <Text style={text}>Peso (kg)</Text>
        <TextInput
          style={textInput}
          value={weigth}
          onChangeText={(weigth) => this.setState({ weigth })}
          placeholder="Exemplo: 68.8"
          keyboardType={"numeric"}
        />
        <Separator />
        <Button
          onPress={this.calculateIMC}
          title="Calcula"
          color="#39457E"
          accessibilityLabel="Clique aqui para calcular seu IMC"
        />
        <Separator />
        <Button
          onPress={this.clear}
          title="Limpa"
          color="#f01742"
          accessibilityLabel="Botão para limpar os valores"
        />
        <Separator />
        <Text style={input}>
          Seu IMC é: {resultad.toFixed(2)} {info}
        </Text>
      </View>
    );
  }
}

const Separator = () => <View style={styles.separator} />;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#38B2AC",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5,
    fontSize: 18,
  },
  text:{
    alignSelf:"center",
    paddingLeft: 10,
    // fontSize:"1rem",
    fontWeight: "bold",
    paddingBottom:8

  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  textInput: {
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    paddingLeft: 20,
    margin: 10,
    borderRadius: 10,
  },
});
