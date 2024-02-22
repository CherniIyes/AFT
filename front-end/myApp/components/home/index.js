import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from '@react-navigation/native';

const Home = () => {
      const navigation = useNavigation();

      const goToNextScreen = () => {
            navigation.navigate('Next');
      }

      return (
            <View>
                  <Text>ya amine ya  haaaaaa oooo</Text>
                  <Text>hethi il application mte3ii ooooooo</Text>
                  <Image
                        source={{ uri: 'https://steamuserimages-a.akamaihd.net/ugc/869617511822359307/7E339C122FE390EB0D2A41FA9BE803B3E9F218CF/?imw=1024&imh=576&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true' }}
                        style={{ width: 400, height: 350 }}
                  />
                  <TouchableOpacity onPress={goToNextScreen}>
                        <Text>Go to Next Screen</Text>
                  </TouchableOpacity>
            </View>
      );
}

export default Home;