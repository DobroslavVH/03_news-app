import { View, Text, FlatList, Dimensions, TouchableOpacity } from 'react-native'
import React, { createRef, useContext, useEffect, useState } from 'react'
import { SelectList } from 'react-native-dropdown-select-list'

import NewsHeader from '../../components/headers/NewsHeader/NewsHeader'
import NewsContext from '../../context/NewsContext/index'
import NewsPreview from '../../components/NewsPreview/NewsPreview'

import { colorGreyDark1, colorPrimary } from '../../../assets/base'
import styles from './styles'

const NewsScreen = () => {

    let screenWidth = Dimensions.get('window').width
    let screenHeight = Dimensions.get('screen').height

    const { newsObjects, category, country } = useContext(NewsContext)

    const [visibleNews, setVisibleNews] = useState([])
    const [visibleCategories, setVisibleCategories] = useState([])

    const [selectedCountry, setSelectedCountry] = useState(country[0])

    const [sliderState, setSliderState] = useState({ item: 0, offset: 0 })

    const slider = createRef(null)
    const indices = []

    console.log('visibleCategories', visibleCategories)
    console.log('visibleNews', visibleNews)
    console.log('all news objects: ', newsObjects)
    console.log('all categories: ', category)
    console.log('all countries ', country)


    // select country dropdown
    const filterDuplicates = [...new Set(country)].map((item) => item.toUpperCase())

    // filter categories to be shown    
    let index = country.indexOf(selectedCountry?.toLowerCase())
    while (index !== -1) {
        indices.push(index);
        index = country.indexOf(selectedCountry?.toLowerCase(), index + 1);
    }

    // filter news and categories depend of selected language
    useEffect(() => {
        let filteredNews = []
        let filteredCategories = []
        for (let index = 0; index < indices.length; index++) {
            let i = indices[index]
            filteredCategories.push(category[i])
            filteredNews.push(newsObjects[i])
        }
        setVisibleCategories(filteredCategories)
        setVisibleNews(filteredNews)
    }, [selectedCountry, category])

    // SCROLL ITEMS DOWN


    const noNewsMessage = () => {
        return (
            <View
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: screenHeight - 140,
                    width: screenWidth,
                    position: 'absolute'
                }}>
                <Text
                    style={{ fontSize: 25, fontWeight: 'bold', color: colorGreyDark1 }}
                >There is no more news to show!</Text>
            </View>
        )
    }

    // update slider state
    const sliderChanged = e => {
        const item = Math.round(e.nativeEvent.contentOffset.x / screenWidth)
        setSliderState({
            item: item,
            offset: item * screenWidth
        })
    }

    // single news render function
    const renderItem = ({ item }) =>
    (
        <NewsPreview
            item={item}
            categoryIndex={sliderState.item}
        />
    )

    // render each list of news depends of selected category
    const NewsRender = () => (
        <View style={{ width: screenWidth, height: screenHeight }}>
            <FlatList
                data={visibleNews[sliderState.item]}
                renderItem={renderItem}
                keyExtractor={item => item.index}
            />
            {newsObjects[sliderState.item]?.length == 0 && noNewsMessage()}
        </View>
    )

    // control burrons --- don't used
    const DirectionButton = direction => (
        <TouchableOpacity
            onPress={() => slider.current.scrollToOffset({
                offset: direction === 'BACK' ? sliderState.offset - screenWidth : sliderState.offset + screenWidth,
                animated: true
            })}
        >
            <Text style={{
                fontSize: 14,
                color: '#ffffff',
                marginHorizontal: 14,
                padding: 15,
            }}>{direction}</Text>
        </TouchableOpacity>
    )

    // render pagination dots
    const DotsIndicator = () => (
        <View style={styles.dotContainer}>
            {visibleCategories.map((_, index) => (
                <View key={index} style={[styles.dot, sliderState.item === index ? styles.dotActive : null]} />
            ))}
        </View>
    )

    return (
        <View style={{ marginBottom: 100 }}>
            <View style={styles.headerContainer}>
                <View>
                    <Text style={styles.categoryLabel}>{visibleCategories[sliderState.item]?.charAt(0).toUpperCase() + category[sliderState.item]?.slice(1) || 'No category'}</Text>
                    {DotsIndicator()}
                </View>
                <View style={styles.dropDown}>
                    <NewsHeader />
                    <SelectList
                        data={filterDuplicates}
                        placeholder={selectedCountry?.toUpperCase() || 'No country'}
                        setSelected={(item) => setSelectedCountry(item)}
                        search={false}
                        dropdownShown={false}
                    />
                </View>
            </View>
            {newsObjects.length === 0 && (
                <View style={{ justifyContent: 'center', alignItems: 'center', paddingHorizontal: 40, height: screenHeight - 150 }}>
                    <Text
                        style={{ fontSize: 25, color: colorPrimary }}
                    >
                        Ups! Sorry, but nothing to display now!
                    </Text>
                </View>
            )}
            <FlatList
                data={visibleCategories}
                renderItem={NewsRender}
                ref={slider}
                keyExtractor={(_, index) => index}
                horizontal={true}
                pagingEnabled={true}
                onScroll={sliderChanged}
                getItemLayout={(_, index) => ({
                    length: screenWidth,
                    offset: screenWidth * index,
                    index
                })}
            />
        </View>
    )
}

export default NewsScreen