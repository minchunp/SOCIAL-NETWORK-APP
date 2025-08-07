import React, { useRef, useState } from 'react';
import { FlatList, StyleSheet, Dimensions, Animated, View } from 'react-native';
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
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const onBoardingData = [
    { id: '1', component: OnBoardingScreenOne },
    { id: '2', component: OnBoardingScreenTwo },
    { id: '3', component: OnBoardingScreenThree },
  ];

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

  const onScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    {
      useNativeDriver: false,
      listener: (event: any) => {
        const offsetX = event.nativeEvent.contentOffset.x;
        const index = Math.round(offsetX / screenWidth);
        setCurrentIndex(index);
      },
    }
  );

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={onBoardingData}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        onScroll={onScroll}
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
