import React from 'react';
import {View, Text, Button, ImageBackground} from 'react-native';

export class CarsListingPage extends React.Component {
  render() {
    return (
      // eslint-disable-next-line react-native/no-inline-styles
      <View style={{height: 100}}>
        <ImageBackground
          source={require('../../assets/car_header_bg.png')}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{width: '100%', height: '100%'}}>
          <View style={{marginTop: 55}}>
            <Text>NYC</Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
