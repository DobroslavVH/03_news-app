import { View, Text, SafeAreaView, Image } from 'react-native'
import { Button } from '@rneui/base'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import styles from './styles'
import { Icon } from '@rneui/base'

const InfoScreen = () => {
    const navigation = useNavigation()
    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.topContainer}>
                <Image
                    style={styles.image}
                    source={require('../../../assets/meh_img.png')}
                />
                <Text style={styles.screenTitle}>
                    Get breaking news headlines with short description filtered by
                    your interests and country preferences.
                </Text>
            </View>
            <View style={styles.bottomContainer}>
                <Button
                    buttonStyle={styles.button}
                    onPress={() => navigation.navigate('Tabs')}
                    title={'NEXT'}
                >
                    NEXT
                    <Icon name='arrow-forward' size={25} color={'white'} />
                </Button>
            </View >
        </SafeAreaView >
    )
}

export default InfoScreen