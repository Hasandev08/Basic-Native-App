import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import Screen from '../components/Screen'
import ListItems from '../components/ListItems'
import ListItemSeparator from '../components/ListItemSeparator'

import colors from '../config/colors'
import Icon from '../components/Icon'

const menuItems = [
  {
    title: 'My Listings',
    icon: {
      name: 'format-list-bulleted',
      backgroundColor: colors.primary,
    },
  },
  {
    title: 'My Messages',
    icon: {
      name: 'email',
      backgroundColor: colors.secondary,
    },
    targetScreen: 'Messages',
  },
]

function AccountScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItems
          title='Hasan Ahmed'
          subTitle='hasanahmed0089@gmail.com'
          image={require('../assets/mosh.jpg')}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItems
              title={item.title}
              ImageComponent={
                <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
        />
      </View>
      <ListItems
        title='Log Out'
        ImageComponent={<Icon name='logout' backgroundColor='#ffe66d' />}
      />
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.light,
  },
})

export default AccountScreen
