import { AuthNavigatorPaths } from '@/constants/paths/navigator.path';
import { NavigationProp } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

interface RegisterScreenProps {
  navigation: NavigationProp<any>;
}

const RegisterScreen: React.FC<RegisterScreenProps> = ({ navigation }) => {
  return (
    <View style={{ marginTop: 50 }}>
      <Text>Register Screen</Text>
      <TouchableOpacity
        style={{ backgroundColor: 'red' }}
        onPress={() => navigation.navigate(AuthNavigatorPaths.LOGIN)}
      >
        <Text>Already have an account? Log in</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterScreen;
