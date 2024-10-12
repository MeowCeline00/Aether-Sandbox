import { Text, View, TouchableOpacity, Image } from "react-native";
import MyButton from "@/components/mycustom/atom/Button";
import React from "react";

export default function Index() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "white" }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between", backgroundColor: "gray" }}>
        <TouchableOpacity>
          <Image
            source={require('@/images/alice001.png')}
            style={{
              width: 100,
              height: 100,
              borderRadius: 20,
            }}
          />
        </TouchableOpacity>
      </View>
      <Text>🥰This is Aether, the simple form filling app.</Text>
      <MyButton />
    </View>
  );
}
