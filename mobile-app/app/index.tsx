import { Text, View } from "react-native";
import MyButton from "@/components/mycustom/atom/Button";
import React from "react";


export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text>🥰This is Aether, the simple form filling app.</Text>
      <MyButton />
    </View>
  );
}
