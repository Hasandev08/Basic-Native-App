import { useEffect, useState } from 'react'
import { Button, Image } from 'react-native'
import * as ImagePicker from 'expo-image-picker'

import ImageInput from './app/components/ImageInput'
import Screen from './app/components/Screen'

export default function App() {
  const [imageUri, setImageUri] = useState()

  // const requestPermission = async () => {
  //   const { granted } = await ImagePicker.requestCameraPermissionsAsync()
  //   if (!granted) alert("You can't access the library")
  // }

  // useEffect(() => {
  //   requestPermission()
  // }, [])

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync()
      if (!result.cancelled) setImageUri(result.uri)
    } catch (error) {
      console.log('Error')
    }
  }

  return (
    <Screen>
      <Button title='Select Image' onPress={selectImage} />
      <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
      <ImageInput imageUri={imageUri} />
    </Screen>
  )
}
