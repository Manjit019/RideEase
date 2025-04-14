import {ExpoConfig,ConfigContext} from '@expo/config'
import 'dotenv/config'

export default ({config} : ConfigContext): ExpoConfig => ({
    ...config,
    "name": "RideEase",
    "slug": "RideEase",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./src/assets/images/icon.jpg",
    "scheme": "myapp",
    "newArchEnabled": true,

    "userInterfaceStyle": "automatic",
    "splash": {
      "image": "./src/assets/images/splash.png",
      "resizeMode": "contain"
    },
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": "com.manjit.ride.ease",
      "config": {
                "googleMapsApiKey":  process.env.EXPO_PUBLIC_MAP_API_KEY
            }
    },
    "android": {
      "config": {
                "googleMaps": {
                    "apiKey": process.env.EXPO_PUBLIC_MAP_API_KEY
                }
            },
      "adaptiveIcon": {
        "foregroundImage": "./src/assets/images/adaptive-icon.jpg",
        "backgroundColor": "#FF9001"
      },
      "package": "com.manjit.ride.ease"
    },
    "web": {
      "bundler": "metro",
      "output": "static",
      "favicon": "./src/assets/images/favicon.png"
    },
    "plugins": [
      "expo-router",
      [
        "expo-location",
        {
          "locationAlwaysAndWhenInUsePermission": "Allow $(PRODUCT_NAME) to use your location."
        },
      ]
    ],
    "experiments": {
      "typedRoutes": true
    }
})