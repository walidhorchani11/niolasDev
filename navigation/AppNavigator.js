import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen';
import ManageProductScreen from '../screens/ManageProductScreen';
import AddProductFormScreen from '../screens/AddProductFormScreen';
import DetailProductScreen from '../screens/DetailProductScreen';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  ManageProduct: {
    screen: ManageProductScreen,
  },
  AddProductForm: {
    screen: AddProductFormScreen,
  },
  DetailProduct: {
    screen: DetailProductScreen,
  },
});

export default createAppContainer(AppNavigator);
