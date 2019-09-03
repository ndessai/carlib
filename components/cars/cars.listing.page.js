import React from 'react';
import {View, Text, Button, ImageBackground} from 'react-native';

export class CarsListingPage extends React.Component {
  render() {
    return (
      // eslint-disable-next-line react-native/no-inline-styles
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ImageBackground
          source={require('../../assets/car_header_bg.png')}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{width: '100%', height: '100%'}}>
          <Text>Inside</Text>
        </ImageBackground>
        <Text>Listing Page</Text>
        <Button
          title="Listing"
          onPress={() => this.props.navigation.navigate('CarsReview')}
        />
      </View>
    );
  }
}
