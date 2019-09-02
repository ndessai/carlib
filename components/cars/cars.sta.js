import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {CarsSearchPage} from './cars.search.page';
import {CarsListingPage} from './cars.listing.page';
import {CarsReviewPage} from './cars.review.page';

const CarsStaAppNavigator = createStackNavigator(
  {
    CarsSearch: CarsSearchPage,
    CarsListing: CarsListingPage,
    CarsReview: CarsReviewPage,
  },
  {
    initialRouteName: 'CarsSearch',
  },
);

export const CarsStaAppContainer = createAppContainer(CarsStaAppNavigator);
