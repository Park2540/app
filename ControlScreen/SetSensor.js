import React from 'react'
import { View, StyleSheet, Alert, Text, Image,TextInput,TouchableHighlight, TouchableOpacity } from 'react-native'
import { color } from 'react-native-reanimated'
import globalStyles from '../global-styles'

export default function SetSensor({ route, navigation }){
    let [inputNumber, setInputNumber] = React.useState('')

    return (
        <View >
            <View style={globalStyles.container}>
            <TouchableHighlight  style={[styles.items3,]}>
				<View >
                    <View>
                        <Image source={require('../src/soil-analysis.png')} style={styles.img} />
                    </View>
            	
					<Text style={styles.buttonText3}>โหมดเซ็นเซอร์</Text>
				</View>
                
			</TouchableHighlight>
            </View>
           
            
            <TouchableHighlight  style={[styles.items,]}>

				<View >
					
				</View>
			</TouchableHighlight>
            <View>
                <TextInput></TextInput>
            </View>
            
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
		
		height: 90,
        marginTop:20,
        marginLeft:20,
        marginRight:20,
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 15,
		borderRadius: 15,
		backgroundColor: '#AED6F1'
	},
    items1:{
        marginBottom: 15
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
        marginTop:40,
        marginLeft:20,
		width: 150,
		height: 150,
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
    textInput: {
		height: 32,
		color: 'black',
		backgroundColor: '#fff',
		borderWidth: 1,
		borderColor: '#aaa',
		marginTop: 5,
		paddingTop: 3,
		paddingBottom: 3
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