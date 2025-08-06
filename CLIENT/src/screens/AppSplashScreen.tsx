import { globalColors } from '@/constants/global/COLORS';
import { BlurView } from 'expo-blur';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

const height = Dimensions.get('window').height;

const AppSplashScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <BlurView style={styles.bgTitle} intensity={500} tint="dark">
          <Text style={styles.title}>INJOY</Text>
        </BlurView>
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
    backgroundColor: globalColors.backgroundColor,
    alignItems: 'center',
  },
  containerTitle: {
    marginTop: height * 0.28,
  },
  bgTitle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 200,
    borderRadius: 99,
    overflow: 'hidden',
  },
  title: {
    fontSize: 45,
    fontWeight: 'bold',
    color: globalColors.white,
  },
  containerSubtitle: {
    alignItems: 'center',
    marginTop: height * 0.28,
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
    fontSize: 18,
  },
});

export default AppSplashScreen;
