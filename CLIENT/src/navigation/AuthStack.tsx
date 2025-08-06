import { AuthNavigatorPaths } from '@/constants/paths/navigator.path';
import LoginScreen from '@/screens/Auth/LoginScreen';
import RegisterScreen from '@/screens/Auth/RegisterScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={AuthNavigatorPaths.LOGIN} component={LoginScreen} />
      <Stack.Screen
        name={AuthNavigatorPaths.REGISTER}
        component={RegisterScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
