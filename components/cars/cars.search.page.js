import React from 'react';
import {View, Text, Button, Image, ImageBackground} from 'react-native';
import {CarsHeader} from './cars.header';
import {CarsListingBody} from './listing/cars.listing.body';


export class CarsSearchPage extends React.Component {
  render() {
    return (
      <View style={{flex:1, flexDirection: 'column'}}>
        <CarsHeader></CarsHeader>
        <CarsListingBody></CarsListingBody>
        
      </View>
    );
  }
}
