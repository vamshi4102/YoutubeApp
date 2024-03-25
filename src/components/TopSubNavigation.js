import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { TopSubNavigations } from "../assets/data/ToSubNavigation";
import { Ionicons } from "@expo/vector-icons";
const TopSubNavigation = () => {
  const [ActiveButton, setActiveButton] = useState(0);
  return (
    <View style={styles.sub_btns_row}>
      <FlatList
        data={TopSubNavigations}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.btn,
              {
                backgroundColor: item.id === ActiveButton ? "#333" : "#f3f3f3",
              },
            ]}
            onPress={() => setActiveButton(item.id)}
          >
            <Text
              style={[
                styles.btn_text,
                { color: item.id === ActiveButton ? "white" : "#333" },
              ]}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
        ListHeaderComponent={() => (
          <TouchableOpacity style={[styles.btn, { marginRight: 20 }]}>
            <Ionicons name="compass-outline" size={24} color="black" />
          </TouchableOpacity>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default TopSubNavigation;

const styles = StyleSheet.create({
  sub_btns_row: {
    width: "100%",
    padding: 5,
    marginTop: 0,
  },
  btn: {
    backgroundColor: "#f3f3f3",
    height: 35,
    paddingHorizontal: 15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginRight: 12,
  },
  btn_text: {
    color: "#333",
    fontWeight: "600",
  },
});
