import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import CustomIcon from '../../custom.icons';

const ListingBodyHeaderStyles = {
  Container: {flex: 1, flexDirection: 'column'},
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
  ListingSummaryContainer: {height: 39, backgroundColor: '#e2e2e2'},
  ListingSummaryItems: {marginTop: 12, marginBottom: 13, flexDirection: 'row'},
};

class ActionHeader extends React.Component {
  render() {
    return (
      <TouchableOpacity
        style={ListingBodyHeaderStyles.Actions}
        onPress={() => {
          if (this.props.actionClicked) {
            this.props.actionClicked();
          }
        }}>
        <CustomIcon
          name={this.props.iconName}
          size={
            (ListingBodyHeaderStyles.ActionIconSize.width,
            ListingBodyHeaderStyles.ActionIconSize.Height)
          }
          color={ListingBodyHeaderStyles.ActionColor}
        />
        <Text style={ListingBodyHeaderStyles.ActionText}>
          {this.props.iconText}
        </Text>
      </TouchableOpacity>
    );
  }
}

export class CarsListingBodyHeader extends React.Component {
  render() {
    return (
      <View style={ListingBodyHeaderStyles.Container}>
        <View style={ListingBodyHeaderStyles.PromoContainer}>
          <View style={ListingBodyHeaderStyles.PromoContainer}>
            <CustomIcon
              name="uniE754"
              style={ListingBodyHeaderStyles.PromoIcon}
            />
            <View style={ListingBodyHeaderStyles.PromoTextContainer}>
              <Text style={ListingBodyHeaderStyles.PromotText}>
                Book Now to get
              </Text>
              <Text style={ListingBodyHeaderStyles.PromotTextHighlight}>
                $2.50 off
              </Text>
              <Text style={ListingBodyHeaderStyles.PromotText}>
                on your ride!
              </Text>
            </View>
          </View>
        </View>
        <View style={ListingBodyHeaderStyles.ActionsContainer}>
          <ActionHeader
            iconName="uniE74E"
            iconText="Sort"
            actionClicked={this.props.sortClicked}
          />
          <ActionHeader
            iconName="uniE773"
            iconText="Filter"
            actionClicked={this.props.filterClicked}
          />
          <ActionHeader
            iconName="uniE77F"
            iconText="Maps"
            actionClicked={this.props.mapsClicked}
          />
        </View>
        <View style={ListingBodyHeaderStyles.ListingSummaryContainer}>
          <View style={ListingBodyHeaderStyles.ListingSummaryItems}>
            <Text>661 cars, 58 viewing, 50% reserved</Text>
          </View>
        </View>
      </View>
    );
  }
}
