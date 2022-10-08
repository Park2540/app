import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import globalStyles from './global-styles'

export default function TabStackMember({ navigation }) {
    return (
        <View >
            <View style={globalStyles.items}>
                <Button title="ตั้งค่าการแจ้งเตือนโซนทุเรียน 1" color="#000066" onPress={
                    () => navigation.navigate('SetDurian1')
                 } />
            </View>
            <View style={globalStyles.items}>
                <Button title="ตั้งค่าการแจ้งเตือนโซนทุเรียน 2" color="#000066" onPress={
                    () => navigation.navigate('SetDurian2')
                 } />
            </View>
            <View style={globalStyles.items}>
                <Button title="ตั้งค่าการแจ้งเตือนโซนทุเรียน 3" color="#000066" onPress={
                    () => navigation.navigate('SetDurian3')
                 } />
            </View>
           
            
        </View>
    )
}

const styles = StyleSheet.create({

})
