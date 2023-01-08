import React from 'react'
import { Alert, Image, StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import * as ImagePicker from 'expo-image-picker'

import colors from '../config/colors'

function ImageInput({ imageUri, onChangeImage }) {
  const handlePress = () => {
    if (!imageUri) selectImage()
    else
      Alert.alert(
        'Delete',
        'Are you sure you want to delete the image?',
        { text: 'Yes', onPress: () => onChangeImage(null) },
        { text: 'No' }
      )
  }

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      })
      if (!result.cancelled) onChangeImage(result.uri)
    } catch (error) {
      console.log('Error')
    }
  }

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={{ width: 100, height: 100 }}>
        <View style={styles.container}>
          {!imageUri && <MaterialCommunityIcons color={colors.medium} name='camera' size={40} />}
          {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.light,
    borderRadius: 15,
    height: 100,
    justifyContent: 'center',
    overflow: 'hidden',
    widht: 100,
  },
  image: {
    width: '100%',
    height: '100%',
  },
})

export default ImageInput
