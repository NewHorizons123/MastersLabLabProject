const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Landing from "./screens/Landing";
import BannerCenter from "./screens/BannerCenter";
import BannerRight from "./screens/BannerRight";
import Chat from "./screens/Chat";
import Navigation1 from "./screens/Navigation1";
import Notification1 from "./screens/Notification1";
import LandingDark from "./screens/LandingDark";
import BannerCenterDark from "./screens/BannerCenterDark";
import BannerRightDark from "./screens/BannerRightDark";
import ChatDark from "./screens/ChatDark";
import NavigationDark from "./screens/NavigationDark";
import NotificationDark from "./screens/NotificationDark";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Landing"
              component={Landing}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BannerCenter"
              component={BannerCenter}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BannerRight"
              component={BannerRight}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Chat"
              component={Chat}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Navigation"
              component={Navigation1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Notification"
              component={Notification1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LandingDark"
              component={LandingDark}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BannerCenterDark"
              component={BannerCenterDark}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BannerRightDark"
              component={BannerRightDark}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChatDark"
              component={ChatDark}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NavigationDark"
              component={NavigationDark}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NotificationDark"
              component={NotificationDark}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
