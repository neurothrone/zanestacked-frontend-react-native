import { useLayoutEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const AddSkillScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => null,
      headerRight: () => {
        return (
          <TouchableOpacity
            style={{marginRight: 10}}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="add-circle-outline" size={24} color="black"/>
          </TouchableOpacity>
        );
      },
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text>Add Skill</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AddSkillScreen;
