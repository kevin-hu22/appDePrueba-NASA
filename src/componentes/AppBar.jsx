import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={{
          uri: 'https://i.postimg.cc/7Ld2RNPv/logo.jpg',
        }}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#007bff', 
    height: 80,
    justifyContent: 'flex-end', 
    paddingLeft: 20,
    paddingBottom:10,
  },
  title: {
    color: 'white', 
    fontSize: 20, // Tamaño de fuente del título
    fontWeight: 'bold', // Estilo de fuente en negrita
  },
  logo:{     
    alignSelf:'center' ,
    width:290,
    height:60,
    borderRadius:5,
    resizeMode:'cover',
}
});

export default AppBar;
