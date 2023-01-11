import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React, { useState, useContext } from 'react'
import { Ionicons } from '@expo/vector-icons'
import styles from './styles'
import { colorGreyDark1, colorGreyLight4 } from '../../../assets/base'
import { Button } from '@rneui/base'
import { categories, country } from '../../constants/constants'
import SelectList from '../../components/select/SelectList/SelectList'
import CategoryContext from '../../context/CategoryContext'
import ItemList from '../../components/select/ItemList/ItemList'
import useNews from '../../hooks/useNews'
import NewsContext from '../../context/NewsContext'

const WelcomeScreen = ({ navigation }) => {
    const { selectedCategories, selectedCountries } = useContext(CategoryContext)
    const { setNews } = useContext(NewsContext)
    const [modalVisible, setModalVisible] = useState(false)
    const [modalData, setModalData] = useState(categories)
    const [dataType, setDataType] = useState('categories')

    const handleModalVisible = () => {
        setModalVisible(!modalVisible)
    }

    const handleNewsFetching = async () => {
        const newsResult = await useNews({
            countries: selectedCountries,
            categories: selectedCategories
        })

        for (let index = 0; index < newsResult.filteredData.length; index++) {
            const newsArr = newsResult.filteredData[index]
            const category = newsResult.category[index]
            const country = newsResult.country[index]

            //const newsObject = { newsArr, category, country }
            //setNews(newsObject)

            setNews({ newsArr, category, country })
            navigation.navigate('News')
        }
    }

    return (
        <ScrollView style={styles.mainContainer}>
            <View style={styles.labelContainer}>
                <Ionicons name='settings' size={70} color={colorGreyLight4} />
                <Text style={styles.label}>Choose your interests:</Text>
            </View>
            <TouchableOpacity style={styles.contentContainer}>
                <ItemList data={selectedCategories} dataType={dataType} />
                <Button
                    buttonStyle={styles.button}
                    onPress={() => {
                        setModalVisible(true)
                        setModalData(categories)
                        setDataType('categories')
                    }}
                >
                    <Ionicons name='arrow-down' size={20} color={colorGreyLight4} />
                    CATEGORY
                </Button>
            </TouchableOpacity>
            <View style={styles.labelContainer}>
                <Text style={styles.label}>Select one or several regions:</Text>
            </View>
            <View style={styles.contentContainer}>
                <ItemList data={selectedCountries} dataType={dataType} />
                <Button
                    buttonStyle={styles.button}
                    onPress={() => {
                        setModalVisible(true)
                        setModalData(country)
                        setDataType('country')
                    }}
                >
                    <Ionicons name='map' size={20} color={colorGreyLight4} />
                    COUNTRY
                </Button>
                <Button
                    buttonStyle={[styles.button, { backgroundColor: colorGreyLight4, marginTop: 20 }]}
                    onPress={() => handleNewsFetching()}
                >
                    <Ionicons name='checkmark' size={20} color={colorGreyDark1} />
                    DONE
                </Button>
            </View>
            <SelectList
                visible={modalVisible}
                handleModalVisible={handleModalVisible}
                data={modalData}
                dataType={dataType}
            />
        </ScrollView>
    )
}

export default WelcomeScreen