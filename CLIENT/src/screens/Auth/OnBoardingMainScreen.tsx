import React, { useRef, useState } from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  runOnJS,
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

  const renderItem = ({ item, index }: { item: any; index: number }) => {
    const Component = item.component;
    return (
      <View style={{ width: screenWidth }}>
        <Component
          navigation={navigation}
          currentIndex={index}
          scrollX={scrollX}
          screenWidth={screenWidth}
        />
      </View>
    );
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
