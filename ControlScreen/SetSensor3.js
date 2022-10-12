import React, { useState } from "react"
import {  View,SafeAreaView,Switch, StyleSheet, Alert, Text, Image,TextInput,TouchableHighlight, TouchableOpacity  } from 'react-native'
import { color } from 'react-native-reanimated'
import globalStyles from '../global-styles'
import SettingStyles from '../Setting-Styles'

export default function SetSensor3({ route, navigation }){
	const [number, onChangeNumber] = React.useState(null);
	const [number1, onChangeNumber1] = React.useState(null);

	//การทำงานของสวิช
	const [isEnabled, setIsEnabled] = useState(false);
	const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  
	const [isEnabled1, setIsEnabled1] = useState(false);
	const toggleSwitch1 = () => setIsEnabled1((previousState) => !previousState);
  
    return (
        <View >
            <View style={globalStyles.container}>
            <TouchableHighlight  style={ SettingStyles.items3}>
				<View >
				<View style={ SettingStyles.container1}>
      					<Switch
        					trackColor={{ false: "#767577", true: "#00BE00" }}
        					thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        					ios_backgroundColor="#3e3e3e"
        					onValueChange={toggleSwitch}
        					value={isEnabled}
      					/>
    				</View>
                    <View>
                        <Image source={require('../src/soil-analysis.png')} style={ SettingStyles.img}/>
                    </View>
            	
					<Text style={ SettingStyles.buttonText3}>ความชื้นดิน</Text>
				</View>
                
			</TouchableHighlight>
            </View>
           
            
            <TouchableHighlight  style={ SettingStyles.items}>

				<View style={ SettingStyles.viewImgTextContainer}>
					<View style={ SettingStyles.container2}>
      					<Switch
        					trackColor={{ false: "#767577", true: "#00BE00" }}
        					thumbColor={isEnabled1 ? "#f5dd4b" : "#f4f3f4"}
        					ios_backgroundColor="#3e3e3e"
        					onValueChange={toggleSwitch1}
        					value={isEnabled1}
      					/>
    				</View>
					<SafeAreaView >
      					<TextInput
        					style={ SettingStyles.input}
        					onChangeText={onChangeNumber}
        					value={number}
        					placeholder="ค่าการเริ่มเปิด"
        					keyboardType="numeric"
      					/>
    				</SafeAreaView>
					<SafeAreaView >
      					<TextInput
        					style={ SettingStyles.input}
        					onChangeText={onChangeNumber1}
        					value={number1}
        					placeholder="ค่าการปิด"
        					keyboardType="numeric"
      					/>
    				</SafeAreaView>
					<TouchableHighlight style={ SettingStyles.itemss}
						underlayColor='#00BE00'
						onPress={
							() => { Alert.alert('ยืนยันการบันทึกข้อมูล') }
						}
			>
						<View style={ SettingStyles.viewImgTextContainer}>
							<Text style={ SettingStyles.buttonTextt}>ยืนยัน</Text>
						</View>
					</TouchableHighlight>
					
				</View>
			</TouchableHighlight>
            <View>
                <TextInput></TextInput>
            </View>
            
        </View>
    )
}