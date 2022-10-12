import React, { useState } from "react";
import { View,SafeAreaView,Switch, StyleSheet, Alert, Text, Image,TextInput,TouchableHighlight, TouchableOpacity } from 'react-native'
import { color } from 'react-native-reanimated'
import globalStyles from '../global-styles'
import SettingStyles from "../Setting-Styles";

export default function SetTime2({ route, navigation }){
  	const [number, onChangeNumber] = React.useState(null);


	//การทำงานของสวิช
	const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const [isEnabled1, setIsEnabled1] = useState(false);
  const toggleSwitch1 = () => setIsEnabled1((previousState) => !previousState);

  const [isEnabled2, setIsEnabled2] = useState(false);
  const toggleSwitch2 = () => setIsEnabled2((previousState) => !previousState);

  const [isEnabled3, setIsEnabled3] = useState(false);
  const toggleSwitch3 = () => setIsEnabled3((previousState) => !previousState);
    return (
        <View>
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
                        <Image source={require('../src/alarm-clock.png')} style={ SettingStyles.img} />
                    </View>
            	
					<Text style={ SettingStyles.buttonText3}>โหมดตั้งเวลา</Text>
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
        					placeholder="เวลาเปิด"
        					keyboardType="numeric"
      					/>
    				</SafeAreaView>
					<SafeAreaView >
      					<TextInput
        					style={ SettingStyles.input}
        					onChangeText={onChangeNumber}
        					value={number}
        					placeholder="เวลาปิด"
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
            <TouchableHighlight  style={ SettingStyles.items}>

				<View style={ SettingStyles.viewImgTextContainer}>
					<View style={ SettingStyles.container2}>
      					<Switch
        					trackColor={{ false: "#767577", true: "#00BE00" }}
        					thumbColor={isEnabled2 ? "#f5dd4b" : "#f4f3f4"}
        					ios_backgroundColor="#3e3e3e"
        					onValueChange={toggleSwitch2}
        					value={isEnabled2}
      					/>
    				</View>
					<SafeAreaView >
      					<TextInput
        					style={ SettingStyles.input}
        					onChangeText={onChangeNumber}
        					value={number}
        					placeholder="เวลาเปิด"
        					keyboardType="numeric"
      					/>
    				</SafeAreaView>
					<SafeAreaView >
      					<TextInput
        					style={ SettingStyles.input}
        					onChangeText={onChangeNumber}
        					value={number}
        					placeholder="เวลาปิด"
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
            <TouchableHighlight  style={ SettingStyles.items}>

				<View style={ SettingStyles.viewImgTextContainer}>
					<View style={ SettingStyles.container2}>
      					<Switch
        					trackColor={{ false: "#767577", true: "#00BE00" }}
        					thumbColor={isEnabled3 ? "#f5dd4b" : "#f4f3f4"}
        					ios_backgroundColor="#3e3e3e"
        					onValueChange={toggleSwitch3}
        					value={isEnabled3}
      					/>
    				</View>
					<SafeAreaView >
      					<TextInput
        					style={ SettingStyles.input}
        					onChangeText={onChangeNumber}
        					value={number}
        					placeholder="เวลาเปิด"
        					keyboardType="numeric"
      					/>
    				</SafeAreaView>
					<SafeAreaView >
      					<TextInput
        					style={ SettingStyles.input}
        					onChangeText={onChangeNumber}
        					value={number}
        					placeholder="เวลาปิด"
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
			

            
        </View>
    )
}

const styles = StyleSheet.create({

})