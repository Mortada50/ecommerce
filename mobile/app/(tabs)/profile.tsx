import { Text } from 'react-native'
import React, { Component } from 'react'
import SafeScreen from '@/components/SafeScreen'

export class ProfileScreen extends Component {
  render() {
    return (
      <SafeScreen>
        <Text className='text-white'>ProfileScreen</Text>
      </SafeScreen>
    )
  }
}

export default ProfileScreen