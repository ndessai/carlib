import React from 'react';
import {View, Text} from 'react-native';
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
  },
  Actions: {flexDirection: 'row'},
  ActionIconSize: {Width: 19, Height: 16},
  ListingSummaryContainer: {height: 39, backgroundColor: '#e2e2e2'},
  ListingSummaryItems: {marginTop: 12, marginBottom: 13, flexDirection: 'row'},
};

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
          <View style={ListingBodyHeaderStyles.Actions}>
            <View>
              <CustomIcon
                name="uniE74E"
                size={
                  (ListingBodyHeaderStyles.ActionIconSize.width,
                  ListingBodyHeaderStyles.ActionIconSize.Height)
                }
              />
            </View>
            <View>
              <Text>Sort</Text>
            </View>
          </View>
          <View style={ListingBodyHeaderStyles.Actions}>
            <View>
              <CustomIcon
                name="uniE773"
                size={
                  (ListingBodyHeaderStyles.ActionIconSize.width,
                  ListingBodyHeaderStyles.ActionIconSize.Height)
                }
              />
            </View>
            <View>
              <Text>Filter</Text>
            </View>
          </View>
          <View style={ListingBodyHeaderStyles.Actions}>
            <View>
              <CustomIcon
                name="uniE77F"
                size={
                  (ListingBodyHeaderStyles.ActionIconSize.width,
                  ListingBodyHeaderStyles.ActionIconSize.Height)
                }
              />
            </View>
            <View>
              <Text>Maps</Text>
            </View>
          </View>
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
