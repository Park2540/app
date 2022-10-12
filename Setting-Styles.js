import {StyleSheet} from 'react-native'

const SettingStyles = StyleSheet.create({
    container: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		marginTop: 50
	},
	container1: {
		flex: 1,
	  },
	  container2: {
		flex: 1,
		paddingLeft:30,
		justifyContent: "center",
		alignItems: "center",
	  },
	items: {
		flexDirection:'row',
		height: 90,
        marginTop:20,
        marginLeft:20,
        marginRight:20,
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 15,
		borderRadius: 50,
		backgroundColor: '#AED6F1'
	},
	itemss: {
		flexDirection:'row',
		height: 40,
		width:60,
        marginTop:10,
        
        marginRight:20,
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 15,
		borderRadius: 50,
		backgroundColor: '#000066'
	},
    items1:{
        marginBottom: 15
    },
	buttonText: {
		fontSize: 20,
		color: '#00BE00'
	},
	buttonTextt: {
		fontSize: 20,
		color: '#fff'
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
        marginTop:20,
        marginLeft:20,
		width: 150,
		height: 150,
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 15,
		borderRadius: 20,
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
	},
	input: {
		height: 40,
		margin: 12,
		borderWidth: 1,
		padding: 10,
		borderRadius: 15,
	  },

})

export default SettingStyles