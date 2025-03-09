import { createStackNavigator } from "@react-navigation/stack";

import AppTabNavigation from "./AppTabNavigation";
import AddProjectScreen from "../screens/AddProjectScreen";
import AddSkillScreen from "../screens/AddSkillScreen";

const RootStack = createStackNavigator();

const RootStackNavigator = () => {
  return (
    <RootStack.Navigator>
      {/* Tabs for the Main app*/}
      <RootStack.Screen
        name="AppTabs"
        component={AppTabNavigation}
        options={{headerShown: false}} // Hide main stack header
      />

      {/* Modals */}
      <RootStack.Screen
        name="AddProject"
        component={AddProjectScreen}
        options={{
          presentation: "modal",
          title: "Add Project",
        }}
      />
      <RootStack.Screen
        name="AddSkill"
        component={AddSkillScreen}
        options={{
          presentation: "modal",
          title: "Add Skill",
        }}
      />
    </RootStack.Navigator>
  );
};

export default RootStackNavigator;
