import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const RepositorioItems = (props) => (
    <View key={props.id} style={styles.containerItems}>
        <Image style={styles.imgFish} source={{uri:props.imageAnimal}}/>
        <Text style={styles.containerItemsID}>{props.name}</Text>
        <Text style={styles.tituloCien}>({props.nameCien})</Text>
        <Text>Habitat: {props.habit}</Text>
        <Text>Size: {props.Size}</Text>
        <Text>Origin: {props.origin}</Text>
        <Text>High danger of extinction: {props.highDanger}</Text>
        <Text>preservation: {props.animalCare}</Text>
        <Text>characteristics: {props.characteristics}</Text>
        <Text style={styles.tituloCenter}>Areas where they can be found</Text>
        <Image style={styles.imgMap} source={{uri:props.imgMap}}/>
        <Text>Quantity at present: {props.quantity}</Text>
        <Text>Description: {props.description}</Text>
        <Text>Current situation: {props.state}</Text>
    </View>
)

const styles = StyleSheet.create({
    containerItems:{
        flex: 1,
        marginLeft:6,
        marginRight:6,
        marginTop:20,
        marginBottom:50,
        padding:10,
        fontSize:16,

    },
    containerItemsID:{
        fontWeight:'bold',
        fontSize:20,
        color:'#09f',
        marginTop:10,
        marginBottom:5,
        textAlign:'center'

    },
    tituloCenter:{
        textAlign:'center',
        fontSize:20,
        fontWeight:'bold',
        marginBottom:5,
        marginTop:20,
    },
    tituloCien:{
        fontStyle:'italic',
        textAlign:'center',
        marginBottom:20,
    },
    imgFish:{     
        alignSelf:'center' ,
        width:320,
        height:200,
        borderRadius:5,
        resizeMode:'cover',
    },
    imgMap:{
        marginBottom:20,
        marginTop:20,
        alignSelf:'center' ,
        width:320,
        height:200,
        borderRadius:5,
        resizeMode:'cover',
    }
})



export default RepositorioItems