import LoadingModal from '@/modals/Loading';
import MainNavigation from '@/navigation';
import { persistor, store } from '@/store';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

const STALE_TIME = 5 * 60 * 1000;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      staleTime: STALE_TIME,
    },
  },
});

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate
        loading={<LoadingModal visible={true} />}
        persistor={persistor}
      >
        <QueryClientProvider client={queryClient}>
          <SafeAreaProvider>
            <StatusBar
              style="light"
              translucent
              backgroundColor="transparent"
            />
            <NavigationContainer>
              <MainNavigation />
            </NavigationContainer>
          </SafeAreaProvider>
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
