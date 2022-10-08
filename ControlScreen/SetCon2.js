import React from 'react'
import { View, StyleSheet, Alert, Text, Image,Switch,TouchableHighlight, TouchableOpacity } from 'react-native'
import { color } from 'react-native-reanimated'
import globalStyles from '../global-styles'

export default function SetCon2({ route, navigation }){
    let [switchTime, setSwitchTime] = React.useState(false)
	let [switchSensor, setSwitchSensor] = React.useState(false)

    return (
        <View style={globalStyles.container}>
           
           <TouchableHighlight style={[styles.items]}>
				<View style={styles.viewImgTextContainer}>
					<Text style={styles.buttonText}>โหมดตั้งเวลา</Text>
				</View>
			</TouchableHighlight>
            <TouchableHighlight  style={[styles.items3,]}
				underlayColor='#00BE00'
				onPress={
                    () => navigation.navigate('SetTime')}
			>
				<View >
                    <View>
                        <Image source={require('../src/alarm-clock.png')} style={styles.img} />
                    </View>
            	
					<Text style={styles.buttonText3}>โหมดตั้งเวลา</Text>
				</View>
                
			</TouchableHighlight>
            <View style={{marginTop:10,}}>
                <Text> {'\n'}</Text>
            </View>
            <TouchableHighlight  style={[styles.items3,]}
				underlayColor='#00BE00'
				onPress={
                    () => navigation.navigate('SetSensor')}
			>
				<View >
					<Image source={require('../src/soil-analysis.png')} style={styles.img} />
					<Text style={styles.buttonText3}>โหมดเซ็นเซอร์</Text>
				</View>
			</TouchableHighlight>
			

            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		marginTop: 50
	},
	items: {
		width: 150,
		height: 45,
        marginTop:20,
        marginLeft:90,
        marginRight:90,
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 15,
		borderRadius: 15,
		backgroundColor: '#AED6F1'
	},
    items1:{
        flexDirection: 'row',
		marginBottom: 15,
		alignItems: 'center',
		justifyContent: 'space-between'
    },
	buttonText: {
		fontSize: 20,
		color: '#00BE00'
	},
    buttonText1: {
		fontSize: 60,
		color: '#ffffff'
	},
    buttonText2: {
		fontSize: 30,
		color: '#00BE00'
	},
	viewImgTextContainer: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center'
	},
    button: {
		width: 200,
		height: 200,
        marginTop:20,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 200,
	},


	items3: {
		width: 200,
		height: 200,
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 15,
		borderRadius: 15,
		backgroundColor: '#C0C0C0'
	},
	buttonOpacity: {

	},
	buttonHighlight: {

	},
	buttonText3: {
        marginTop:10,
		fontSize: 20,
		color: '#000066'
	},
	img: {
        marginLeft:15,
		height: 80,
		width: 80,
        alignItems: 'center',
		marginRight: 5
	}

})