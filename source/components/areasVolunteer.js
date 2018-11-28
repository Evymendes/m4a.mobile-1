import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';

import Title from '../components/title';
import Button from '../components/button';
import CheckBoxC from '../components/checkBox';

class AreasVolunteer extends Component {

  render() {
    return (
      <View style={styles.container}>
        <CheckBoxC name={this.props.data.title}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 10
  }
});

export default AreasVolunteer;