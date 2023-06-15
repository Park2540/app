import React, { useState, useEffect } from "react";
import { View, StyleSheet, Alert, Text, Image, Switch, TouchableHighlight, TouchableOpacity, Button } from 'react-native'
import { ImageBackground } from 'react-native';
import globalStyles from '../global-styles';
import SettingStyles from '../Setting-Styles';
import { getDatabase, ref, onValue, off, child } from "firebase/database";

export default function Maincontrol({ navigation }) {
  const dbRef = ref(getDatabase());
  const [username, setUsername] = useState("");
  const [status1, setStatus1] = useState("");
  const [status2, setStatus2] = useState("");
  const [status3, setStatus3] = useState("");
  const [status4, setStatus4] = useState("");
  const [status5, setStatus5] = useState("");

  useEffect(() => {
    const fetchData = (modeTimeRef, setStatus) => {
      return onValue(modeTimeRef, (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          setStatus(data["Valve"]);
        } else {
          console.log("No data available");
        }
      }, (error) => {
        console.error(error);
      });
    };

    const modeTimeRef1 = child(dbRef, `Node1/Zone1/${username}`);
    const unsubscribe1 = fetchData(modeTimeRef1, setStatus1);


    const modeTimeRef2 = child(dbRef, `Node1/Zone2${username}`);
    const unsubscribe2 = fetchData(modeTimeRef2, setStatus2);

    const modeTimeRef3 = child(dbRef, `Node1/Zone3${username}`);
    const unsubscribe3 = fetchData(modeTimeRef3, setStatus3);

    const modeTimeRef4 = child(dbRef, `Node2/Zone1${username}`);
    const unsubscribe4 = fetchData(modeTimeRef4, setStatus4);

    const modeTimeRef5 = child(dbRef, `Node2/Zone2${username}`);
    const unsubscribe5 = fetchData(modeTimeRef5, setStatus5);

    return () => {
      off(modeTimeRef1, 'value', unsubscribe1);
      off(modeTimeRef2, 'value', unsubscribe2);
      off(modeTimeRef3, 'value', unsubscribe3);
      off(modeTimeRef4, 'value', unsubscribe4);
      off(modeTimeRef5, 'value', unsubscribe5);
    };
  }, []);

  return (
	<ImageBackground
	  source={require('../assets/background50.png')}
	  style={styles.background}
	>
	  <View style={globalStyles.container}>
		<View style={{ marginTop: 10 }}>
		  <Text> {'\n'}</Text>
		</View>
  
		<TouchableHighlight
		  style={[styles.items]}
		  underlayColor='#00BE00'
		  onPress={() => navigation.navigate('ConDurian1')}
		>
		  <View style={styles.viewImgTextContainer}>
			<Text style={styles.buttonText}>ทุเรียนโซน 1</Text>
			<View style={styles.container1}>
			  <Text style={{ color: status1 === "Zone_1_OFF" ? "red" : "green" }}>
				{status1 === "Zone_1_OFF" ? "ปิด" : "เปิด"}
			  </Text>
			</View>
		  </View>
		</TouchableHighlight>
  
		<TouchableHighlight
		  style={[styles.items]}
		  underlayColor='#00BE00'
		  onPress={() => navigation.navigate('ConDurian2')}
		>
		  <View style={styles.viewImgTextContainer}>
			<Text style={styles.buttonText}>ทุเรียนโซน 2</Text>
			<View style={styles.container1}>
			  <Text style={{ color: status2 === "Zone_2_OFF" ? "red" : "green" }}>
				{status2 === "Zone_2_OFF" ? "ปิด" : "เปิด"}
			  </Text>
			</View>
		  </View>
		</TouchableHighlight>
  
		<TouchableHighlight
		  style={[styles.items]}
		  underlayColor='#00BE00'
		  onPress={() => navigation.navigate('ConDurian3')}
		>
		  <View style={styles.viewImgTextContainer}>
			<Text style={styles.buttonText}>ทุเรียนโซน 3</Text>
			<View style={styles.container1}>
			  <Text style={{ color: status3 === "Zone_3_OFF" ? "red" : "green" }}>
				{status3 === "Zone_3_OFF" ? "ปิด" : "เปิด"}
			  </Text>
			</View>
		  </View>
		</TouchableHighlight>
  
		<TouchableHighlight
		  style={[styles.items]}
		  underlayColor='#00BE00'
		  onPress={() => navigation.navigate('Conhouse1')}
		>
		  <View style={styles.viewImgTextContainer}>
			<Text style={styles.buttonText}>โรงเรือน 1 </Text>
			<View style={styles.container1}>
			  <Text style={{ color: status4 === "Zone_1_OFF" ? "red" : "green" }}>
				{status4 === "Zone_1_OFF" ? "ปิด" : "เปิด"}
			  </Text>
			</View>
		  </View>
		</TouchableHighlight>
  
		<TouchableHighlight
		  style={[styles.items]}
		  underlayColor='#00BE00'
		  onPress={() => navigation.navigate('Conhouse2')}
		>
		  <View style={styles.viewImgTextContainer}>
			<Text style={styles.buttonText}>โรงเรือน 2 </Text>
			<View style={styles.container1}>
			  <Text style={{ color: status5 === "Zone_2_OFF" ? "red" : "green" }}>
				{status5 === "Zone_2_OFF" ? "ปิด" : "เปิด"}
				</Text>
          </View>
        </View>
      </TouchableHighlight>
    </View>
  </ImageBackground>
);
}

const styles = StyleSheet.create({
	background: {
		flex: 1,
		resizeMode: 'cover',
		
	  },
    container: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		marginTop: 50
	},
	container1: {
		marginLeft:100,
		paddingLeft:20,
	  },
	items: {
		width: 350,
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 15,
		borderRadius: 15,
		backgroundColor: '#80cbc4',
		elevation: 10, // เพิ่ม elevation ให้กับปุ่ม
		shadowColor: '#000', // กำหนดสีเงา
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
		alignItems: 'center',
		shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
	},
	img: {
		height: 40,
		width: 40,
		marginRight: 5
	}


})