import { AuthNavigatorPaths } from '@/constants/paths/navigator.path';
import LoginScreen from '@/screens/Auth/LoginScreen';
import RegisterScreen from '@/screens/Auth/RegisterScreen';
import { createStackNavigator } from '@react-navigation/stack';
import OnBoardingMainScreen from '@/screens/Auth/OnBoardingMainScreen';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={AuthNavigatorPaths.ONBOARDING_MAIN_SCREEN}
        component={OnBoardingMainScreen}
      />
      <Stack.Screen name={AuthNavigatorPaths.LOGIN} component={LoginScreen} />
      <Stack.Screen
        name={AuthNavigatorPaths.SIGN_UP}
        component={RegisterScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
