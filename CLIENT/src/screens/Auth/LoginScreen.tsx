import InputCustom from '@/components/forms/InputCustom';
import { globalColors } from '@/constants/global/COLORS';
import { globalStyles, heightScreen } from '@/constants/global/constant';
import { AuthNavigatorPaths } from '@/constants/paths/navigator.path';
import { getPlatformIos } from '@/utils/utils.util';
import { NavigationProp } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

interface LoginScreenProps {
  navigation: NavigationProp<any>;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [isRememberMe, setIsRememberMe] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.mainContainer}>
      <KeyboardAvoidingView
        behavior={getPlatformIos() ? 'padding' : 'height'}
        style={styles.mainContainer}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView
            contentContainerStyle={styles.scrollContainer}
            showsHorizontalScrollIndicator={false}
            bounces
          >
            <View style={styles.mainContent}>
              <Text style={styles.title}>Login Your Account</Text>

              <View>
                <InputCustom
                  onFocus={setIsFocused}
                  type="email"
                  placeholder="Enter your email"
                />
                <InputCustom
                  onFocus={setIsFocused}
                  type="password"
                  placeholder="Password"
                />
              </View>

              <View style={styles.optionRow}>
                <TouchableOpacity
                  onPress={() => setIsRememberMe(!isRememberMe)}
                >
                  <View style={styles.optionRow}>
                    <Switch
                      value={isRememberMe}
                      onValueChange={setIsRememberMe}
                      trackColor={{
                        false: globalColors.grayTwo,
                        true: globalColors.primary,
                      }}
                      thumbColor={globalColors.white}
                      ios_backgroundColor={globalColors.grayTwo}
                      style={styles.switch}
                    />
                    <Text style={styles.switchLabel}>Save Me</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity>
                  <Text style={styles.forgotPasswordText}>
                    Forget Password?
                  </Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.loginButtonText}>Login</Text>
              </TouchableOpacity>

              <View style={styles.registerContainer}>
                <Text style={styles.signUpText}>Create New Account?</Text>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate(AuthNavigatorPaths.SIGN_UP)
                  }
                >
                  <Text style={styles.signUpLink}>Sign Up</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={isFocused ? { display: 'none' } : styles.footerContainer}
            >
              <Text style={styles.footerTitle}>Continue With Accounts</Text>
              <View style={styles.optionsContainer}>
                <TouchableOpacity style={styles.optionButton}>
                  <AntDesign
                    name="google"
                    size={24}
                    color={globalColors.primary}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionButton}>
                  <AntDesign
                    name="apple1"
                    size={24}
                    color={globalColors.primary}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: globalColors.backgroundColor,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  mainContent: {
    ...globalStyles.mainPaddingHorizontal,
    flex: 1,
    justifyContent: 'center',
    marginBottom: heightScreen * 0.08,
  },
  title: {
    color: globalColors.white,
    fontSize: 45,
    fontWeight: 'bold',
    width: '80%',
    marginBottom: 40,
  },
  optionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  switch: {
    transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
  },
  switchLabel: {
    color: globalColors.grayTwo,
    fontSize: 14,
    marginLeft: 8,
  },
  forgotPasswordText: {
    color: globalColors.grayTwo,
    fontSize: 14,
  },
  loginButton: {
    marginTop: 25,
    marginBottom: 15,
    backgroundColor: globalColors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    height: 55,
    borderRadius: 15,
  },
  loginButtonText: {
    color: globalColors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  signUpText: {
    color: globalColors.grayTwo,
    fontSize: 14,
  },
  signUpLink: {
    fontWeight: 'bold',
    color: globalColors.primary,
    fontSize: 14,
  },
  footerContainer: {
    position: 'absolute',
    bottom: heightScreen * 0.13,
    paddingTop: 20,
    width: '100%',
    alignItems: 'center',
    borderTopColor: '#292C35',
    borderTopWidth: 1,
  },
  footerTitle: {
    color: globalColors.grayTwo,
    fontSize: 14,
    marginBottom: 15,
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    gap: 10,
    ...globalStyles.mainPaddingHorizontal,
  },
  optionButton: {
    backgroundColor: `${globalColors.primary}20`,
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 55,
    borderRadius: 15,
  },
});

export default LoginScreen;
