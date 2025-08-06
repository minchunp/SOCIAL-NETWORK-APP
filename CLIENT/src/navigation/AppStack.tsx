import { MainNavigatorPaths } from '@/constants/paths/navigator.path';
import HomeScreen from '@/screens/Home/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: { backgroundColor: 'transparent' },
      }}
      initialRouteName={MainNavigatorPaths.HOME}
    >
      <Tab.Screen name={MainNavigatorPaths.HOME} component={HomeScreen} />
      {/* Add other tabs here */}
    </Tab.Navigator>
  );
};

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainTabs" component={MainTabs} />
    </Stack.Navigator>
  );
};

export default AppStack;
