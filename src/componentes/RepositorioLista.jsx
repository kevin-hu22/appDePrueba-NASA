import React from 'react'
import { Text, View, FlatList, StyleSheet, Image } from 'react-native'
import DataRepositorio from './data/dataanimalnasa.json'
import RespositorioItems from './RepositorioItem.jsx'

const RepositorioLista = () => {
    return (
        <View>
        <FlatList
            data={DataRepositorio}
            renderItem={({ item: repo }) => (
                <RespositorioItems {...repo} />
            )}
        />
        </View>
    )
}


export default RepositorioLista