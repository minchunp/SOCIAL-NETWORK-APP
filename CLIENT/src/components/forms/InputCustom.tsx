import React, { useState } from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { globalColors } from '@/constants/global/COLORS';

interface InputCustomProps {
  type?: 'text' | 'email' | 'phoneNumber' | 'password';
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  onFocus?: (value: boolean) => void;
  error?: string;
  style?: object;
  containerStyle?: object;
  [key: string]: any;
}

const InputCustom = ({
  type = 'text',
  placeholder,
  value,
  onChangeText,
  error,
  onFocus,
  style,
  containerStyle,
  ...props
}: InputCustomProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const textInputRef = React.useRef<TextInput>(null);

  // Validation functions
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhoneNumber = (phone: string) => {
    const phoneRegex = /^[0-9]{10,11}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  };

  // Get validation error message
  const getValidationError = () => {
    if (!value || value.trim() === '') return null;

    switch (type) {
      case 'email':
        return !validateEmail(value) ? 'Email không hợp lệ' : null;
      case 'phoneNumber':
        return !validatePhoneNumber(value)
          ? 'Số điện thoại không hợp lệ'
          : null;
      case 'password':
        return value.length < 6 ? 'Mật khẩu phải có ít nhất 6 ký tự' : null;
      default:
        return null;
    }
  };

  // Get keyboard type based on input type
  const getKeyboardType = () => {
    switch (type) {
      case 'email':
        return 'email-address';
      case 'phoneNumber':
        return 'phone-pad';
      default:
        return 'default';
    }
  };

  // Get icon based on input type
  const getIcon = () => {
    switch (type) {
      case 'email':
        return 'mail-outline';
      case 'phoneNumber':
        return 'call-outline';
      case 'password':
        return 'lock-closed-outline';
      default:
        return 'person-outline';
    }
  };

  // Check if input is secure (password)
  const isSecureTextEntry = type === 'password' && !isPasswordVisible;

  // Get current error (validation error or prop error)
  const currentError = error || getValidationError();

  // Handle container press to focus input
  const handleContainerPress = () => {
    textInputRef.current?.focus();
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={handleContainerPress}
        style={[
          styles.inputContainer,
          isFocused && styles.inputContainerFocused,
          currentError && styles.inputContainerError,
          style,
        ]}
      >
        {/* Left Icon */}
        <View style={styles.iconContainer}>
          <Ionicons
            name={getIcon()}
            size={20}
            color={
              currentError
                ? globalColors.error
                : isFocused
                  ? globalColors.primary
                  : globalColors.grayTwo
            }
          />
        </View>

        {/* Text Input */}
        <TextInput
          ref={textInputRef}
          style={[styles.textInput]}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={isSecureTextEntry}
          keyboardType={getKeyboardType()}
          autoCapitalize={type === 'email' ? 'none' : 'sentences'}
          autoCorrect={false}
          onFocus={() => {
            setIsFocused(true);
            onFocus && onFocus(true);
          }}
          onBlur={() => {
            setIsFocused(false);
            onFocus && onFocus(false);
          }}
          placeholderTextColor={globalColors.grayTwo}
          editable={true}
          {...props}
        />

        {/* Password Toggle Button */}
        {type === 'password' && (
          <TouchableOpacity
            style={styles.eyeButton}
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
            activeOpacity={0.7}
          >
            <Ionicons
              name={isPasswordVisible ? 'eye-outline' : 'eye-off-outline'}
              size={20}
              color={globalColors.grayTwo}
            />
          </TouchableOpacity>
        )}
      </TouchableOpacity>

      {/* Error Message */}
      {currentError && (
        <View style={styles.errorContainer}>
          <Ionicons
            name="alert-circle-outline"
            size={16}
            color={globalColors.error}
          />
          <Text style={styles.errorText}>{currentError}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#292C35',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#292C35',
    paddingHorizontal: 16,
    paddingVertical: 12,
    minHeight: 55,
  },
  inputContainerFocused: {
    borderColor: globalColors.primary,
    shadowColor: globalColors.primary,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  inputContainerError: {
    borderColor: globalColors.error,
  },
  iconContainer: {
    marginRight: 12,
  },
  textInput: {
    flex: 1,
    fontSize: 14,
    color: globalColors.white,
    paddingVertical: 0,
    minHeight: 20,
  },
  eyeButton: {
    padding: 4,
    marginLeft: 8,
  },
  errorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    paddingHorizontal: 4,
  },
  errorText: {
    color: globalColors.error,
    fontSize: 12,
    marginLeft: 6,
    flex: 1,
  },
});

export default InputCustom;
