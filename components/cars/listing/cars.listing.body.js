import React from 'react';
import {View, Text, Button, Image, ImageBackground} from 'react-native';
import {CarsListingBodyHeader} from './cars.listing.body.header';

export class CarsListingBody extends React.Component {
  render() {
    return (
      <View style={{flex:1, flexDirection: 'column'}}>
        <CarsListingBodyHeader style={{flex:1, flexDirection: 'column'}}></CarsListingBodyHeader>
          <View style={{flexGrow:1}}>
              <Text>Listing</Text>
          </View>
      </View>
    );
  }
}
