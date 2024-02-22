import { View, Text, Image, ScrollView, SafeAreaView } from "react-native";
import React from "react";
import { useState } from "react";

const Next = () => {
      return (
            <View>
                  <Image
                        source={{ uri: 'https://steamuserimages-a.akamaihd.net/ugc/869617511822359307/7E339C122FE390EB0D2A41FA9BE803B3E9F218CF/?imw=1024&imh=576&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true' }}
                        style={{ width: 400, height: 350 }}
                  />
            </View>
      );
}

export default Next;