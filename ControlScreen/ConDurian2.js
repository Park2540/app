import React from 'react'
import { View, StyleSheet, Alert, Text, Image,TouchableHighlight, TouchableOpacity } from 'react-native'
import { color } from 'react-native-reanimated'
import globalStyles from '../global-styles'

export default function ConDurian2({ route, navigation }){
    let [hasPermission, setHasPermission] = React.useState()
	let [isTorchOn, setIsTorchOn] = React.useState(false)
	let [bgColor, setBgColor] = React.useState('red')

    return (
        <View style={globalStyles.container}>
           
            <TouchableHighlight style={[styles.items,]}
				underlayColor='#00BE00'
				onPress={
                    () => navigation.navigate('SetCon2')}
			>
				
				<View style={styles.viewImgTextContainer}>
					<Text style={styles.buttonText}>โหมดตั้งเวลา</Text>
				</View>
			</TouchableHighlight>

			<TouchableHighlight style={[styles.button, { backgroundColor: `${bgColor}` }]}
				onPress={() => {
					setBgColor((isTorchOn) ? 'red' : '#00BE00')
					setIsTorchOn(!isTorchOn)
				}
				}>
				<View >
                    <Text style={styles.buttonText1}>
					    {(isTorchOn) ? 'เปิด' : 'ปิด'}
				    </Text>
				</View>
			</TouchableHighlight>
            <View style={{marginTop:10}}>
                <Text style={styles.buttonText2}>
					    {(isTorchOn) ? 'สถานะเปิดการทำงาน' : 'สถานะปิดการทำงาน'}
				</Text>
            </View>
			<View style={{marginTop:10}}>
				<Text></Text>
			</View>
			<TouchableHighlight style={[styles.items3,]}>
				<View style={styles.viewImgTextContainer}>
					<Image source={require('../src/soil-analysis.png')} style={styles.img} />
					<Text style={styles.buttonText3}>ความชื้นในดิน</Text>
					<View style={{paddingLeft:20}}>
						<Text style={{fontSize:20,color:"#fff"}}>45%</Text>
					</View>
				</View>
			</TouchableHighlight>

			<TouchableHighlight style={[styles.items3,]}>
				<View style={styles.viewImgTextContainer}>
					<Image source={require('../src/humidity.png')} style={styles.img} />
					<Text style={styles.buttonText3}>ความชื้นในอากาศ</Text>
					<View style={{paddingLeft:20}}>
						<Text style={{fontSize:20,color:"#fff"}}>35%</Text>
					</View>
				</View>
			</TouchableHighlight>

            <TouchableHighlight style={[styles.items3,]}>
				<View style={styles.viewImgTextContainer}>
					<Image source={require('../src/temperature.png')} style={styles.img} />
					<Text style={styles.buttonText3}>อุณหภูมิในดิน</Text>
					<View style={{paddingLeft:20}}>
						<Text style={{fontSize:20,color:"#fff"}}>25 °C</Text>
					</View>
				</View>
			</TouchableHighlight>

            <TouchableHighlight style={[styles.items3,]}>
				<View style={styles.viewImgTextContainer}>
					<Image source={require('../src/thermometer.png')} style={styles.img} />
					<Text style={styles.buttonText3}>อุณหภูมิในอากาศ</Text>
					<View style={{paddingLeft:20}}>
						<Text style={{fontSize:20,color:"#fff"}}>35 °C</Text>
					</View>
				</View>
			</TouchableHighlight>

			<TouchableHighlight style={[styles.items3,]}>
				<View style={styles.viewImgTextContainer}>
					<Image source={require('../src/smart-light.png')} style={styles.img} />
					<Text style={styles.buttonText3}>ความเข็มแสง</Text>
					<View style={{paddingLeft:20}}>
						<Text style={{fontSize:20,color:"#fff"}}>350 lux</Text>
					</View>
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
        width: 200,
		height: 200,
        marginTop:50,
        borderRadius:100,
        alignItems: 'center',
        backgroundColor: 'red'
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
	buttonText3: {
		fontSize: 20,
		color: 'white'
	},
	img: {
		height: 40,
		width: 40,
		marginRight: 5
	}

})