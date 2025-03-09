import { FlatList, StyleSheet, useWindowDimensions, View } from "react-native";

import ProjectItem from "./ProjectItem";
import Project from "../../models/Project";

interface ProjectListProps {
  projects: Project[];
}

const ProjectList = ({projects}: ProjectListProps) => {
  const window = useWindowDimensions();

  const numColumns = window.width > 600 ? 2 : 1;

  return (
    <FlatList
      style={styles.container}
      data={projects}
      renderItem={({item}) => (
        <ProjectItem project={item}/>
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

export default ProjectList;
