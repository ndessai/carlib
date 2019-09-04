import React from 'react';
import {View, Text, Button, Image, ImageBackground} from 'react-native';

export class CarsHeader extends React.Component {
  render() {
    return (
      <View style={{height: 100}}>
        <ImageBackground
          source={require('../../assets/car_header_bg.png')}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{width: '100%', height: '100%'}}>
          <View style={{marginTop: 55, flex: 1, height: 36, flexDirection: 'row'}}>
            <View style={{width: 36}}>
            <Image source={require('../../assets/back_button.png')} style={{marginLeft: 13, marginRight: 13, marginTop: 8, marginBottom: 8}}></Image>
            </View>
            <View style={{height: 36, flexGrow: 1, flexDirection: 'column', alignItems: 'center'}}>
              <View style={{flex: 1, height: 19, flexDirection: 'row'}}>
                <Text style={{fontSize: 16, color: '#ffffff'}}>NYC - MCO</Text>
                <Image source={require('../../assets/edit_search.png')} style={{marginLeft: 3}}></Image>
              </View>
              <View style={{flex: 1, height: 14}}>
                <Text style={{fontSize: 12, color: '#ffffff'}}>Sep 12, 03:31pm - Sep 15, 06:50pm</Text>
              </View>
            </View>
            <View style={{width: 36}}>
              <View style={{margin: 8, justifyContent: 'space-between', flexDirection: 'column'}}>
                <Image source={require('../../assets/hamburger_menu_dash.png')}></Image>
                <Image source={require('../../assets/hamburger_menu_dash.png')} style={{marginTop: 3}}></Image>
                <Image source={require('../../assets/hamburger_menu_dash.png')} style={{marginTop: 3}}></Image>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
