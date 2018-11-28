/*import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Button, Picker } from 'react-native';


class PickerArea extends Component {

  constructor(props) {
    super(props);
    this.state = {
      servico:0,
      servicos:[
        {nome:' Click and choose  the list', valor:30},
        {nome:'Handcraft', valor:30},
        {nome:'Make up', valor:20},
        {nome:'Mathematics', valor:50},
        {nome:'Music', valor:100000}
      ],
    };
  }

  

  render() { 

    let servicosItems = this.state.servicos.map((v, k) => {
      return <Picker.Item key={k} value={k} label={v.nome} />
    });
   
    return (
      <View style={styles.container}>
        <Picker 
          style={styles.listPicker}
          selectedValue={this.state.servico} onValueChange={(itemValue, itemIndex) => this.setState({servico:itemValue})}>
          {servicosItems}
        </Picker>
        <Text style={styles.texto}>R$ {this.state.servicos[this.state.servico].valor.toFixed(2)}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
  listPicker: { 
    //height: '60%', 
    width: '80%', 
    backgroundColor: 
    '#E8F7FF', 
    color: '#6ECEFF', 
    marginLeft: 30 
  },
   texto:{
    fontSize:15,
    color: '#FFF',
    textAlign:'center',
    marginTop:20,
    height: 34,
    padding: 10,
    backgroundColor: '#0081C3', 
    alignSelf: 'center',
    borderRadius: 5
  },
});

export default PickerArea;*/