import React, { useState } from "react";
import {View, StyleSheet, Alert, Text, Image,Switch,TouchableHighlight, TouchableOpacity } from 'react-native'
import { color } from 'react-native-reanimated'
import globalStyles from '../global-styles'

export default function setDurian2({ navigation }) {

	const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const [isEnabled1, setIsEnabled1] = useState(false);
  const toggleSwitch1 = () => setIsEnabled1((previousState) => !previousState);

  const [isEnabled2, setIsEnabled2] = useState(false);
  const toggleSwitch2 = () => setIsEnabled2((previousState) => !previousState);

  const [isEnabled3, setIsEnabled3] = useState(false);
  const toggleSwitch3 = () => setIsEnabled3((previousState) => !previousState);

  const [isEnabled4, setIsEnabled4] = useState(false);
  const toggleSwitch4 = () => setIsEnabled4((previousState) => !previousState);
    return (
        <View style={globalStyles.container}>
            <View style={{marginTop:10,}}>
                <Text> {'\n'}</Text>
            </View>
            <TouchableHighlight style={[styles.items,]}
				underlayColor='#00BE00'
				onPress={
                    () => navigation.navigate('Soilmoisture2')}
			>
				
				<View style={styles.viewImgTextContainer}>
					<Image source={require('../src/soil-analysis.png')} style={styles.img} />
					<Text style={styles.buttonText}>ความชื้นในดิน</Text>
					<View style={styles.container1}>
      					<Switch
        					trackColor={{ false: "#767577", true: "#00BE00" }}
        					thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        					ios_backgroundColor="#3e3e3e"
        					onValueChange={toggleSwitch}
        					value={isEnabled}
      					/>
    				</View>
				</View>
			</TouchableHighlight>

			<TouchableHighlight style={[styles.items,]}
				underlayColor='#00BE00'
				onPress={
                    () => navigation.navigate('Airhumidity2')}
			>
				<View style={styles.viewImgTextContainer}>
					
					<Image source={require('../src/humidity.png')} style={styles.img} />
					<Text style={styles.buttonText}>ความชื้นในอากาศ</Text>
					<View style={styles.container1}>
      					<Switch
        					trackColor={{ false: "#767577", true: "#00BE00" }}
        					thumbColor={isEnabled1 ? "#f5dd4b" : "#f4f3f4"}
        					ios_backgroundColor="#3e3e3e"
        					onValueChange={toggleSwitch1}
        					value={isEnabled1}
      					/>
    				</View>
				</View>
			</TouchableHighlight>

            <TouchableHighlight style={[styles.items,]}
				underlayColor='#00BE00'
				onPress={
                    () => navigation.navigate('Soiltemperature2')}
			>
				<View style={styles.viewImgTextContainer}>
					<Image source={require('../src/temperature.png')} style={styles.img} />
					<Text style={styles.buttonText}>อุณหภูมิในดิน</Text>
					<View style={styles.container1}>
      					<Switch
        					trackColor={{ false: "#767577", true: "#00BE00" }}
        					thumbColor={isEnabled2 ? "#f5dd4b" : "#f4f3f4"}
        					ios_backgroundColor="#3e3e3e"
        					onValueChange={toggleSwitch2}
        					value={isEnabled2}
      					/>
    				</View>
				</View>
			</TouchableHighlight>

            <TouchableHighlight style={[styles.items,]}
				underlayColor='#00BE00'
				onPress={
                    () => navigation.navigate('Airtemperature2')}
			>
				<View style={styles.viewImgTextContainer}>
					<Image source={require('../src/thermometer.png')} style={styles.img} />
					<Text style={styles.buttonText}>อุณหภูมิในอากาศ</Text>
					<View style={styles.container1}>
      					<Switch
        					trackColor={{ false: "#767577", true: "#00BE00" }}
        					thumbColor={isEnabled3 ? "#f5dd4b" : "#f4f3f4"}
        					ios_backgroundColor="#3e3e3e"
        					onValueChange={toggleSwitch3}
        					value={isEnabled3}
      					/>
    				</View>
				</View>
			</TouchableHighlight>

			<TouchableHighlight style={[styles.items,]}
				underlayColor='#00BE00'
				onPress={
                    () => navigation.navigate('Lightneedles2')}
			>
				<View style={styles.viewImgTextContainer}>
					<Image source={require('../src/smart-light.png')} style={styles.img} />
					<Text style={styles.buttonText}>ความเข็มแสง</Text>
					<View style={styles.container1}>
      					<Switch
        					trackColor={{ false: "#767577", true: "#00BE00" }}
        					thumbColor={isEnabled4 ? "#f5dd4b" : "#f4f3f4"}
        					ios_backgroundColor="#3e3e3e"
        					onValueChange={toggleSwitch4}
        					value={isEnabled4}
      					/>
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
	container1: {
		paddingLeft:20,
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