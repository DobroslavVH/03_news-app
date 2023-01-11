import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import styles from './styles'
import { Ionicons } from '@expo/vector-icons'
import CategoryContext from '../../../context/CategoryContext'


const ItemList = ({ data, dataType }) => {

    const RenderItem = ({ item }) => {

        const { removeCategory, removeCountry } = useContext(CategoryContext)

        const dispayItem = item.charAt(0).toUpperCase() + item.slice(1)

        const handleOnPress = (item) => {
            if (dataType === 'categories') {
                removeCategory(item)
            }
            if (dataType === 'country') {
                removeCountry(item)
            }
        }

        return (
            <View style={styles.itemContainer}>
                <Text style={styles.label}>{dispayItem}</Text>
                <TouchableOpacity
                    style={styles.cancelContainer}
                    onPress={() => handleOnPress(item)}
                >
                    <Ionicons name='close' size={20} />
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View style={styles.contentContainer}>
            {data.map((item) => (<RenderItem key={item} item={item} />))}
        </View>
    )
}

export default ItemList