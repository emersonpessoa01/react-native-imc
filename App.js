import React from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: "",
      height: "",
      info: "-",
      result: 0.0,
    };
    this.calculateIMC = this.calculateIMC.bind(this);
  }

  calculateIMC = () => {
    const { weight, height } = this.state;
    let imc = weight / height ** 2;
    let s = this.state;
    s.result = imc;

    //s.result < 18.5

    s.result < 18.5
      ? (s.info = "Menor que 18,5, seu quadro é de: Magreza")
      : s.result < 24.9
      ? (s.info = "Entre 18,5 e 24,9, seu quadro é: Normal")
      : s.result < 29.9
      ? (s.info = "Entre 25,0 e 29,9, você está com: Sobrepeso")
      : s.result < 39.9
      ? (s.info = "Entre 30,0 e 39,9, tome cuidado, você está com: Obesidade")
      : s.result > 39.9
      ? (s.info = "Acima de 39,9, você está com: Obesidade Grave")
      : (s.info = "-Inválido");
    this.setState(s);
  };

  clear = () => {
    this.setState({
      weight: "",
      height: "",
      result: 0.0,
      info: "-",
    });
  };

  render() {
    const { viewContainer, textInput, text, input, button } = styles;
    return (
      <View style={viewContainer}>
        <Text style={text}>Altura (m)</Text>
        <TextInput
          style={textInput}
          onChangeText={(height) => this.setState({ height })}
          value={this.state.height}
          placeholder="Exemplo: 1,75"
          keyboardType={"numeric"}
        />
        <Text style={text}>Peso (kg)</Text>
        <TextInput
          style={textInput}
          onChangeText={(weight) => this.setState({ weight })}
          value={this.state.weight}
          placeholder="Exemplo: 68,8"
          keyboardType={"numeric"}
        />
        <Separator />
        <View style={button}>
          <Button
            onPress={this.calculateIMC}
            title="Calcula"
            color="#39457E"
            accessibilityLabel="Clique aqui para calcular seu IMC"
          />
        </View>

        <Separator />
        <View style={button}>
          <Button
            onPress={this.clear}
            title="Limpa"
            color="#f01742"
            accessibilityLabel="Botão para limpar os valores"
          />
        </View>

        <Separator />
        <Text style={input}>
          Seu IMC é: {this.state.result.toFixed(2)} {this.state.info}
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
  viewContainer:{
    backgroundColor: "#38B2AC"
  },
  botton: {
    alignItems: "center",
    width: 10,
  },
  input: {
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5,
    fontSize: 18,
    fontWeight:"bold"
  },
  text: {
    alignSelf: "center",
    paddingLeft: 10,
    marginVertical: 35,
    fontWeight: "bold",
    paddingBottom: 8,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#fff",//"#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  textInput: {
    height: 40,
    borderWidth: 1,
    borderColor: "white",
    paddingLeft: 20,
    margin: 10,
    borderRadius: 10,
    color: "black",
    fontWeight: "bold",
  },
});
