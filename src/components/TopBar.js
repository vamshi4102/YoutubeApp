import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Feather,Fontisto,Ionicons } from "@expo/vector-icons";
const TopBar = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1280px-YouTube_Logo_2017.svg.png",
        }}
      />
      <View style={styles.top_btn_row}>
        <TouchableOpacity style={styles.top_btn}>
          <Feather name="cast" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.top_btn}>
        <Fontisto name="bell" size={21} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.top_btn}>
        <Ionicons name="search-sharp" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 5,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  logo: {
    height: 45,
    width: 120,
    resizeMode: "contain",
  },
  top_btn_row:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
top_btn:{
    marginHorizontal:8
},
});
