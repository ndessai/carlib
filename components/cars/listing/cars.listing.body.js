import React from 'react';
import {View, Text, Button, Image, ImageBackground} from 'react-native';
import {CarsListingBodyHeader} from './cars.listing.body.header';
import {CarsListItem} from './cars.list.item';

const CarListBodyStyles = {
  Container: {flex: 1, flexDirection: 'column'},
  ListContainer: {flex: 1, flexDirection: 'column', backgroundColor: '#e2e2e2'},
};

export class CarsListingBody extends React.Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <CarsListingBodyHeader />
        <View style={{flexDirection: 'column', backgroundColor: '#e2e2e2'}}>
          <CarsListItem  />
          <CarsListItem  />
          <CarsListItem  />
          <CarsListItem  />
          <CarsListItem  />
          <CarsListItem  />
        </View>
      </View>
    );
  }
}
