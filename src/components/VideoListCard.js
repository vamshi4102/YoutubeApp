import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
const VideoListCard = ({ video }) => {
  let viewsCount = video.views.toString();
  if (video.views > 1_000_000) {
    viewsCount = (video.views / 1_000_000).toFixed(1) + "M";
  } else if (video.views > 1_000) {
    viewsCount = (video.views / 1_000).toFixed(1) + "K";
  }

  return (
    <View style={styles.card}>
      <View>
        <Image
          source={{
            uri: video.thumbnail,
          }}
          style={styles.thumbnail}
        />
        <View style={styles.duration}>
          <Text style={styles.duration_text}>{video.duration}</Text>
        </View>
      </View>
      <View style={styles.bottom_info}>
        <Image
          style={styles.user_image}
          source={{
            uri: video.user.image,
          }}
        />
        <View style={styles.text_info}>
          <Text style={styles.title} numberOfLines={2}>
            {video.title}
          </Text>
          <Text style={styles.video_info}>
            {viewsCount} {video.createdAt}
          </Text>
        </View>
        <Pressable style={styles.menu}>
          <Feather name="more-vertical" size={24} color="black" />
        </Pressable>
      </View>
    </View>
  );
};

export default VideoListCard;

const styles = StyleSheet.create({
  card: {
    padding: 5,
  },
  thumbnail: {
    width: "100%",
    aspectRatio: 16 / 9,
    borderRadius: 5,
  },
  duration: {
    backgroundColor: "rgba(0,0,0,0.8)",
    position: "absolute",
    bottom: 5,
    right: 5,
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 3,
  },
  duration_text: {
    color: "white",
    fontWeight: "bold",
  },
  bottom_info: {
    flexDirection: "row",
    marginTop: 10,
    marginHorizontal: 10,
  },
  user_image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  text_info: {
    flex: 1,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 16,
  },
  video_info: {
    color: "gray",
  },
  menu: {
    width: 45,
    height: 45,
    alignItems: "flex-end",
  },
});
