import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import RepositorioLista from './RepositorioLista.jsx'

const Main = () => {
    return (
        <View>
            <Image
        source={{ uri: 'https://media.tenor.com/URvoYDDxW0AAAAAC/zooming-out-planet-earth.gif' }} 
        style={styles.gif}
      />
            <RepositorioLista />        
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      gif: {
        width:400,
        height:200, 
      }
});

export default Main