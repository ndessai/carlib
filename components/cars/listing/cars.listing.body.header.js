import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import CustomIcon from '../../custom.icons';

const ListingBodyHeaderStyles = {
  Container: {flexDirection: 'column'},
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

class ActionHeaderItem extends React.Component {
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

class SummaryHeaderItem extends React.Component {
  render() {
    return (
      <View style={ListingBodyHeaderStyles.Actions}>
        {this.props.icon && (
          <CustomIcon
            name={this.props.icon}
            size={
              (ListingBodyHeaderStyles.ActionIconSize.width,
              ListingBodyHeaderStyles.ActionIconSize.Height)
            }
            color={ListingBodyHeaderStyles.SummaryColor}
          />
        )}
        <Text style={ListingBodyHeaderStyles.SummaryText}>
          {this.props.text}
        </Text>
      </View>
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
          <ActionHeaderItem
            iconName="uniE74E"
            iconText="Sort"
            actionClicked={this.props.sortClicked}
          />
          <ActionHeaderItem
            iconName="uniE773"
            iconText="Filter"
            actionClicked={this.props.filterClicked}
          />
          <ActionHeaderItem
            iconName="uniE77F"
            iconText="Maps"
            actionClicked={this.props.mapsClicked}
          />
        </View>
        <View style={ListingBodyHeaderStyles.SummaryContainer}>
          <SummaryHeaderItem
            style={ListingBodyHeaderStyles.SummaryItem}
            text="661 cars"
          />
          <SummaryHeaderItem
            style={ListingBodyHeaderStyles.SummaryItem}
            icon="uniE651"
            text="50% reserved"
          />
          <SummaryHeaderItem
            style={ListingBodyHeaderStyles.SummaryItem}
            text="58 viewing"
            icon="uniF167"
          />
        </View>
      </View>
    );
  }
}
