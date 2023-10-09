import React from 'react'
import { Text, View, FlatList, StyleSheet, Image } from 'react-native'
import DataRepositorio from './data/dataanimalnasa.json'
import RespositorioItems from './RepositorioItem.jsx'

const RepositorioLista = () => {
    return (
        <View>
            <Image
        source={{ uri: 'https://media.tenor.com/URvoYDDxW0AAAAAC/zooming-out-planet-earth.gif' }} 
        style={styles.gif}
      />
        <FlatList
            data={DataRepositorio}
            renderItem={({ item: repo }) => (
                <RespositorioItems {...repo} />
            )}
        />
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

export default RepositorioLista