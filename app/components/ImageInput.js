import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../config/colors'

function ImageInput({ imageUri }) {
  return (
    <View style={{ width: 100, height: 100 }}>
      <View style={styles.container}>
        {!imageUri && <MaterialCommunityIcons color={colors.medium} name='camera' size={40} />}
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      </View>
    </View>
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
