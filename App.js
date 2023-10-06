import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";

// Screens
import Home from "./screens/Home";
import Designs from "./screens/Designs";
import Settings from "./screens/Settings";
import Service from "./screens/Service";
import HeaderIcon from "./components/HeaderIcon";
import Design from "./screens/Design";

const Tab = createBottomTabNavigator();

function AppTabs({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: "#ffffff",
        },
        headerTitleStyle: {
          fontFamily: "grotesk",
        },
        headerTintColor: "#020D4D",
        tabBarActiveBackgroundColor: "#020D4D",
        tabBarActiveTintColor: "#ffffff",
        tabBarInactiveTintColor: "#020D4D",
        tabBarStyle: {
          height: 56,
        },
        tabBarLabelStyle: {
          paddingBottom: 6,
          fontFamily: "inter",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: "The Rose Graphics",
          headerRight: () => <HeaderIcon navigation={navigation} />,
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Designs"
        component={Designs}
        options={{
          headerTitle: "Designs",
          headerRight: () => <HeaderIcon navigation={navigation} />,
          tabBarIcon: ({ color }) => (
            <AntDesign name="antdesign" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

export default function App({ navigation }) {
  const [fontsLoaded] = useFonts({
    inter: require("./assets/fonts/Inter-Regular.ttf"),
    grotesk: require("./assets/fonts/SpaceGrotesk-Bold.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }

    prepare();
  }, []);

  if (!fontsLoaded) {
    return undefined;
  } else {
    SplashScreen.hideAsync();
  }

  return (
    <NavigationContainer>
      {/* <StatusBar backgroundColor="#020D4D" style="light" /> */}
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: true,
          gestureDirection: "vertical",
          animation: "slide_from_bottom",
          headerTitleStyle: {
            fontFamily: "grotesk",
          },
          headerShadowVisible: false,
          headerTintColor: "#020D4D",
        }}
      >
        <Stack.Screen
          name="AppTabs"
          component={AppTabs}
          options={{
            headerShown: false,
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Designs" component={Designs} />
        <Stack.Screen
          name="Design"
          component={Design}
          options={{
            headerShown: false,
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name="Service"
          component={Service}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
