import { StyleSheet, Text, View } from "react-native";
import Skill from "../../models/Skill";

interface SkillItemProps {
  skill: Skill;
}

const SkillItem = ({skill}: SkillItemProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.rowHeader}>
        <Text style={styles.textHeader}>{skill.name}</Text>
        <Text style={styles.textHeader}>{skill.yearsOfExperience} yrs</Text>
      </View>
      <Text style={styles.text}>{skill.proficiency}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    padding: 10,
  },
  rowHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
    fontSize: 20,
  },
  textHeader: {
    fontSize: 20,
    fontWeight: "500",
  },
  text: {
    fontSize: 16,
    color: "#222",
    marginTop: 5,
  }
});

export default SkillItem;
