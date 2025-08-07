import { globalColors } from '@/constants/global/COLORS';
import { heightScreen } from '@/constants/global/constant';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Svg, { Defs, RadialGradient, Stop, Circle } from 'react-native-svg';

const AppSplashScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <View style={styles.svgContainer}>
          <Svg height="300" width="300" style={styles.svgBackground}>
            <Defs>
              <RadialGradient id="grad" cx="50%" cy="50%" r="50%">
                <Stop offset="0%" stopColor="#606060" stopOpacity="1" />
                <Stop offset="30%" stopColor="#404040" stopOpacity="1" />
                <Stop offset="60%" stopColor="#202020" stopOpacity="1" />
                <Stop offset="85%" stopColor="#101010" stopOpacity="1" />
                <Stop offset="100%" stopColor="#000000" stopOpacity="1" />
              </RadialGradient>
            </Defs>
            <Circle cx="150" cy="150" r="150" fill="url(#grad)" />
          </Svg>
          <View style={styles.textContainer}>
            <Text style={styles.title}>INJOY</Text>
          </View>
        </View>
      </View>

      <View style={styles.containerSubtitle}>
        <View style={styles.lineSubtitle} />
        <Text style={styles.subtitle}>FROM MINCHUNP</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#000000',
    alignItems: 'center',
  },
  containerTitle: {
    alignItems: 'center',
    marginTop: heightScreen * 0.24,
  },
  svgContainer: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  svgBackground: {
    position: 'absolute',
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 300,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: globalColors.white,
    letterSpacing: 8,
  },
  containerSubtitle: {
    alignItems: 'center',
    marginTop: heightScreen * 0.24,
  },
  lineSubtitle: {
    width: 80,
    height: 3,
    borderRadius: 5,
    backgroundColor: globalColors.gray,
    marginBottom: 20,
  },
  subtitle: {
    letterSpacing: 1.5,
    color: globalColors.gray,
    fontSize: 15,
  },
});

export default AppSplashScreen;
