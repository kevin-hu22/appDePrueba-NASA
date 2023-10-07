import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const RepositorioItems = (props) => (
    <View key={props.id} style={styles.containerItems}>
        <Text style={styles.containerItemsID}>Canal: {props.id}</Text>
        <Text>Nombre: {props.fullname}</Text>
        <Text>Descripcion: {props.descripcion}</Text>
        <Text>Rating: {props.rating}</Text>
        <Text>Visitas: {props.visitas}</Text>
    </View>
)

const styles = StyleSheet.create({
    containerItems:{
        flex: 1,
        marginLeft:6,
        marginRight:6,
        marginTop:20
    },
    containerItemsID:{
        fontWeight:'bold',
        fontSize:20,
        color:'#09f',
        marginBottom:5,

    }
})



export default RepositorioItems