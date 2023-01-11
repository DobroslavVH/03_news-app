import { StatusBar, StyleSheet, Dimensions } from "react-native";
import { colorGreyDark1, colorGreyLight1, colorPrimary } from "../../../assets/base";

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: colorGreyDark1,
        paddingBottom: 20,
        paddingTop: StatusBar.currentHeight
    },
    topContainer: {
        flex: 2,
        justifyContent: 'center'
    },
    bottomContainer: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    image: {
        height: Dimensions.get("screen").width,
        width: Dimensions.get('screen').width,
        alignSelf: 'center'
    },
    screenTitle: {
        textAlign: "center",
        color: colorGreyLight1,
        fontSize: 18,
        paddingBottom: 10,
        paddingTop: 10,
        paddingHorizontal: 30
    },
    button: {
        backgroundColor: colorPrimary,
        borderRadius: 5,
        marginHorizontal: 30,
        height: 50,
        alignItems: 'center',
    }
})

export default styles