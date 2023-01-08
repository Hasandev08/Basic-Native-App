import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import AccountNavigator from './AccountNavigator'
import FeedNavigator from './FeedNavigator'

const Tab = createBottomTabNavigator()

const AppNavigator = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen name='Feed' component={FeedNavigator} />
    <Tab.Screen name='Account' component={AccountNavigator} />
  </Tab.Navigator>
)

export default AppNavigator
