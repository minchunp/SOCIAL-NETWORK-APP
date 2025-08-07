import React, { useRef, useState } from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  interpolate,
  Extrapolate,
  runOnJS,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import OnBoardingScreenOne from './OnBoardingScreenOne';
import OnBoardingScreenTwo from './OnBoardingScreenTwo';
import OnBoardingScreenThree from './OnBoardingScreenThree';
import PaginationDots from '@/components/common/PaginationDots';
import { NavigationProp } from '@react-navigation/native';

const { width: screenWidth } = Dimensions.get('window');

interface OnBoardingMainScreenProps {
  navigation: NavigationProp<any>;
}

const OnBoardingMainScreen: React.FC<OnBoardingMainScreenProps> = ({
  navigation,
}) => {
  const scrollX = useSharedValue(0);
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const onBoardingData = [
    { id: '1', component: OnBoardingScreenOne },
    { id: '2', component: OnBoardingScreenTwo },
    { id: '3', component: OnBoardingScreenThree },
  ];

  const updateCurrentIndex = (offsetX: number) => {
    const index = Math.round(offsetX / screenWidth);
    setCurrentIndex(index);
  };

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      scrollX.value = event.contentOffset.x;
      runOnJS(updateCurrentIndex)(event.contentOffset.x);
    },
  });

  // Create a separate component for animated items
  const AnimatedItem = ({ item, index }: { item: any; index: number }) => {
    const Component = item.component;

    const animatedStyle = useAnimatedStyle(() => {
      const inputRange = [
        (index - 1) * screenWidth,
        index * screenWidth,
        (index + 1) * screenWidth,
      ];

      // Parallax effect
      const translateX = interpolate(
        scrollX.value,
        inputRange,
        [-screenWidth * 0.1, 0, screenWidth * 0.1],
        Extrapolate.CLAMP
      );

      // Fade effect
      const opacity = interpolate(
        scrollX.value,
        inputRange,
        [0.7, 1, 0.7],
        Extrapolate.CLAMP
      );

      // Scale effect
      const scale = interpolate(
        scrollX.value,
        inputRange,
        [0.95, 1, 0.95],
        Extrapolate.CLAMP
      );

      return {
        transform: [{ translateX }, { scale }],
        opacity,
      };
    });

    return (
      <Animated.View style={[{ width: screenWidth }, animatedStyle]}>
        <Component
          navigation={navigation}
          currentIndex={index}
          scrollX={scrollX}
          screenWidth={screenWidth}
        />
      </Animated.View>
    );
  };

  const renderItem = ({ item, index }: { item: any; index: number }) => {
    return <AnimatedItem item={item} index={index} />;
  };

  return (
    <View style={styles.container}>
      <Animated.FlatList
        ref={flatListRef}
        data={onBoardingData}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        decelerationRate="fast"
        style={styles.flatList}
      />
      <PaginationDots
        currentIndex={currentIndex}
        totalScreens={3}
        scrollX={scrollX}
        screenWidth={screenWidth}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatList: {
    flex: 1,
  },
});

export default OnBoardingMainScreen;
