import React from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import CustomIcon from '../custom.icons';

const HeaderStyles = {
  Height: {height: 100},
  IconColor: '#ffffff',
  ImageBackground: require('../../assets/car_header_bg.png'),
  ImageSize: {width: '100%', height: '100%'},
  Container: {marginTop: 55, flex: 1, height: 36, flexDirection: 'row'},
  BackContainer: {width: 36, paddingLeft: 13, paddingTop: 9},
  BackIconSize: {Width: 10, Height: 18},
  SearchParamsContainer: {
    height: 36,
    flexGrow: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  SearchCityContainer: {flex: 1, height: 19, flexDirection: 'row'},
  SearchCityText: {fontSize: 16, color: '#ffffff'},
  EditIconSize: {Width: 18, Height: 16},
  EditIcon: {marginLeft: 3},
  DatesContainer: {flex: 1, height: 14},
  DatesText: {fontSize: 12, color: '#ffffff'},
  HamburgerIconSize: {Width: 20, Height: 18},
  HamburgerIconContainer: {width: 36},
  HamburgerIcon: {margin: 8},
};

export class CarsHeader extends React.Component {
  render() {
    let cityPair = this.props.from;
    if (this.props.to) {
      cityPair += ' - ' + this.props.to;
    }
    return (
      <View style={HeaderStyles.Height}>
        <ImageBackground
          source={HeaderStyles.ImageBackground}
          style={HeaderStyles.ImageSize}>
          <View style={HeaderStyles.Container}>
            <View style={HeaderStyles.BackContainer}>
              <TouchableOpacity
                onPress={() => {
                  if (this.props.backClicked) {
                    this.props.backClicked();
                  }
                }}>
                <View>
                  <CustomIcon
                    name="uniE75B"
                    size={
                      (HeaderStyles.BackIconSize.Width,
                      HeaderStyles.BackIconSize.Height)
                    }
                    color={HeaderStyles.IconColor}
                  />
                </View>
              </TouchableOpacity>
            </View>
            <View style={HeaderStyles.SearchParamsContainer}>
              <View style={HeaderStyles.SearchCityContainer}>
                <Text style={HeaderStyles.SearchCityText}> {cityPair} </Text>
                <TouchableOpacity
                  onPress={() => {
                    if (this.props.editClicked) {
                      this.props.editClicked();
                    }
                  }}
                  style={HeaderStyles.EditIcon}>
                  <View>
                    <CustomIcon
                      name="uniE693"
                      size={
                        (HeaderStyles.EditIconSize.Width,
                        HeaderStyles.EditIconSize.Height)
                      }
                      color={HeaderStyles.IconColor}
                    />
                  </View>
                </TouchableOpacity>
              </View>
              <View style={HeaderStyles.DatesContainer}>
                <Text style={HeaderStyles.DatesText}>
                  {this.props.fromTime + ' - ' + this.props.toTime}
                </Text>
              </View>
            </View>
            <View style={HeaderStyles.HamburgerIconContainer}>
              <TouchableOpacity
                style={HeaderStyles.HamburgerIcon}
                onPress={() => {
                  if (this.props.menuClicked) {
                    this.props.menuClicked();
                  }
                }}>
                <View>
                  <CustomIcon
                    name="uniE648"
                    size={
                      (HeaderStyles.HamburgerIconSize.width,
                      HeaderStyles.HamburgerIconSize.Height)
                    }
                    color={HeaderStyles.IconColor}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
