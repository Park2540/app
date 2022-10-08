import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import globalStyles from '../global-styles'

export default function ConDurian3({ route, navigation }) {
    return (
        <View style={globalStyles.container}>
            <Text style={{ fontSize: 18 }}>
                เลือกโหมดการทำงานโซน1 {'\n'}
                
            </Text>
            <Button title="Back" onPress={() => { navigation.goBack() }} />
        </View>
    )
}

const styles = StyleSheet.create({

})