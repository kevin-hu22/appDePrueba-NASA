import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import MainStack from './navigation/MainStack.js';


export default function App() {
  return(
    <SafeAreaView style={{flex:1}}>
      <MainStack />
    </SafeAreaView>
  )

  {/* <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Main} />
      <Stack.Screen name="Otro" component={Pvista1} />
    </Stack.Navigator>
  </NavigationContainer> */}
}
