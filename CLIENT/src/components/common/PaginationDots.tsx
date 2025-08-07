import React from 'react';
import { View, StyleSheet } from 'react-native';
import Animated, {
  useAnimatedStyle,
  interpolate,
  Extrapolate,
  SharedValue,
} from 'react-native-reanimated';
import { globalColors } from '@/constants/global/COLORS';

interface PaginationDotsProps {
  currentIndex: number;
  totalScreens: number;
  scrollX: SharedValue<number>;
  screenWidth: number;
}

const PaginationDots = (props: PaginationDotsProps) => {
  const { currentIndex = 0, totalScreens = 3, scrollX, screenWidth } = props;

  const AnimatedDot = ({ index }: { index: number }) => {
    const animatedStyle = useAnimatedStyle(() => {
      const inputRange = [
        (index - 1) * screenWidth,
        index * screenWidth,
        (index + 1) * screenWidth,
      ];

      const opacity = interpolate(
        scrollX.value,
        inputRange,
        [0.3, 1, 0.3],
        Extrapolate.CLAMP
      );

      const scale = interpolate(
        scrollX.value,
        inputRange,
        [0.8, 1.3, 0.8],
        Extrapolate.CLAMP
      );

      const width = interpolate(
        scrollX.value,
        inputRange,
        [30, 40, 30],
        Extrapolate.CLAMP
      );

      return {
        opacity,
        transform: [{ scale }],
        width,
        backgroundColor:
          index === currentIndex ? globalColors.primary : globalColors.gray,
      };
    });

    return <Animated.View style={[styles.dot, animatedStyle]} />;
  };

  return (
    <View style={styles.paginationContainer}>
      {Array.from({ length: totalScreens }).map((_, index) => (
        <AnimatedDot key={index} index={index} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  paginationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    position: 'absolute',
    bottom: 50,
    width: '100%',
  },
  dot: {
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
    backgroundColor: globalColors.gray,
  },
});

export default PaginationDots;
