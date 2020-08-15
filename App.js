import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  Text,
  Image,
} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: 0,
      num2: 0,
      result: '',
    };
  }
  Sum = () => {
    this.setState({
      result: parseInt(this.state.num1, 10) + parseInt(this.state.num2, 10),
    });
    // alert(this.state.result);
  };

  Sub = () => {
    this.setState({
      result: parseInt(this.state.num1, 10) - parseInt(this.state.num2, 10),
    });
    // alert(this.state.result);
  };

  Mul = () => {
    this.setState({
      result: parseInt(this.state.num1, 10) * parseInt(this.state.num2, 10),
    });
    // alert(this.state.result);
  };

  Div = () => {
    this.setState({
      result: parseInt(this.state.num1, 10) / parseInt(this.state.num2, 10),
    });
    // alert(this.state.result);
  };

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.tinyLogo} source={require('./tinyLogo.png')} />
        <TextInput
          placeholder="Number 1 "
          underlineColorAndroid="transparent"
          style={styles.TextInputStyle}
          keyboardType={'numeric'}
          onChangeText={(num1) => this.setState({num1})}
        />
        <TextInput
          placeholder="Number 2 "
          underlineColorAndroid="transparent"
          style={styles.TextInputStyle}
          keyboardType={'numeric'}
          onChangeText={(num2) => this.setState({num2})}
        />
        <View style={styles.groupButton}>
          <TouchableOpacity
            onPress={this.Sum}
            style={styles.appButtonContainer}>
            <Text style={styles.appButtonText}> + </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={this.Sub}
            style={styles.appButtonContainer}>
            <Text style={styles.appButtonText}> – </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={this.Mul}
            style={styles.appButtonContainer}>
            <Text style={styles.appButtonText}> x </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={this.Div}
            style={styles.appButtonContainer}>
            <Text style={styles.appButtonText}> ÷ </Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.resultText}>{this.state.result}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

  tinyLogo: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignSelf: 'center',
  },

  groupButton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 60,
  },

  appButtonContainer: {
    elevation: 8,
    backgroundColor: '#009688',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },

  appButtonText: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },

  resultText: {
    fontSize: 50,
    textAlign: 'center',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  TextInputStyle: {
    textAlign: 'center',
    fontSize: 25,
    height: 50,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#009688',
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
});
