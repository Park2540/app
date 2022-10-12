import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

//import จากหน้าตั้งค่าการแจ้งเตือน

import SetDurian1 from './settingzone/setDurian1'
import SetDurian2 from './settingzone/setDurian2'
import SetDurian3 from './settingzone/setDurian3'

import Airhumidity1 from './settingzone/Airhumidity1'
import Airhumidity2 from './settingzone/Airhumidity2'
import Airhumidity3 from './settingzone/Airhumidity3'

import Airtemperature1 from './settingzone/Airtemperature1'
import Airtemperature2 from './settingzone/Airtemperature2'
import Airtemperature3 from './settingzone/Airtemperature3'

import Lightneedles1 from './settingzone/Lightneedles1'
import Lightneedles2 from './settingzone/Lightneedles2'
import Lightneedles3 from './settingzone/Lightneedles3'

import Soilmoisture1 from './settingzone/Soilmoisture1'
import Soilmoisture2 from './settingzone/Soilmoisture2'
import Soilmoisture3 from './settingzone/Soilmoisture3'

import Soiltemperature1 from './settingzone/Soiltemperature1'
import Soiltemperature2 from './settingzone/Soiltemperature2'
import Soiltemperature3 from './settingzone/Soiltemperature3'
//import จากหน้าควบคุม
import ConDurian1 from './ControlScreen/ConDurian1'
import ConDurian2 from './ControlScreen/ConDurian2'
import ConDurian3 from './ControlScreen/ConDurian3'
import SetCon1 from './ControlScreen/SetCon1'
import SetCon2 from './ControlScreen/SetCon2'
import SetCon3 from './ControlScreen/SetCon3'
import SetTime1 from './ControlScreen/SetTime1'
import SetTime2 from './ControlScreen/SetTime2'
import SetTime3 from './ControlScreen/SetTime3'
import SetSensor1 from './ControlScreen/SetSensor1'
import SetSensor2 from './ControlScreen/SetSensor2'
import SetSensor3 from './ControlScreen/SetSensor3'

import TabProduct from './tab-product'
import TabMenu from './tab-menu'
import TabCart from './tab-cart'
import TabStackProduct from './tab-stack-product'
import TabStackProductDetail from './tab-stack-product-detail'
import TabStackMember from './tab-stack-member'
import TabStackMemberSignup from './tab-stack-member-signup'
import { cartContext } from './tab-cart-context'
import TabStackProductA from './tab-stack-product-a'


