import React from 'react';
import {View, Text, Button, Image, ImageBackground} from 'react-native';
import {CarsHeader} from './cars.header';
import {CarsListingBody} from './listing/cars.listing.body';

export class CarsSearchPage extends React.Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <CarsHeader backClicked={() => {}} editClicked={() => {}} menuClicked={() => {}} from ="NYC" to ="MCO" fromTime = "Sep 12 3:30pm"
        toTime = "Sep 15 5:12pm"/>
        <CarsListingBody />
      </View>
    );
  }
}
