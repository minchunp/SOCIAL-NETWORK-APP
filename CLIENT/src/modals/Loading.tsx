import { Modal, StyleSheet, Text, View } from 'react-native';
import LottieView from 'lottie-react-native';
import { globalColors } from '@/constants/global/COLORS';

const iconLoading = require('@/assets/animations/loading.json');

interface LoadingModalProps {
  visible?: boolean;
  message?: string;
}

const LoadingModal = (props: LoadingModalProps) => {
  const { visible, message } = props;

  return (
    <Modal visible={visible} statusBarTranslucent transparent>
      <View style={styles.mainContainer}>
        <LottieView
          source={iconLoading}
          autoPlay
          loop
          style={styles.iconLoading}
        />
        <Text style={styles.loadingMessage}>{message || 'Loading...'}</Text>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.9)',
  },
  iconLoading: {
    width: 170,
    height: 170,
    marginBottom: 20,
  },
  loadingMessage: {
    color: globalColors.white,
    fontSize: 15,
  },
});

export default LoadingModal;
