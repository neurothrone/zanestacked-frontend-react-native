import { useEffect, useState } from "react";
import { Alert, StyleSheet } from "react-native";

import SkillList from "../components/skill/SkillList";
import Skill from "../models/Skill";

const SkillsScreen = () => {
  const [skills, setSkills] = useState<Skill[]>([]);

  const API_URL = process.env.EXPO_PUBLIC_BASE_API_URL + "/skills";

  const fetchData = async () => {
    try {
      const response = await fetch(API_URL);
      const json = await response.json();
      return json.map((item: Skill) => ({
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
        setSkills(await fetchData());
      } catch (error: any) {
        Alert.alert(error.message);
      }
    })();
  }, []);

  return (
    <SkillList skills={skills}/>
  );
};

export default SkillsScreen;
