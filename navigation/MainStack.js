import React from 'react'
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from '../src/componentes/Main'
import AppBar from '../src/componentes/AppBar'

const Stack = createNativeStackNavigator();
const styles = StyleSheet.create({
    slogan: {
        color:'#1f1f1f',
        fontSize:10,
      justifyContent: 'center', 
      textStyle:'cursive'
    }
});

const MainStack = () => {
  return(
    
  <NavigationContainer>
     <AppBar />
    <Stack.Navigator>
      <Stack.Screen style={styles.slogan} name="Let's take care of our natural species" component={Main} />             
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default MainStack