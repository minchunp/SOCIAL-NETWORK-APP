import { globalColors } from '@/constants/global/COLORS';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { heightScreen } from '@/constants/global/constant';

const AppSplashScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <LinearGradient
          colors={['#404040', '#202020', '#000000']}
          style={styles.bgTitle}
          start={{ x: 0.5, y: 0.5 }}
          end={{ x: 1, y: 1 }}
        >
          <Text style={styles.title}>INJOY</Text>
        </LinearGradient>
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
    alignItems: 'center',
    marginTop: heightScreen * 0.25,
  },
  bgTitle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 230,
    height: 230,
    borderRadius: 200,
  },
  title: {
    fontSize: 45,
    fontWeight: 'bold',
    color: globalColors.white,
    letterSpacing: 8,
  },
  containerSubtitle: {
    alignItems: 'center',
    marginTop: heightScreen * 0.25,
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
