---
title: 'You have got a notification - Basics of Expo-notifications'
date: '2021-09-08'
slug: '/expo-notifications'
featuredImage: ../../images/a1-expo-notifications-featured-image.png
image: a1-expo-notifications-featured-image.png
tags:
  - JavaScript
  - Push Notifications
  - Expo-notifications
  - React Native
---

Push notifications are currently an widely used functionality in mobile applications. They provide an easy way to establish communication with the users. I've recently started a journey to learn mobile development with React Native and developed an application that needed push notifications. In this post, I'll overview the basic implementation of push notifications using _Expo-notification package_, as well as some caveats that I had to overcome during the development.

Expo is a software development kit (SDK) that wraps a React Native application, simplifies the development environment setup and provides several utilities On eof this utilities is the Expo-notification package, which makes easier the implementation of push notifications. This package provides push notification tokens, and the ability to display, schedule, receive, interact and respond to notifications. Expo-notification package allows the implementation of 2 types of notification:

- **local notifications**: notifications triggered by the app installed in a device and exclusively displayed in that device, they are never sent to other devices. This notification type is useful for remind notifications, for example.

- **push notifications**: notifications remotely sent to the users; they are received by the app, triggering a local notification that is displayed to the user. These notifications are useful for in chat or banking applications, for example.

To send a push notification, you should send a POST request with a valid Expo push Token and the message to the Expo push notification service. Then, this service sends the notifications to Firebase Cloud Message (FCM) and Apple Push Notification Service (APNS), in case of android or ios operative systems, respectively, which send the message to the recipient devices. Be aware that expo-notifications does not work on emulators, so you should tested on real devices. You can use Expo Go to test your under development pp in your device.
<br/><br/>
For code implementations, there are three steps to consider:

- Get Expo push token
- Send notifications
- Receive and manage notifications

### Get Expo push token

Expo push token is an unique identifier of a certain device, allowing push servers to recognize it. Here is the code to get it:

```js
import * as Notifications from 'expo-notifications'

const registerForPushNotificationsAsync = async () => {
  try {
    const { status: existingStatus } = await Notifications.getPermissionsAsync()
    let finalStatus = existingStatus
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync()
      finalStatus = status
    }
    if (finalStatus !== 'granted') {
      throw new Error('Permission not granted!')
    }
    const token = (await Notifications.getExpoPushTokenAsync()).data
    return token
  } catch (error) {
    console.error(error)
  }
}
```
<br/>
Note that the code checks/asks for notifications permissions. This step is required for ios devices.
<br/><br/>

### Send a notification

There are 3 ways to send push notifications with expo:

#### Using Expo's push notifications tool

