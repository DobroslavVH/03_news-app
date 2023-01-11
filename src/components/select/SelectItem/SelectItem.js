import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState, useContext, useEffect } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { colorGreyLight4 } from '../../../../assets/base'
import styles from './styles'
import CategoryContext from '../../../context/CategoryContext'

const SelectItem = ({ item, data, dataType }) => {

    const [isChecked, setIsChecked] = useState(true)

    const {
        selectedCategories,
        setCategory,
        removeCategory,
        selectedCountries,
        setCountry,
        removeCountry
    } = useContext(CategoryContext)

    const checkIsInList = () => {
        const compare = data.filter((element) => selectedCategories?.includes(element) || selectedCountries?.includes(element))
        compare.map((i) => {
            if (i === item) {
                setIsChecked(!isChecked)
            }
        })
    }

    useEffect(() => {
        checkIsInList()
    }, [])

    const handleOnPress = (item) => {
        setIsChecked(!isChecked)
        if (dataType === 'categories') {
            if (isChecked) {
                setCategory(item)
            }
            if (!isChecked) {
                removeCategory(item)
            }
        }
        if (dataType === 'country') {
            if (isChecked) {
                setCountry(item)
            }
            if (!isChecked) {
                removeCountry(item)
            }
        }
    }

    const dispayItem = item.charAt(0).toUpperCase() + item.slice(1)

    return (
        <View key={item} style={styles.rowContainer}>
            <TouchableOpacity
                style={styles.checkBox}
                onPress={() => handleOnPress(item)}
            >
                {!isChecked && <Ionicons name='checkmark' color={colorGreyLight4} size={18} />}
            </TouchableOpacity>
            <Text style={styles.text}>{dispayItem}</Text>
        </View>
    )
}

export default SelectItem

