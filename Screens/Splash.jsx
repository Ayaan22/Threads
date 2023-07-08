import { View, Text, Image } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const Splash = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#EEEE" }}>
      <StatusBar />
      <Image source={require("../assets/Pattern.png")} />

      <View
        style={{
          flex: 0.5,
          backgroundColor: "white",
          marginTop: 20,
          marginHorizontal: 30,
          borderRadius: 20,
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          paddingHorizontal: 20,
        }}
      >
        {/* Children 1 */}
        <View>
          <Text style={{ color: "grey", fontWeight: "600" }}>
            Log in with Instagram
          </Text>

          <View style={{ flexDirection: "row", gap: 3, alignItems: "center" }}>
            <Text style={{ color: "black", fontWeight: "bold", fontSize: 15 }}>
              codesofayaan
            </Text>
            <MaterialIcons name="verified" size={16} color="#1DA1F2" />
          </View>
        </View>
        {/* Children 1 */}

        {/* Children 2 */}
        <AntDesign name="instagram" size={30} color="red" />
        {/* Children 2 */}
      </View>

      <Text
        style={{
          textAlign: "center",
          flex: 0.3,
          textAlignVertical: "center",
          color: "grey",
          fontWeight:'bold'
        }}
      >
        Switch Accounts
      </Text>
    </View>
  );
};

export default Splash;