This tool is very useful for testing purposes. To use it, go to [Expo's push notifications tool](https://expo.dev/notifications), add the Expo push token from your app, fulfil the message fields and send the notification.

#### Sending a POST request to ```https://exp.host/--/api/v2/push/send```

This POST request takes message content in request body. It can be sent from the app or from a server, using the fetch API or axios, for example.

```js
fetch('https://exp.host/--/api/v2/push/send', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Accept-Encoding': 'gzip, deflate',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    to: 'expo-push-token',
    data: { extraData: 'Some data' },
    title: 'Sent via the app',
    body: 'This push notification was sent by to app!',
  }),
})
```
<br/>

#### From a backend server

Expo provides libraries that support sending push notifications for several programming languages. Here is an example using expo-server-sdk for Node.js:

```js
const { Expo } = require('expo-server-sdk')
const expo = new Expo()

const sendPushNotification = async expoPushToken => {
  // Check that all your push tokens appear to be valid Expo push tokens
  if (!Expo.isExpoPushToken('expo-push-token')) {
    console.error(`expo-push-token is not a valid Expo push token`)
  }
  const messages = []
  const message = {
    to: 'expo-push-token',
    data: { extraData: 'Some data' },
    title: 'Sent by backend server',
    body: 'This push notification was sent by a backend server!',
  }
  messages.push(message)
  const chunks = expo.chunkPushNotifications(messages)
  const tickets = []

  try {
    (async () => {
      for (const chunk of chunks) {
        try {
          const ticketChunk = await expo.sendPushNotificationsAsync(chunk)
          tickets.push(...ticketChunk)
        } catch (error) {
          console.error(error)
        }
      }
    })()
  } catch (error) {
    console.error(error)
  }
}
```
<br/>

### Manage received notifications

Expo-notifications allows to receive notifications when the app is in the foreground, background and killed. Be aware that you must define to receive notifications, when the app is in the foreground, as shown in the code below.
This package also allows to listen and run some code when a notification is received when the app is in the foreground and background, but not when the app is killed. **addNotificationReceivedListener** is useful to listen notifications received when the app is in the foreground, whereas **TaskManager** (imported from expo-task-manager) is useful to listen notifications received when the app is in the background. Here is an implementation example:

```js
import * as Notifications from 'expo-notifications'
import * as TaskManager from 'expo-task-manager'
const BACKGROUND_NOTIFICATION_TASK = 'BACKGROUND-NOTIFICATION-TASK'

// defines how device should handle a notification when the app is running (foreground notifications)
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: true,
  }),
})

const handleNewNotification = async notificationObject => {
  try {
    const newNotification = {
      id: notificationObject.messageId,
      date: notificationObject.sentTime,
      title: notificationObject.data.title,
      body: notificationObject.data.message,
      data: JSON.parse(notificationObject.data.body),
    }
    // add the code to do what you need with the received notification  and, e.g., set badge number on app icon
    console.log(newNotification)
    await Notifications.setBadgeCountAsync(1)
  } catch (error) {
    console.error(error)
  }
}

TaskManager.defineTask(
  BACKGROUND_NOTIFICATION_TASK,
  ({ data, error, executionInfo }) => handleNewNotification(data.notification)
)

useEffect(() => {
  // register task to run whenever is received while the app is in the background
  Notifications.registerTaskAsync(BACKGROUND_NOTIFICATION_TASK)

  // listener triggered whenever a notification is received while the app is in the foreground
  const foregroundReceivedNotificationSubscription = Notifications.addNotificationReceivedListener(
    notification => {
      handleNewNotification(notification.request.trigger.remoteMessage)
    }
  )

  return () => {
    // cleanup the listener and task registry
    foregroundReceivedNotificationSubscription.remove()
    Notifications.unregisterTaskAsync(BACKGROUND_NOTIFICATION_TASK)
  }
}, [])
```
<br/>

#### Manage user interaction with the notification

You can also implement some code run whenever a user interacts with/taps the received notification. The code below shows two different implementation approaches:

```js
import * as Notifications from 'expo-notifications'

const Home = () => {
  // 1) using addNotificationResponseReceivedListener, which is triggered whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed
  useEffect(() => {
    const notificationInteractionSubscription = Notifications.addNotificationResponseReceivedListener(
      response => {
        // add the code to do what you need with the notification e.g. navigate to a specific screen
        handleNewNotification(response.notification, () =>
          navigation.navigate('NotificationList')
        )
      }
    )

    return () => {
      notificationInteractionSubscription.remove()
    }

    // 2) using useLastNotificationResponse
    const lastNotificationResponse = Notifications.useLastNotificationResponse()
    if (lastNotificationResponse) {
      add the code to do what you need with the notification e.g. navigate to a specific screen
      handleNewNotification(
        lastNotificationResponse.notification.request.trigger.remoteMessage,
        () => navigation.navigate('Notifications')
      )
    }
  }, [lastNotificationResponse])
}
```
<br/>

I tested both approaches but used the second one because **lastNotificationResponse** returns the last notification the user interacted with. This overcomes the fact that addNotificationResponseReceivedListener in useEffect hook is called too late when app is launching (i.e. when the user interacted with a notifications received when the app was killed), leading to the "loss" of interaction listening in these cases.

### Some points to pay attention

Here are some issues that I noticed and/or had to handle using Expo-notifications. If you also and managed them in a different way, please share with us.

- Every time the app is installed, the device may get a new push token, which can lead to incorrect tokens saved in databases, for example. To ensure that the database always stores the correct token, considering that my app needs user authentication, I decided to store the push token in the database every time the user signs in, and delete it from every time the user signs out. This approach also prevents notifications reception when the user is not authenticated.

- To receive the notification in the block screen, for android, it is important to set **priority: "high"** in the message object, otherwise the device wil not be "awaked" when a notification is received. Check also the device settings (Settings -> Notifications -> _your-app-name_), to ensure that all the permissions you need are given.

- For android standalone apps, you must configure Firebase Cloud Messaging, as described [here](https://docs.expo.dev/push-notifications/using-fcm/).

- Currently, there is no way to react to a notification reception when the app is killed. For this reason, I was not able to add these notifications to the Notifications screen or increment the badge counter when there notifications are received

- To navigate to a specific screen when a notification is pressed, I had to implement the listeners code in Home screen, in order to be able to use screen navigation provided by @react-navigation.

- For android device, you can customize notification color and icon. The 96x96 icon should be white with transparent background. Be aware that, if you are using Expo Go, the custom icon and androidCollapsedTitle will not be displayed in develop mode, but they will work as expected in the standalone app. Here is an example of a configuration to customize the notifications, in `app.json`.

```json
{
  "expo": {
    ...
    "plugins": [
      [
        "expo-notifications",
        {
          "icon": "../assets/notification-icon.png",
          "color": "#CA2C92",
          "sounds": [],
          "androidMode": "default",
          "androidCollapsedTitle": "your-app-name",
          "iosDisplayInForeground": true
        }
      ]
    ],
  }
}
```
<br/>

And that's all I had to share. If you want to see the implementation of push notification in the app I developed, you can check it [here](https://github.com/marianapatcosta/notify-me-solinca).

Hope to "see" you in my next post <img src="https://user-images.githubusercontent.com/1303154/88677602-1635ba80-d120-11ea-84d8-d263ba5fc3c0.gif" width="16px" alt="hello">. 