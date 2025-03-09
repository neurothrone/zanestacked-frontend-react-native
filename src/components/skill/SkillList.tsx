import { FlatList, StyleSheet, useWindowDimensions, View } from "react-native";

import SkillItem from "./SkillItem";
import Skill from "../../models/Skill";

interface SkillListProps {
  skills: Skill[];
}

const SkillList = ({skills}: SkillListProps) => {
  const window = useWindowDimensions();

  const numColumns = window.width > 600 ? 2 : 1;

  return (
    <FlatList
      style={styles.container}
      data={skills}
      renderItem={({item}) => (
        <SkillItem skill={item}/>
      )}
      keyExtractor={item => item.id.toString()}
      numColumns={numColumns}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

const ItemSeparator = () => {
  return (
    <View style={styles.itemSeparator}/>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemSeparator: {
    backgroundColor: "black",
    height: 1,
  }
});

export default SkillList;
