import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

//import Home from './home'

import SetDurian1 from './settingzone/setDurian1'
import SetDurian2 from './settingzone/setDurian2'
import SetDurian3 from './settingzone/setDurian3'

import ConDurian1 from './ControlScreen/ConDurian1'
import ConDurian2 from './ControlScreen/ConDurian2'
import ConDurian3 from './ControlScreen/ConDurian3'
import SetCon1 from './ControlScreen/SetCon1'
import SetCon2 from './ControlScreen/SetCon2'
import SetCon3 from './ControlScreen/SetCon3'
import SetTime from './ControlScreen/SetTime'
import SetSensor from './ControlScreen/SetSensor'

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
				<Product.Screen name="SetTime" component={SetTime}
					options={{ headerTitle: 'ตั้งเวลาการทำงาน',
					headerStyle: {
						backgroundColor: "#00BE00",
					  },
					headerTintColor:'#fff',
					headerTitleStyle: {
						fontWeight:'bold',
					  },
					headerBackTitle: ' ' }}
				/>
				<Product.Screen name="SetSensor" component={SetSensor}
					options={{ headerTitle: 'ตั้งเวลาเซ็นเซอร์การทำงาน',
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

