import React from 'react' 
import Constants from 'expo-constants'
import { View } from 'react-native'
import RepositorioLista from './RepositorioLista.jsx'

const Main = ()=>{
    return(
        <View style={{marginTop: Constants.statusBarHeight, margin:30, flexGrow:1 }}>
        <RepositorioLista />
        </View>
    )
}


export default Main