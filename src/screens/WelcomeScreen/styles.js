import { StyleSheet, StatusBar } from "react-native";
import { colorGreyDark1, colorGreyLight1, colorGreyLight4, colorPrimary } from '../../../assets/base/index'

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: colorGreyDark1,
        paddingBottom: 20,
        paddingTop: StatusBar.currentHeight ? StatusBar.currentHeight : 40
    },
    labelContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    contentContainer: {
        justifyContent: 'space-between',
        //paddingHorizontal: 20
    },
    label: {
        color: colorGreyLight4,
        fontSize: 20,
        marginTop: 15
    },
    button: {
        backgroundColor: colorPrimary,
        borderRadius: 5,
        marginHorizontal: 30,
        height: 50,
        alignItems: 'center',
    },

    colorPrimary: {
        color: colorPrimary
    },
    colorGreyDark1: {
        color: colorGreyDark1
    },
    colorGreyLight1: {
        color: colorGreyLight1
    },
    viewPager: {
        flex: 1
    },

    screenTitle: {
        textAlign: "center",
        color: colorGreyLight1,
        fontSize: 18,
        paddingBottom: 10,
        paddingTop: 10
    },
    screenParagraph: {
        textAlign: "center",
        color: colorGreyLight1
    },
    iconContainer: {
        alignSelf: "center",
        paddingTop: 10,
        paddingBottom: 10
    }
})

export default styles