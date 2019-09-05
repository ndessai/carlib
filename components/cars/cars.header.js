import React from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';

import CustomIcon from '../custom.icons';

export class CarsHeader extends React.Component {
  render() {
    return (
      <View style={{height: 100}}>
        <ImageBackground
          source={require('../../assets/car_header_bg.png')}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{width: '100%', height: '100%'}}>
          <View style={{marginTop: 55, flex: 1, height: 36, flexDirection: 'row'}}>
            <View style={{width: 36, paddingLeft: 13, paddingTop: 9}}>
            <TouchableOpacity onPress={()=>{}} >
                <View>
                <CustomIcon name='uniE75B' size={10,18} color="#ffffff"/>
                </View>
            </TouchableOpacity>
            </View>
            <View style={{height: 36, flexGrow: 1, flexDirection: 'column', alignItems: 'center'}}>
              <View style={{flex: 1, height: 19, flexDirection: 'row'}}>
                <Text style={{fontSize: 16, color: '#ffffff'}}>NYC - MCO</Text>
                <TouchableOpacity onPress={()=>{}} style={{marginLeft: 3}} >
                    <View>
                    <CustomIcon name='uniE693' size={18,16} color="#ffffff"/>
                    </View>
                </TouchableOpacity>
              </View>
              <View style={{flex: 1, height: 14}}>
                <Text style={{fontSize: 12, color: '#ffffff'}}>Sep 12, 03:31pm - Sep 15, 06:50pm</Text>
              </View>
            </View>
            <View style={{width: 36}}>
              <View style={{margin: 8, justifyContent: 'space-between', flexDirection: 'column'}}>
              <TouchableOpacity onPress={()=>{}} >
                    <View>
                    <CustomIcon name='uniE648' size={20, 18} color="#ffffff"/>
                    </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
