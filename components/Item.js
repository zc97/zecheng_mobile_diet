import { StyleSheet, Text, View } from 'react-native'
import React, {useContext} from 'react'
import AppStyles from '../styles/AppStyles'
import Ionicons from '@expo/vector-icons/Ionicons';


export default function Item({ itemData, type }) {
	return (
		<View style={styles.itemContainer}>
			<View style={styles.nameContainer}>
				<Text style= {styles.itemName}>{(type === 'activity') ? itemData.activity : itemData.description}</Text>
				<Ionicons style={styles.warning} name="warning" size={24} color="orange" />
			</View>
			<View style = {styles.dateContainer}>
				<Text>{itemData.date}</Text>
			</View>
			<View style = {styles.timeCaloriesContainer}>
				<Text>{(type === 'activity') ? itemData.time : itemData.calories}</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	itemContainer: {
		flexDirection: 'row',
		backgroundColor: AppStyles.themeColor,
		alignItems: "center",
		borderWidth: 1,
		marginHorizontal: 20,
		marginVertical: 10,
		shadowColor: 'gray',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.5,
		borderRadius: 5,
	},
	nameContainer: {
		flex: 2,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		margin: 5,
	},
	itemName: {
		fontSize: 15,
		color: 'white',
	},
	warning: {
	},
	dateContainer: {
		flex: 2,
		backgroundColor: 'white',
		margin: 5,
		padding: 5,
	},
	timeCaloriesContainer: {
		flex: 1,
		backgroundColor: 'white',
		margin: 5,
		padding: 5,
	}
})