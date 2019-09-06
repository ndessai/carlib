import React from 'react';
import {View, Text, Button, Image, ImageBackground} from 'react-native';
import CustomIcon from '../../custom.icons';

const CarListItemStyles = {
  Container: {
    backgroundColor: '#ffffff',
    flexDirection: 'column',
    marginBottom: 10,
  },
  TitleRowContainer: {height: 14, marginTop: 8},
  PicRowContainer: {height: 40, marginTop: 10},
  AmenitiesContainer: {height: 36, marginTop: 20},
  FootNoteSeparator: {
    height: 1,
    borderBottomWidth: 0.5,
    borderBottomColor: '#787878',
    marginLeft: 13,
    marginRight: 13,
  },
  FoontNotesContainer: {height: 28},
  PromoContainer: {
    height: 40,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  PromoTextContainer: {marginLeft: 23, flexDirection: 'row'},
  PromoIcon: {fontSize: 40},
  PromotText: {marginLeft: 2, fontSize: 14},
  PromotTextHighlight: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#19a354',
    marginLeft: 2,
  },
  ActionsContainer: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: '#e2e2e2',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderBottomColor: '#787878',
  },
  Actions: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ActionIconSize: {Width: 21, Height: 21},
  ActionColor: '#158acb',
  ActionText: {marginLeft: 10, fontSize: 12, color: '#158acb'},
  SummaryContainer: {
    height: 30,
    backgroundColor: '#e2e2e2',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  SummaryItem: {
    marginTop: 12,
    marginBottom: 13,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  SummaryText: {marginLeft: 7, fontSize: 12, color: '#666666'},
  SummaryColor: '#666666',
  SummaryIconSize: {Width: 12, Height: 12},
};

export class CarsListItem extends React.Component {
  render() {
    return (
      <View style={CarListItemStyles.Container}>
        <View style={CarListItemStyles.TitleRowContainer}>
          <Text>Title</Text>
        </View>
        <View style={CarListItemStyles.PicRowContainer}>
          <Text>Pic</Text>
        </View>
        <View style={CarListItemStyles.AmenitiesContainer}>
          <Text>Amenities</Text>
        </View>
        <View style={CarListItemStyles.FootNoteSeparator} />
        <View style={CarListItemStyles.FoontNotesContainer}>
          <Text>FootNotes</Text>
        </View>
      </View>
    );
  }
}
