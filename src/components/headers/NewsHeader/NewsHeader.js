import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import styles from './styles'
import { Ionicons } from '@expo/vector-icons'
import { colorGreyLight4 } from '../../../../assets/base'
import { useNavigation } from '@react-navigation/native'
import useNews from '../../../hooks/useNews'
import NewsContext from '../../../context/NewsContext'
import CategoryContext from '../../../context/CategoryContext'

const NewsHeader = () => {

    const { selectedCategories, selectedCountries, clearCategoryAndCountry } = useContext(CategoryContext)
    const { setNews, clearInformation } = useContext(NewsContext)

    const navigation = useNavigation()

    const refreshNews = async () => {
        clearInformation()
        const newsResult = await useNews({
            countries: selectedCountries,
            categories: selectedCategories
        })

        for (let index = 0; index < newsResult.filteredData.length; index++) {
            const newsArr = newsResult.filteredData[index]
            const category = newsResult.category[index]
            const country = newsResult.country[index]

            const newsObject = { newsArr, category, country }

            //clearInformation()
            setNews(newsObject)
        }
    }

    const reselect = () => {
        clearCategoryAndCountry()
        clearInformation()
        navigation.navigate('Welcome')
    }

    return (
        <View style={styles.iconContainer}>
            <TouchableOpacity
                style={{ marginRight: 15 }}
                onPress={() => refreshNews()}
            >
                <Ionicons name='refresh' color={colorGreyLight4} size={20} />
            </TouchableOpacity>
            <TouchableOpacity
                style={{ marginRight: 15 }}
                onPress={() => reselect()}
            >
                <Ionicons name='options' color={colorGreyLight4} size={20} />
            </TouchableOpacity>
        </View>
    )
}

export default NewsHeader