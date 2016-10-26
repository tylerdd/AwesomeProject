import {
  Navigator
} from 'react-native'
import React from 'react'
import Welcome from './Welcome'

let defaultRoute = {
  title: 'Welcome',
  component: Welcome
}

let renderScene = (route, navigator) => {
  // This component name must be upper case, even it is a dynamic component
  let DynamicComponent = route.component
  return (
    <DynamicComponent {...route.params} navigator={navigator} />
  )
}

/**
 * Using a pure function is alright!
 */
export default function Setup() {
  return (
    <Navigator
      initialRoute={defaultRoute}
      renderScene={renderScene}
    />
  )
}
