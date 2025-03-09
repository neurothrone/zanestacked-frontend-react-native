import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import DashboardScreen from "../screens/DashboardScreen";
import ProjectsScreen from "../screens/ProjectsScreen";
import SkillsScreen from "../screens/SkillsScreen";
import SettingsScreen from "../screens/SettingsScreen";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Dashboard"
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName: keyof typeof Ionicons.glyphMap;

            switch (route.name) {
              case "Dashboard":
                iconName = focused ? "home" : "home-outline";
                break;
              case "Projects":
                iconName = focused ? "briefcase" : "briefcase-outline";
                break;
              case "Skills":
                iconName = focused ? "school" : "school-outline";
                break;
              case "Settings":
                iconName = focused ? "settings" : "settings-outline";
                break;
              default:
                iconName = "help-circle-outline";
            }

            return <Ionicons name={iconName} size={size} color={color}/>;
          },
          animation: "shift",
          tabBarActiveTintColor: "#007AFF",
          tabBarInactiveTintColor: "gray",
          // tabBarStyle: {backgroundColor: "#fff"},
        })}
      >
        <Tab.Screen name="Dashboard" component={DashboardScreen}/>
        <Tab.Screen name="Projects" component={ProjectsScreen}/>
        <Tab.Screen name="Skills" component={SkillsScreen}/>
        <Tab.Screen name="Settings" component={SettingsScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigation;
