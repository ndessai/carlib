import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {CarsSearchPage} from './cars.search.page';
import {CarsListingPage} from './cars.listing.page';
import {CarsReviewDetailsPage} from './cars.review.details.page';
import {CarsReviewPaxPage} from './cars.review.pax.page';
import {CarsReviewPaymentPage} from './cars.review.payment.page';

const CarsStaAppNavigator = createStackNavigator(
  {
    CarsSearch: CarsSearchPage,
    CarsListing: CarsListingPage,
    CarsReview: CarsReviewDetailsPage,
    CarsPax: CarsReviewPaxPage,
    CarsPayment: CarsReviewPaymentPage,
  },
  {
    initialRouteName: 'CarsSearch',
    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);

export const CarsStaAppContainer = createAppContainer(CarsStaAppNavigator);
