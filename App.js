import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import AppNavigator from './app/navigation/AppNavigator'
import AuthNavigator from './app/navigation/AuthNavigator'
import NavigationTheme from './app/navigation/NavigationTheme'

export default function App() {
  return (
    <NavigationContainer theme={NavigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  )
}
