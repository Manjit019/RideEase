import React from "react";
import { Stack } from "expo-router";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";
import { WSProvider } from "@/service/WSProvider";
import { StatusBar } from "react-native";
import { Colors } from "@/utils/Constants";
import NoInternet from "@/components/shared/NoInternet";

const Layout = () => {
  return (
    <WSProvider>
      
      <NoInternet />

      <Stack
        screenOptions={{
          headerShown: false,
          animation: "default",
        }}
        initialRouteName="index"
      >
        <Stack.Screen name="index" options={{animation : "fade"}} />
        <Stack.Screen name="role" />
        <Stack.Screen name="customer/home" />
        <Stack.Screen name="customer/auth" />
        <Stack.Screen name="customer/liveride" />
        <Stack.Screen name="customer/ridebooking" />
        <Stack.Screen name="customer/selectLocation" />
        <Stack.Screen name="rider/auth" />
        <Stack.Screen name="rider/home" />
        <Stack.Screen name="rider/liveride" />
        <Stack.Screen name="notifications"/>
      </Stack>
    </WSProvider>
  );
};

export default gestureHandlerRootHOC(Layout);