export default function App() {
	
	

	//สร้าง Stack สำหรับเลื่อนระหว่างหน้าจอกลุ่ม การควบคุม
	const ProductStack = () => {
		const Product = createStackNavigator()
		return (
			<Product.Navigator>
				<Product.Screen name="TabStackProduct" component={TabStackProduct}
					options={{ headerStyle: {
						backgroundColor: "#00BE00",
					  },
					  headerTintColor:'#fff',
					  headerTitleStyle: {
						fontWeight:'bold',
					  },headerTitle: 'หน้าหลัก' }}
				/>
				<Product.Screen name="TabStackProductDetail" component={TabStackProductDetail}
					options={{ headerTitle: 'ทุเรียนโซน 1',
					headerStyle: {
						backgroundColor: "#00BE00",
					  },
					headerTintColor:'#fff',
					headerTitleStyle: {
						fontWeight:'bold',
					  },
					headerBackTitle: ' ' }}
				/>
				<Product.Screen name="ConDurian1" component={ConDurian1}
					options={{ headerTitle: 'ทุเรียนโซน 2',
					headerStyle: {
						backgroundColor: "#00BE00",
					  },
					headerTintColor:'#fff',
					headerTitleStyle: {
						fontWeight:'bold',
					  },
					headerBackTitle: ' ' }}
				/>
				<Product.Screen name="ConDurian2" component={ConDurian2}
					options={{ headerTitle: 'ทุเรียนโซน 3',
					headerStyle: {
						backgroundColor: "#00BE00",
					  },
					headerTintColor:'#fff',
					headerTitleStyle: {
						fontWeight:'bold',
					  },
					headerBackTitle: ' ' }}
				/>
				<Product.Screen name="ConDurian3" component={ConDurian3}
					options={{ headerTitle: 'ตั้งโหมดการทำงาน',
					headerStyle: {
						backgroundColor: "#00BE00",
					  },
					headerTintColor:'#fff',
					headerTitleStyle: {
						fontWeight:'bold',
					  },
					headerBackTitle: ' ' }}
				/>
				<Product.Screen name="SetCon1" component={SetCon1}
					options={{ headerTitle: 'ตั้งโหมดการทำงานโซน1',
					headerStyle: {
						backgroundColor: "#00BE00",
					  },
					headerTintColor:'#fff',
					headerTitleStyle: {
						fontWeight:'bold',
					  },
					headerBackTitle: ' ' }}
				/>
				<Product.Screen name="SetCon2" component={SetCon2}
					options={{ headerTitle: 'ตั้งโหมดการทำงานโซน2',
					headerStyle: {
						backgroundColor: "#00BE00",
					  },
					headerTintColor:'#fff',
					headerTitleStyle: {
						fontWeight:'bold',
					  },
					headerBackTitle: ' ' }}
				/>
				<Product.Screen name="SetCon3" component={SetCon3}
					options={{ headerTitle: 'ตั้งโหมดการทำงานโซน3',
					headerStyle: {
						backgroundColor: "#00BE00",
					  },
					headerTintColor:'#fff',
					headerTitleStyle: {
						fontWeight:'bold',
					  },
					headerBackTitle: ' ' }}
				/>
				<Product.Screen name="SetTime1" component={SetTime1}
					options={{ headerTitle: 'ตั้งเวลาการทำงานโซน1',
					headerStyle: {
						backgroundColor: "#00BE00",
					  },
					headerTintColor:'#fff',
					headerTitleStyle: {
						fontWeight:'bold',
					  },
					headerBackTitle: ' ' }}
				/>
				<Product.Screen name="SetTime2" component={SetTime2}
					options={{ headerTitle: 'ตั้งเวลาการทำงานโซน2',
					headerStyle: {
						backgroundColor: "#00BE00",
					  },
					headerTintColor:'#fff',
					headerTitleStyle: {
						fontWeight:'bold',
					  },
					headerBackTitle: ' ' }}
				/>
				<Product.Screen name="SetTime3" component={SetTime3}
					options={{ headerTitle: 'ตั้งเวลาการทำงานโซน3',
					headerStyle: {
						backgroundColor: "#00BE00",
					  },
					headerTintColor:'#fff',
					headerTitleStyle: {
						fontWeight:'bold',
					  },
					headerBackTitle: ' ' }}
				/>
				<Product.Screen name="SetSensor1" component={SetSensor1}
					options={{ headerTitle: 'ตั้งเวลาเซ็นเซอร์การทำงานโซน 1',
					headerStyle: {
						backgroundColor: "#00BE00",
					  },
					headerTintColor:'#fff',
					headerTitleStyle: {
						fontWeight:'bold',
					  },
					headerBackTitle: ' ' }}
				/>
				<Product.Screen name="SetSensor2" component={SetSensor2}
					options={{ headerTitle: 'ตั้งเวลาเซ็นเซอร์การทำงานโซน 2',
					headerStyle: {
						backgroundColor: "#00BE00",
					  },
					headerTintColor:'#fff',
					headerTitleStyle: {
						fontWeight:'bold',
					  },
					headerBackTitle: ' ' }}
				/>
				<Product.Screen name="SetSensor3" component={SetSensor3}
					options={{ headerTitle: 'ตั้งเวลาเซ็นเซอร์การทำงานโซน 3',
					headerStyle: {
						backgroundColor: "#00BE00",
					  },
					headerTintColor:'#fff',
					headerTitleStyle: {
						fontWeight:'bold',
					  },
					headerBackTitle: ' ' }}
				/>
			</Product.Navigator>
		)
	}
	
	//สร้าง stack ระหว่างหน้าจอของ การตั้งค่าการแจ้งเตือน
	const MemberStack = () => {
		const Member = createStackNavigator()
		return (
			<Member.Navigator>
				<Member.Screen name="TabStackMember" component={TabStackMember}
					options={{ headerStyle: {
						backgroundColor: "#00BE00",
					  },
					  headerTintColor:'#fff',
					  headerTitleStyle: {
						fontWeight:'bold',
					  },headerTitle: 'ตั้งค่าการแจ้งเตือน' }}
				/>
				<Member.Screen name="SetDurian1" component={SetDurian1}
					options={{ headerTitle: 'ตั้งค่าการแจ้งเตือนโซนทุเรียน 1',
					headerStyle: {
						backgroundColor: "#00BE00",
					  },
					headerTintColor:'#fff',
					headerTitleStyle: {
						fontWeight:'bold',
					  },
					headerBackTitle: ' ' }}
				/>
				<Member.Screen name="SetDurian2" component={SetDurian2}
					options={{ headerTitle: 'ตั้งค่าการแจ้งเตือนโซนทุเรียน 2',
					headerStyle: {
						backgroundColor: "#00BE00",
					  },
					headerTintColor:'#fff',
					headerTitleStyle: {
						fontWeight:'bold',
					  },
					headerBackTitle: ' ' }}
				/>
				<Member.Screen name="SetDurian3" component={SetDurian3}
					options={{ headerTitle: 'ตั้งค่าการแจ้งเตือนโซนทุเรียน 3',
					headerStyle: {
						backgroundColor: "#00BE00",
					  },
					headerTintColor:'#fff',
					headerTitleStyle: {
						fontWeight:'bold',
					  },
					headerBackTitle: ' ' }}
				/>
				<Member.Screen name="Airhumidity1" component={Airhumidity1}
					options={{ headerTitle: 'ความชื้นในอากาศโซน1',
					headerStyle: {
						backgroundColor: "#00BE00",
					  },
					headerTintColor:'#fff',
					headerTitleStyle: {
						fontWeight:'bold',
					  },
					headerBackTitle: ' ' }}
				/>
				<Member.Screen name="Airhumidity2" component={Airhumidity2}
					options={{ headerTitle: 'ความชื้นในอากาศโซน2',
					headerStyle: {
						backgroundColor: "#00BE00",
					  },
					headerTintColor:'#fff',
					headerTitleStyle: {
						fontWeight:'bold',
					  },
					headerBackTitle: ' ' }}
				/>
				<Member.Screen name="Airhumidity3" component={Airhumidity3}
					options={{ headerTitle: 'ความชื้นในอากาศโซน1',
					headerStyle: {
						backgroundColor: "#00BE00",
					  },
					headerTintColor:'#fff',
					headerTitleStyle: {
						fontWeight:'bold',
					  },
					headerBackTitle: ' ' }}
				/>
				<Member.Screen name="Airtemperature1" component={Airtemperature1}
					options={{ headerTitle: 'อุณหภูมิในอากาศโซน1',
					headerStyle: {
						backgroundColor: "#00BE00",
					  },
					headerTintColor:'#fff',
					headerTitleStyle: {
						fontWeight:'bold',
					  },
					headerBackTitle: ' ' }}
				/>
				<Member.Screen name="Airtemperature2" component={Airtemperature2}
					options={{ headerTitle: 'อุณหภูมิในอากาศโซน2',
					headerStyle: {
						backgroundColor: "#00BE00",
					  },
					headerTintColor:'#fff',
					headerTitleStyle: {
						fontWeight:'bold',
					  },
					headerBackTitle: ' ' }}
				/>
				<Member.Screen name="Airtemperature3" component={Airtemperature3}
					options={{ headerTitle: 'อุณหภูมิในอากาศโซน3',
					headerStyle: {
						backgroundColor: "#00BE00",
					  },
					headerTintColor:'#fff',
					headerTitleStyle: {
						fontWeight:'bold',
					  },
					headerBackTitle: ' ' }}
				/>
				<Member.Screen name="Lightneedles1" component={Lightneedles1}
					options={{ headerTitle: 'ความเข็มแสงโซน1',
					headerStyle: {
						backgroundColor: "#00BE00",
					  },
					headerTintColor:'#fff',
					headerTitleStyle: {
						fontWeight:'bold',
					  },
					headerBackTitle: ' ' }}
				/>
				<Member.Screen name="Lightneedles2" component={Lightneedles2}
					options={{ headerTitle: 'ความเข็มแสงโซน2',
					headerStyle: {
						backgroundColor: "#00BE00",
					  },
					headerTintColor:'#fff',
					headerTitleStyle: {
						fontWeight:'bold',
					  },
					headerBackTitle: ' ' }}
				/>
				<Member.Screen name="Lightneedles3" component={Lightneedles3}
					options={{ headerTitle: 'ความเข็มแสงโซน1',
					headerStyle: {
						backgroundColor: "#00BE00",
					  },
					headerTintColor:'#fff',
					headerTitleStyle: {
						fontWeight:'bold',
					  },
					headerBackTitle: ' ' }}
				/>
				<Member.Screen name="Soilmoisture1" component={Soilmoisture1}
					options={{ headerTitle: 'ความชื้นดินโซน1',
					headerStyle: {
						backgroundColor: "#00BE00",
					  },
					headerTintColor:'#fff',
					headerTitleStyle: {
						fontWeight:'bold',
					  },
					headerBackTitle: ' ' }}
				/>
				<Member.Screen name="Soilmoisture2" component={Soilmoisture2}
					options={{ headerTitle: 'ความชื้นดินโซน2',
					headerStyle: {
						backgroundColor: "#00BE00",
					  },
					headerTintColor:'#fff',
					headerTitleStyle: {
						fontWeight:'bold',
					  },
					headerBackTitle: ' ' }}
				/>
				<Member.Screen name="Soilmoisture3" component={Soilmoisture3}
					options={{ headerTitle: 'ความชื้นดินโซน3',
					headerStyle: {
						backgroundColor: "#00BE00",
					  },
					headerTintColor:'#fff',
					headerTitleStyle: {
						fontWeight:'bold',
					  },
					headerBackTitle: ' ' }}
				/>
				<Member.Screen name="Soiltemperature1" component={Soiltemperature1}
					options={{ headerTitle: 'อุณหภูมิอากาศโซน1',
					headerStyle: {
						backgroundColor: "#00BE00",
					  },
					headerTintColor:'#fff',
					headerTitleStyle: {
						fontWeight:'bold',
					  },
					headerBackTitle: ' ' }}
				/>
				<Member.Screen name="Soiltemperature2" component={Soiltemperature2}
					options={{ headerTitle: 'อุณหภูมิอากาศโซน2',
					headerStyle: {
						backgroundColor: "#00BE00",
					  },
					headerTintColor:'#fff',
					headerTitleStyle: {
						fontWeight:'bold',
					  },
					headerBackTitle: ' ' }}
				/>
				<Member.Screen name="Soiltemperature3" component={Soiltemperature3}
					options={{ headerTitle: 'อุณหภูมิอากาศโซน3',
					headerStyle: {
						backgroundColor: "#00BE00",
					  },
					headerTintColor:'#fff',
					headerTitleStyle: {
						fontWeight:'bold',
					  },
					headerBackTitle: ' ' }}
				/>
			</Member.Navigator>
		)
	}

	//สร้างการเชื่อมต่อการดูสถาณะการทำงานกับหน้าจอหลัก
	//สร้าง Bottom Navigation
	let [cart, setCart] = React.useState()

	const Tab = createBottomTabNavigator()
	return (
		<cartContext.Provider value={[cart, setCart]}>
			<NavigationContainer>
				<Tab.Navigator tabBarOptions={{
					labelStyle: { fontSize: 14 },
					showLabel: true,
					activeTintColor: '#00BE00',
					inactiveTintColor: 'blue'
				}}>

					{/* ปุ่ม ควบคุม ต้องเชื่อมโยงไปยังกลุ่ม control */}
					<Tab.Screen name="ProductStack" component={ProductStack} options={{
						tabBarLabel: 'หน้าหลัก',
						tabBarIcon: ({ color, size }) => {
							return <Ionicons name="md-home" size={20} color={color} />
						}
					}} />

					<Tab.Screen name="TabCart" component={TabCart} options={{
						tabBarLabel: 'แจ้งเตือน',
						tabBarIcon: ({ color, size }) => {
							return <Ionicons name="notifications" size={20} color={color} />
						},
						tabBarBadge: cart
					}} />

					{/* ปุ่ม ตั้งค่าการแจ้งเตือน ต้องเชื่อมโยงไปยังกลุ่ม setting */}
					<Tab.Screen name="MemberStack" component={MemberStack} options={{
						tabBarLabel: 'ตั้งค่า',
						tabBarIcon: ({ color, size }) => {
							return <Ionicons name="settings" size={18} color={color} />
						}
					}} />

				</Tab.Navigator>
			</NavigationContainer>
		</cartContext.Provider>
	)
	
}

