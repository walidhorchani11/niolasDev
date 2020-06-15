import React from 'react';
import { Button, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const ImgPicker = (props) => {
  const pickImage = async () => {
    const permission = await ImagePicker.requestCameraPermissionsAsync();
    if (!permission.granted) {
      return;
    }

    const img = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!img.cancelled) {
      {
        props.navigateTo('ManageProduct', img.uri);
      }
    }
  };

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Camera" onPress={pickImage} />
    </View>
  );
};

export default ImgPicker;
