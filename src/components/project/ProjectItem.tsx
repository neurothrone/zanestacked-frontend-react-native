import { StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import Project from "../../models/Project";

interface ProjectItemProps {
  project: Project;
}

const ProjectItem = ({project}: ProjectItemProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <Text style={styles.projectName}>{project.name}</Text>
        <View style={styles.projectLinks}>
          {project.gitHubUrl !== "" && <FontAwesome style={styles.projectIcon} name="github" size={24} color="black"/>}
          {project.featuredImage !== "" &&
            <FontAwesome style={styles.projectIcon} name="image" size={24} color="black"/>}
          {project.demoUrl && project.demoUrl !== "" && <FontAwesome name="play-circle" size={24} color="black"/>}
          <FontAwesome name="play-circle" size={24} color="black"/>
        </View>
        <Text style={styles.projectDescription} numberOfLines={1} ellipsizeMode="tail">{project.description}</Text>
      </View>
      <View style={styles.badge}>
        <FontAwesome name="lightbulb-o" size={24} color="black"/>
        <Text style={styles.badgeText}>{project.skills.length}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  column: {
    flexDirection: "column",
    maxWidth: "85%",
  },
  projectName: {
    fontSize: 20,
    fontWeight: 500,
    marginBottom: 5,
  },
  projectLinks: {
    flexDirection: "row",
    alignItems: "center",
  },
  projectIcon: {
    marginRight: 10,
  },
  projectDescription: {
    fontSize: 16,
    color: "#222",
    marginTop: 5,
  },
  badge: {
    flexDirection: "row",
    backgroundColor: "lightgrey",
    borderRadius: 10,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    fontSize: 16,
    marginLeft: 5
  }
});

export default ProjectItem;
