import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';

class MessageScreen extends Component {

  constructor(props){
    super(props);
    this.state = {
      name: 'Vai Na Web',
      text: '',
      textInput: ''
    }
    this.send = this.send.bind(this);
  }

  send = () => {
    this.setState({
      text: this.state.textInput,
    });
  }

  render() {    
    return (
      <View style={styles.container}>
        <View style={styles.fieldName}>
          <TouchableOpacity>
            <Image source={require('../assets/back.png')} style={styles.back} />
          </TouchableOpacity>
          <Text style={styles.name}> {this.state.name} </Text>
        </View>
        <ScrollView>
        <View style={styles.fielText}>
          <Text style={styles.text}>Hello World</Text>
          <Text style={styles.text}>{this.state.text}</Text>
        </View>
        </ScrollView>
        <View style={styles.fieldInput}>
          <TextInput 
            underlineColorAndroid='transparent'
            placeholder="Type a message…" 
            style={styles.input}
            onChangeText={(textInput)=> this.setState({textInput})}
          />
          <TouchableOpacity style={styles.buttonSend} onPress={this.send}>
            <Text>Send</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#113300',
    justifyContent: 'center'
  },
  fieldName: {
    paddingTop: 14,
    height: 56,
    flexDirection: 'row',
    borderColor: '#c6e9fb',
    backgroundColor: '#EAFFE0'
  },
  back: {
    marginLeft: 10,
    width: 20, 
    height: 20,
    resizeMode: 'contain'
  },
  name: {
    marginLeft: 120,
    fontSize: 22,
    fontWeight: 'bold'
  },
  text: {
    backgroundColor: '#FFF',
    margin: 10,
    marginRight: 130,
    padding: 10,
    alignSelf: 'flex-start',
    fontSize: 15,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 0,
  },
  fieldInput: {
    flexDirection: 'row',
    backgroundColor: "#FFF",
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    padding:10,
    width:'85%'    
  },
  buttonSend: {
    width:'15%'
  }
});

export default MessageScreen;