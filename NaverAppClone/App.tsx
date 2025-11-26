import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import ShoppingScreen from './screens/ShoppingScreen';
import {RouteNames} from './routes';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name={RouteNames.Home} component={HomeScreen} />
        <Tab.Screen name={RouteNames.Shopping} component={ShoppingScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
