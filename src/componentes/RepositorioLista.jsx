import React from 'react'
import { Text, View, FlatList } from 'react-native'
import DataRepositorio from './data/dataanimalnasa.json'
import RespositorioItems from './RepositorioItem.jsx'

const RepositorioLista = () => {
    return (
        <FlatList
            data={DataRepositorio}
            renderItem={({ item: repo }) => (
                <RespositorioItems {...repo} />
            )}
        />
    )
}


export default RepositorioLista