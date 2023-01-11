import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Modal } from 'react-native'
import styles from './styles'
import { Ionicons } from '@expo/vector-icons'
import { colorGreyDark1, colorGreyLight4, colorPrimary } from '../../../../assets/base'
import { Button } from '@rneui/base'
import SelectItem from '../SelectItem/SelectItem'

const SelectList = ({ visible, data, handleModalVisible, dataType }) => {

    return (
        <Modal
            animationType='slide'
            transparent={true}
            visible={visible}
        >
            <ScrollView style={styles.mainContainer}>
                {data.map((item) => (
                    <SelectItem
                        key={item}
                        item={item}
                        data={data}
                        dataType={dataType}
                    />
                ))}
            </ScrollView>
            <View style={{ backgroundColor: colorGreyDark1, opacity: 0.9 }}>
                <Button
                    style={styles.button}
                    color={colorPrimary}
                    onPress={handleModalVisible}
                >
                    <Ionicons name='close' color={colorGreyLight4} size={25} />
                    CLOSE
                </Button>
            </View>
        </Modal>
    )
}

export default SelectList