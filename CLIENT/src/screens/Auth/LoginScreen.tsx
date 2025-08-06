import { AuthNavigatorPaths } from '@/constants/paths/navigator.path';
import { NavigationProp } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

interface LoginScreenProps {
  navigation: NavigationProp<any>;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  return (
    <View style={{ marginTop: 50 }}>
      <Text>Login Screen</Text>
      <TouchableOpacity
        style={{ backgroundColor: 'red' }}
        onPress={() => navigation.navigate(AuthNavigatorPaths.REGISTER)}
      >
        <Text>Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
