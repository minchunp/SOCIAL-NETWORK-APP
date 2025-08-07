import AppSplashScreen from '@/screens/AppSplashScreen';
import { RootState } from '@/store';
import { Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import AppStack from './AppStack';
import AuthStack from './AuthStack';

const SECONDS_TO_SHOW_SPLASH_SCREEN = 3500;

const MainNavigation = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const [isShowAppSplashScreen, setIsShowAppSplashScreen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShowAppSplashScreen(false);
    }, SECONDS_TO_SHOW_SPLASH_SCREEN);

    return () => clearTimeout(timer);
  }, []);

  const renderMainContent = () => {
    return isAuthenticated ? <AppStack /> : <AuthStack />;
  };

  return (
    <Fragment>
      {isShowAppSplashScreen ? <AppSplashScreen /> : renderMainContent()}
    </Fragment>
  );
};

export default MainNavigation;
