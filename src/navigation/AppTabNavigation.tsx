import { TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import DashboardScreen from "../screens/DashboardScreen";
import ProjectsScreen from "../screens/ProjectsScreen";
import SkillsScreen from "../screens/SkillsScreen";
import SettingsScreen from "../screens/SettingsScreen";

const Tab = createBottomTabNavigator();

const AppTabNavigation = () => {
  return (
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
      <Tab.Screen
        name="Projects"
        component={ProjectsScreen}
        options={({navigation}) => ({
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("AddProject")}
              style={{marginRight: 15}}
            >
              <Ionicons name="add-circle-outline" size={24} color="black"/>
            </TouchableOpacity>
          ),
        })}
      />
      <Tab.Screen
        name="Skills"
        component={SkillsScreen}
        options={({navigation}) => ({
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("AddSkill")}
              style={{marginRight: 15}}
            >
              <Ionicons name="add-circle-outline" size={24} color="black"/>
            </TouchableOpacity>
          ),
        })}
      />
      <Tab.Screen name="Settings" component={SettingsScreen}/>
    </Tab.Navigator>
  );
};

export default AppTabNavigation;
