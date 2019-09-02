import React from 'react';
import {View, Text, Button} from 'react-native';

export class CarsSearchPage extends React.Component {
  render() {
    return (
      // eslint-disable-next-line react-native/no-inline-styles
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Search Page</Text>
        <Button
          title="Search"
          onPress={() => this.props.navigation.navigate('CarsListing')}
        />
      </View>
    );
  }
}
