import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, FlatList } from 'react-native';

import Title from '../components/title';
import Button from '../components/button';
import CheckBoxC from '../components/checkBox';
import AreasVolunteer from '../components/areasVolunteer';

class SelectTheAreasScreen extends Component {

    constructor(props){
        super(props);
        this.state = {
            areas: [
                {title: "Advocacy & Human Rights" },
                {title: "Advocacy & Human Rights" },
                {title: "Arts & Culture" },
                {title: "Board Development" },
                {title: "Children & Youth" },
                {title: "Community" },
                {title: "Computers & Technology" },
                {title: "Education" },
                {title: "Employment" },
                {title: "Faith Based" },
                {title: "Health & Medicine" },
                {title: "Homeless & Housing" },
                {title: "Hunger" },
                {title: "Immigrants & Refugees" },
                {title: "LGBT" },
                {title: "Media & Broadcasting" },
                {title: "Special  needs" },
                {title: "Politics" },
                {title: "Race & Ethnicity" },
                {title: "Seniors" },
                {title: "Sports & Recreations" },
                {title: "Veterans & Military Families" },
                {title: "Women" }
            ]
        }
    }

  render() {
    return (
      <ScrollView>
       <View style={styles.container}>
            <View style={styles.beam}/>
            <Title fontSize='big' text='Select the areas your organization cover:' />
            <FlatList 
              data={this.state.areas}
              renderItem={({item}) => <AreasVolunteer data={item} />}
            />
            <Button type='Ok' background='blue' color='white'/> 
        </View>
      </ScrollView>  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingBottom: 20
  },
  beam: {
	width: '100%',
	height: '1.4%',
    backgroundColor: '#BEE2F5',
    marginBottom:'5%'
  },
  CheckBox: {
    width: '50%',
    flexDirection: 'row',
  }
});

export default SelectTheAreasScreen;