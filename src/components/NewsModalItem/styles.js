import { Dimensions, StyleSheet } from "react-native";
import { colorGreyDark1, colorGreyLight1, colorGreyLight2, colorGreyLight4, colorPrimary } from "../../../assets/base";

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').width * 1.5

const styles = StyleSheet.create({
    container: {
        backgroundColor: colorGreyLight1,
        flex: 1,
        marginTop: 70,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    imageContainer: {
        width: WIDTH,
        height: HEIGHT,
        justifyContent: 'space-between'
    },
    imageBackground: {
        width: WIDTH,
        height: HEIGHT
    },
    imageStyle: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        opacity: 0.85
    },
    iconContainer: {
        flexDirection: 'row',
        width: WIDTH,
        justifyContent: 'flex-end',
        paddingRight: 20,
        marginTop: 20
    },
    titleContainer: {
        marginLeft: 20,
        paddingLeft: 5,
        paddingRight: 15,
        marginBottom: 15,
        borderLeftWidth: 5,
        borderLeftColor: colorPrimary,
    },
    sourceLabel: {
        fontSize: 18,
        fontStyle: 'italic',
        color: colorGreyLight2
    },
    titleLabel: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 10
    },
    timeLabel: {
        fontSize: 16,
        fontStyle: 'normal',
        color: colorGreyLight2,
        fontWeight: 'bold',
        marginTop: 10
    },
    contentContainer: {
        padding: 15
    },
    contentText: {
        fontSize: 15
    }
})

export default styles