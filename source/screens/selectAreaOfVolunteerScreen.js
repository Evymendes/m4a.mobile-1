import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, FlatList} from 'react-native';

import Title from '../components/title';
import Button from '../components/button';
import CheckBoxC from '../components/checkBox';
import AreasVolunteer from '../components/areasVolunteer'; 

class SelectAreaOfVolunteerScreen extends Component {

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
        	<Title text='Select the areas you would like to volunteer:' fontSize='big'/>
          <FlatList 
            data={this.state.areas}
            renderItem={({item}) => <AreasVolunteer data={item} />}
          />
          <Button type='Ok' background='orange' color='white' 
            route='EndUserScreen'
				    navigation={this.props.navigation}
          />
        </View>
      </ScrollView>  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingBottom: 50
  },
  beam: {
		width: '100%',
		height: '1.4%',
    marginBottom:'5%',
		backgroundColor: '#FFD9B9'
  },
  CheckBox: {
    width: '50%',
    flexDirection: 'row',
  }
});

export default SelectAreaOfVolunteerScreen;