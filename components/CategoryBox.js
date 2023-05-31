import React from 'react'
import { View, Pressable, Text } from 'react-native'

export default function CategoryBox({title, color}) {
  return (
    <View styles={{ backgroundColor: color }}>
      <Pressable>
        <Text>{title}</Text>
      </Pressable>
    </View>
  )
}
