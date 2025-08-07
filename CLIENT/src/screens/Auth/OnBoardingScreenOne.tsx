import { globalColors } from '@/constants/global/COLORS';
import { globalStyles, heightScreen } from '@/constants/global/constant';
import { Image, StyleSheet } from 'react-native';
import { Text, View } from 'react-native';

const iconOnboarding = require('@/assets/images/iconOnBoardingOne.png');

const OnBoardingScreenOne = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerIcon}>
        <Image
          source={iconOnboarding}
          style={styles.iconOnboardingStyle}
          resizeMode="contain"
        />
      </View>
      <View style={styles.containerMainTitle}>
        <Text style={styles.title}>Welcome To The Fun Magic Media</Text>
        <Text style={styles.subtitle}>
          Discover a magical social experience where every moment becomes
          extraordinary. Connect, share, and create unforgettable memories with
          friends around the world!
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...globalStyles.mainPaddingHorizontal,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: globalColors.backgroundColor,
  },
  containerIcon: {
    marginTop: heightScreen * -0.05,
    marginBottom: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconOnboardingStyle: {
    width: 300,
    height: 300,
  },
  containerMainTitle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  title: {
    lineHeight: 40,
    fontSize: 30,
    fontWeight: 'bold',
    color: globalColors.white,
    textAlign: 'center',
  },
  subtitle: {
    lineHeight: 20,
    fontSize: 13,
    color: globalColors.gray,
    textAlign: 'center',
    marginTop: 15,
  },
});

export default OnBoardingScreenOne;
