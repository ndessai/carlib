import React from 'react';
import {View, Text, Button} from 'react-native';

export class CarsReviewPaymentPage extends React.Component {
  render() {
    return (
      // eslint-disable-next-line react-native/no-inline-styles
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Review Payment Page</Text>
        <Button title="Book" />
      </View>
    );
  }
}
