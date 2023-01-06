import React from "react";
import { View, StyleSheet } from "react-native";

import colors from "../config/colors";

function ListItemDeleteAction(props) {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    width: 70,
  },
});

export default ListItemDeleteAction;
