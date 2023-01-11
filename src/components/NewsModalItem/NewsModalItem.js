import {
    View,
    Text,
    Modal,
    ImageBackground,
    TouchableOpacity,
    ScrollView
} from 'react-native'
import React from 'react'
import styles from './styles'
import { Ionicons } from '@expo/vector-icons'
import { colorGreyLight4 } from '../../../assets/base'
import moment from 'moment'

const NewsModalItem = ({ item, visible, handleModalVisible }) => {

    return (
        <Modal
            animationType='slide'
            transparent={true}
            visible={visible}
        >
            <ScrollView style={styles.container}>

                <ImageBackground
                    style={styles.imageBackground}
                    imageStyle={styles.imageStyle}
                    source={{ uri: item.urlToImage }}
                >
                    <View style={styles.imageContainer}>
                        <TouchableOpacity
                            style={styles.iconContainer}
                            onPress={handleModalVisible}
                        >
                            <Ionicons name='close' size={35} color={colorGreyLight4} />
                        </TouchableOpacity>
                        <View style={styles.titleContainer}>
                            <Text style={styles.sourceLabel}>{item?.source?.name}</Text>
                            <Text style={styles.titleLabel}>{item?.title}</Text>
                            <Text style={styles.timeLabel}>{moment.parseZone(item?.publishedAt).fromNow()}</Text>
                        </View>
                    </View>
                </ImageBackground>
                <View style={styles.contentContainer}>
                    <Text style={styles.contentText}>{item?.content}</Text>
                </View>
            </ScrollView>
        </Modal >

    )
}

export default NewsModalItem