import { Platform } from 'react-native';

export const getPlatformIos = () => {
  return Platform.OS === 'ios';
};
