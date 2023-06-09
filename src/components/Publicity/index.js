import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import BlindajeLogo from '../../Assets/Icons/BlindajeLogo.png'
import PublicityCard from './PublicityCard'

const publicityData = [
    {
        id: '1',
        title: 'TMA Insurance',
        description: 'It is a legal and judicial protection tool designed for you, in order to shield your professional actions in a way...',
        logo: BlindajeLogo
    },
    {
        id: '2',
        title: 'Complicaciones Postquirúrgicas',
        description: 'Tiene como objeto Cubrir Los gastos médicos, de urgencias, hospitalarios y quirúrgicos que se deriven de una complicación de Cirugía...',
        logo: BlindajeLogo
    }
]

const Publicity = () => {
  return (
    <View style={styles.flatListPublicity}>
        <FlatList data={publicityData} horizontal keyExtractor={(item) => item.id} renderItem={({item}) => <PublicityCard title={item.title} description={item.description} logo={item.logo} />} showsHorizontalScrollIndicator={false} />
    </View>
  )
}

export default Publicity

const styles = StyleSheet.create({
    flatListPublicity: {
        width: '100%',
        height: 130,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
})