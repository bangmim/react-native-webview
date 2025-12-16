import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import ShoppingScreen from './screens/ShoppingScreen';
import {RootStackParamList, RouteNames} from './routes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BrowserScreen from './screens/BrowserScreen';
import {faHome, faShoppingBag} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons/faCartShopping';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeIcon = ({focused, color}: {focused: boolean; color: string}) => {
  const colors = focused ? 'white' : 'red';
  return <FontAwesomeIcon icon={faHome} color={colors} size={26} />;
};
const ShoppingIcon = ({focused, color}: {focused: boolean; color: string}) => {
  const colors = focused ? 'white' : 'red';
  return <FontAwesomeIcon icon={faShoppingBag} color={colors} size={26} />;
};

const HomeTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: 'black',
        },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'white',
        headerShown: false,
      }}>
      <Tab.Screen
        name={RouteNames.Home}
        component={HomeScreen}
        options={{tabBarLabel: '홈', tabBarIcon: HomeIcon}}
      />
      <Tab.Screen
        name={RouteNames.Shopping}
        component={ShoppingScreen}
        options={{
          tabBarLabel: '쇼핑',
          tabBarIcon: ShoppingIcon,
        }}
      />
    </Tab.Navigator>
  );
};
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={RouteNames.HOME_TAB}
          options={{headerShown: false}}
          component={HomeTab}
        />
        <Stack.Screen
          name={RouteNames.BROWSER}
          component={BrowserScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
