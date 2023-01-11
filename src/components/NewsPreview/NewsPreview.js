import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React, { useState, useContext } from 'react'
import styles from './styles'
import { Ionicons } from '@expo/vector-icons'
import { colorGreyDark3 } from '../../../assets/base'
import moment from 'moment'
import NewsModalItem from '../NewsModalItem/NewsModalItem'
import NewsContext from '../../context/NewsContext'

const NewsPreview = ({ item, categoryIndex }) => {
    //console.log(item)

    const { removeNewsFromList } = useContext(NewsContext)
    const [modalVisible, setModalVisible] = useState(false)

    const handleOpenNews = () => {
        setModalVisible(!modalVisible)
    }

    const handleRemoveNews = (item) => {
        removeNewsFromList({ item, categoryIndex })
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={{ uri: item.urlToImage }}
                />
                <Text style={styles.title}>{item.description}</Text>
                <View style={styles.bottomRowContainer}>
                    <View>
                        <Text style={styles.timeLabel}>{moment.parseZone(item?.publishedAt).fromNow()}</Text>
                        <Text style={styles.sourceText}>{item?.source?.name}</Text>
                    </View>
                    <View style={styles.iconCointainer}>
                        <TouchableOpacity
                            style={{ marginLeft: 10 }}
                            onPress={() => handleOpenNews(item)}
                        >
                            <Ionicons name='open' size={25} color={colorGreyDark3} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{ marginLeft: 10 }}
                            onPress={() => handleRemoveNews(item)}
                        >
                            <Ionicons name='close' size={25} color={colorGreyDark3} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.divider}></View>
                <NewsModalItem
                    item={item}
                    visible={modalVisible}
                    handleModalVisible={handleOpenNews}
                />
            </View>

        </ScrollView>
    )
}

export default NewsPreview