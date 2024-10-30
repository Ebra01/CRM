// src/utils/NotificationHandler.js
import * as Notifications from 'expo-notifications';

export const schedulePushNotification = async (customerName) => {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Reminder",
      body: `It's time to contact ${customerName}!`,
    },
    trigger: { seconds: 60 },
  });
};

export const registerForPushNotificationsAsync = async () => {
  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;

  if (existingStatus !== 'granted') {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }

  if (finalStatus !== 'granted') {
    alert('Failed to get push token for push notification!');
    return;
  }

  const token = (await Notifications.getExpoPushTokenAsync({projectId: 'b5ff138c-d20d-49b2-897f-766cfe09d764'})).data;
  console.log(token);
  return token;
};

export const setupNotificationHandler = async () => {
  await Notifications.setNotificationHandler({
    handleNotification: {
      timeInterval: 'default',
      priority: 'high',
    },
  });
};
