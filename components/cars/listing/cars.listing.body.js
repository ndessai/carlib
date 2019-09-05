import React from 'react';
import {View, Text, Button, Image, ImageBackground} from 'react-native';
import CustomIcon from '../../custom.icons';

export class CarsListingBody extends React.Component {
  render() {
    return (
      <View style={{flex:1, flexDirection: 'column'}}>
          <View style={{height: 40, alignItems: 'center'}}>
              <Text>Book Now to get $2.50 Off on your ride</Text>
          </View>
          <View style={{height: 45, flexDirection: 'row', backgroundColor: '#e2e2e2'}}>
              <View style={{flexDirection: 'row'}}>
                  <View></View>
                  <View><Text>Sort</Text></View>
              </View>
              <View style={{flexDirection: 'row'}}>
                  <View></View>
                  <View><CustomIcon name='uniE600' /></View>
              </View>
              <View style={{flexDirection: 'row'}}>
                  <View></View>
                  <View><Text>Maps</Text></View>
              </View>
          </View>
          <View style={{height: 39, backgroundColor: '#e2e2e2'}}>
            <View style={{marginTop: 12, marginBottom: 13, flexDirection: 'row'}}> 
                <Text>661 cars, 58 viewing, 50% reserved</Text>
              </View>
          </View>
          <View style={{flexGrow:1}}>
              <Text>Listing</Text>
          </View>
      </View>
    );
  }
}
