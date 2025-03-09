import { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";

import Project from "../models/Project";
import ProjectList from "../components/project/ProjectList";

const ProjectsScreen = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  const API_URL = process.env.EXPO_PUBLIC_BASE_API_URL + "/projects";

  const fetchData = async () => {
    try {
      const response = await fetch(API_URL);
      const json = await response.json();
      return json.map((item: Project) => ({
        ...item
      }));
    } catch (error) {
      console.error(error);
      Alert.alert("Failed to fetch data");
      return [];
    }
  }

  useEffect(() => {
    (async () => {
      try {
        setProjects(await fetchData());
      } catch (error: any) {
        Alert.alert(error.message);
      }
    })();
  }, []);

  return (
    <ProjectList projects={projects}/>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ProjectsScreen;
