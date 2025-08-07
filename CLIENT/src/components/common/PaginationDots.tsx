import React from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { globalColors } from '@/constants/global/COLORS';

interface PaginationDotsProps {
  currentIndex: number;
  totalScreens: number;
  scrollX: Animated.Value;
  screenWidth: number;
}

const PaginationDots = (props: PaginationDotsProps) => {
  const { currentIndex = 0, totalScreens = 3, scrollX, screenWidth } = props;

  return (
    <View style={styles.paginationContainer}>
      {Array.from({ length: totalScreens }).map((_, index) => {
        const inputRange = [
          (index - 1) * screenWidth,
          index * screenWidth,
          (index + 1) * screenWidth,
        ];

        const opacity = scrollX?.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: 'clamp',
        });

        const scale = scrollX?.interpolate({
          inputRange,
          outputRange: [0.8, 1.3, 0.8],
          extrapolate: 'clamp',
        });

        const width = scrollX?.interpolate({
          inputRange,
          outputRange: [8, 24, 8],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View
            key={index}
            style={[
              styles.dot,
              {
                opacity: scrollX ? opacity : index === currentIndex ? 1 : 0.3,
                transform: scrollX
                  ? [{ scale }]
                  : [{ scale: index === currentIndex ? 1.3 : 0.8 }],
                width: scrollX ? width : index === currentIndex ? 24 : 8,
                backgroundColor:
                  index === currentIndex
                    ? globalColors.primary
                    : globalColors.gray,
              },
            ]}
          />
        );
      })}
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
