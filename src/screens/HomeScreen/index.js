import { View, Text, SafeAreaView, FlatList } from "react-native";
import React from "react";
import TopBar from "../../components/TopBar";
import TopSubNavigation from "../../components/TopSubNavigation";
import VideoListCard from "../../components/VideoListCard";
import { VideosList } from "../../assets/data/VideosList";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <FlatList
        ListHeaderComponent={
          <>
            <TopBar />
            <TopSubNavigation />
          </>
        }
        data={VideosList}
        renderItem={({ item }) => <VideoListCard video={item} />}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
