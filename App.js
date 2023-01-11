import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native'

import CategoryProvider from "./src/context/CategoryContext/Provider";
import NewsProvider from "./src/context/NewsContext/Provider";

import InfoScreen from "./src/screens/InfoScreen/InfoScreen";
import WelcomeScreen from "./src/screens/WelcomeScreen/WelcomeScreen";
import NewsScreen from "./src/screens/NewsScreen/NewsScreen";

import { Ionicons } from "@expo/vector-icons";
import { colorGreyDark1, colorGreyLight4, colorPrimary } from "./assets/base";


export default function App() {
  const Tab = createBottomTabNavigator()
  const Stack = createStackNavigator()

  const BottomTabs = () => {
    return (
      <Tab.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: colorGreyDark1
          }
        }}
      >
        <Tab.Screen
          name='Settings'
          component={WelcomeScreen}
          options={{
            tabBarIcon: ({ focused }) => <Ionicons name="options" size={30} color={focused ? colorPrimary : colorGreyLight4} />
          }}
        />
        <Tab.Screen
          name='News'
          component={NewsScreen}
          screenOptions={{
            headerShown: false
          }}
          options={{
            tabBarIcon: ({ focused }) => <Ionicons name="book" size={30} color={focused ? colorPrimary : colorGreyLight4} />
          }}
        />

      </Tab.Navigator>
    )
  }
  return (
    <NewsProvider>
      <CategoryProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Info' component={InfoScreen} />
            <Stack.Screen name='Tabs' component={BottomTabs} />
          </Stack.Navigator>
        </NavigationContainer>
      </CategoryProvider>
    </NewsProvider>
  );
}