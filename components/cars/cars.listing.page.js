import React from 'react';
import {View, Text, Button} from 'react-native';

export class CarsListingPage extends React.Component {
  render() {
    return (
      // eslint-disable-next-line react-native/no-inline-styles
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Listing Page</Text>
        <Button
          title="Listing"
          onPress={() => this.props.navigation.navigate('CarsReview')}
        />
      </View>
    );
  }
}
