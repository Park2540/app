import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import globalStyles from './global-styles'

export default function TabStackProduct({ navigation }) {
    return (
        <View>
            <View style={globalStyles.items}>
                <Button title="ทุเรียนโซน 1" color="#000066" onPress={
                    () => navigation.navigate('TabStackProductDetail')
                } />
            </View>
            <View style={globalStyles.items}>
                <Button title="ทุเรียนโซน 2" color="#000066" onPress={
                    () => navigation.navigate('ConDurian1', { id: 123 })
                } />
            </View>
            <View style={globalStyles.items}>
                <Button title="ทุเรียนโซน 3" color="#000066" onPress={
                    () => navigation.navigate('ConDurian2', { id: 123 })
                } />
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({

})
