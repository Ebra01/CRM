// App.js
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation';
import store from './src/store';
import { registerForPushNotificationsAsync, setupNotificationHandler } from './src/utils/NotificationHandler';

export default function App() {

  useEffect(() => {
    const initializeNotifications = async () => {
      await setupNotificationHandler();
      await registerForPushNotificationsAsync();
    };

    initializeNotifications();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  );
}
