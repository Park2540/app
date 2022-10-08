import React from 'react'
import { View, StyleSheet, Alert, Text, Image,TouchableHighlight, TouchableOpacity } from 'react-native'
import { color } from 'react-native-reanimated'
import globalStyles from '../global-styles'

export default function SetDurian3({ navigation }) {
    return (
        <View style={globalStyles.container}>
            <View style={{marginTop:10,}}>
                <Text style={{ fontSize: 18, color:'#000066', fontWeight:'bold'}}> {'\n'}</Text>
            </View>
            <TouchableHighlight style={[styles.items,]}
				underlayColor='red'
				onPress={
					() => { Alert.alert('Button Add Cart') }
				}
			>
				<View style={styles.viewImgTextContainer}>
					<Image source={require('../src/soil-analysis.png')} style={styles.img} />
					<Text style={styles.buttonText}>ความชื้นในดิน</Text>
				</View>
			</TouchableHighlight>

			<TouchableHighlight style={[styles.items,]}
				underlayColor='red'
				onPress={
					() => { Alert.alert('Button Add Cart') }
				}
			>
				<View style={styles.viewImgTextContainer}>
					<Image source={require('../src/humidity.png')} style={styles.img} />
					<Text style={styles.buttonText}>ความชื้นในอากาศ</Text>
				</View>
			</TouchableHighlight>

            <TouchableHighlight style={[styles.items,]}
				underlayColor='red'
				onPress={
					() => { Alert.alert('Button Add Cart') }
				}
			>
				<View style={styles.viewImgTextContainer}>
					<Image source={require('../src/temperature.png')} style={styles.img} />
					<Text style={styles.buttonText}>อุณหภูมิในดิน</Text>
				</View>
			</TouchableHighlight>

            <TouchableHighlight style={[styles.items,]}
				underlayColor='red'
				onPress={
					() => { Alert.alert('Button Add Cart') }
				}
			>
				<View style={styles.viewImgTextContainer}>
					<Image source={require('../src/thermometer.png')} style={styles.img} />
					<Text style={styles.buttonText}>อุณหภูมิในอากาศ</Text>
				</View>
			</TouchableHighlight>

			<TouchableHighlight style={[styles.items,]}
				underlayColor='red'
				onPress={
					() => { Alert.alert('Button Add Cart') }
				}
			>
				<View style={styles.viewImgTextContainer}>
					<Image source={require('../src/smart-light.png')} style={styles.img} />
					<Text style={styles.buttonText}>ความเข็มแสง</Text>
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
		width: 350,
		height: 45,
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 15,
		borderRadius: 15,
		backgroundColor: 'royalblue'
	},
	buttonOpacity: {

	},
	buttonHighlight: {

	},
	buttonText: {
		fontSize: 20,
		color: 'white'
	},
	viewImgTextContainer: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center'
	},
	img: {
		height: 40,
		width: 40,
		marginRight: 5
	}


})