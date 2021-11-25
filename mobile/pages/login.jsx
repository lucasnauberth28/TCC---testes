import React, { Component } from "react";
import jwtDecode from "jwt-decode";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  AsyncStorage,
} from "react-native";

export default class Login extends Component {
    constructor(props) {
      super(props);
      this.state = {
        email: "",
        senha: "",
      };
    }

    Login = async () => {
        console.warn('nauberth')
        console.warn(this.state.email + " " + this.state.senha);

        const resposta = await api.post("/login", {
        email: this.state.email,
        senha: this.state.senha,
      });

      const token = resposta.data.token;

      await AsyncStorage.setItem("usuario-login", token);

      console.warn("lucas");

      if(jwtDecode(token).role === "aa10cc54-f7a5-4f3a-859e-f7b8faa6c185 "){
        this.props.navigation.navigate("home")
      }
      else if(jwtDecode(token).role === "771fbfdb-8999-4c7e-8cd8-f394a9cb9a2c"){
        this.props.navigation.navigate("home")
      }

      console.warn("teste")
    };

    render()
    {
        return{

        }
    }

    styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          },
        
        inputLogin: {
            width: 240,
            marginBottom: 20,
            textAlign:"center",
            fontSize: 18,
            color: "#5C2C8C",
            borderBottomColor: "#5C2C8C",
            borderBottomWidth: 2,
            borderTopColor: "#5C2C8C",
            borderTopWidth: 2,
            borderLeftColor: "#5C2C8C",
            borderLeftWidth: 2,
            borderRightColor: "#5C2C8C",
            borderRightWidth: 2,
            borderRadius:15,
          },
    })
}