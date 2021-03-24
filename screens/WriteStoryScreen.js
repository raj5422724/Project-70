import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";

export default class App extends Component {
  render() {
    return (
      <View>
        <View style={styles.header}>
          <Text style={styles.headerText}>Story Hub</Text>
        </View>
        <TextInput style={styles.smallInput} placeholder=" Story Title" />
        <TextInput style={styles.smallInput} placeholder=" Author" />
        <TextInput
          style={styles.largeInput}
          placeholder=" Write Your Story"
          multiline={true}
        />
        <TouchableOpacity style={styles.submitContainer}>
            <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    backgroundColor: "#FF9055",
    height: 75,
    justifyContent: "center",
  },
  headerText: {
    textAlign: "center",
    color: "white",
    fontSize: 30,
  },
  smallInput: {
    border: "solid",
    width: "85%",
    alignSelf: "center",
    height: 40,
    marginTop: 25,
    fontSize: 20
  },
  largeInput: {
    border: "solid",
    width: "85%",
    alignSelf: "center",
    height: 200,
    marginTop: 25,
    fontSize: 18
  },
  submitContainer: {
    alignSelf: 'center',
    backgroundColor: '#FF9055',
    width: '35%',
    height: 45,
    marginTop: 25,
    justifyContent: 'center',
  },
  submitText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 25
  }
});
