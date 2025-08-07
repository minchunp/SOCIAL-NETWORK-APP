import React from 'react';
import { View, StyleSheet } from 'react-native';
import Animated, {
  useAnimatedStyle,
  interpolate,
  Extrapolate,
  SharedValue,
  withSpring,
  withTiming,
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
        [0.6, 1.4, 0.6],
        Extrapolate.CLAMP
      );

      const width = interpolate(
        scrollX.value,
        inputRange,
        [8, 35, 8],
        Extrapolate.CLAMP
      );

      // Add rotation effect
      const rotation = interpolate(
        scrollX.value,
        inputRange,
        [-10, 0, 10],
        Extrapolate.CLAMP
      );

      return {
        opacity: withTiming(opacity, { duration: 300 }),
        transform: [
          { scale: withSpring(scale, { damping: 12, stiffness: 120 }) },
          { rotate: `${withSpring(rotation, { damping: 10 })}deg` },
        ],
        width: withSpring(width, { damping: 15, stiffness: 100 }),
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
    borderRadius: 6,
    marginHorizontal: 6,
    backgroundColor: globalColors.gray,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default PaginationDots;
