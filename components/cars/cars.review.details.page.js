import React from 'react';
import {View, Text, Button} from 'react-native';

export class CarsReviewDetailsPage extends React.Component {
  render() {
    return (
      // eslint-disable-next-line react-native/no-inline-styles
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Review Page</Text>
        <Button
          title="Continue to next step"
          onPress={() => this.props.navigation.navigate('CarsPax')}
        />
      </View>
    );
  }
}
