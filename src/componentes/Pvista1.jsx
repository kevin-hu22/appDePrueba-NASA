import React from 'react'
import { Text, View, FlatList } from 'react-native'
import DataRepositorio from './data/repositorio.js'
import RespositorioItems from './RepositorioItem.jsx'

const Pvista1 = () => {
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