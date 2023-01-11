import { StyleSheet } from "react-native";
import { colorGreyDark1, colorGreyLight4, colorPrimary } from "../../../../assets/base";

const styles = StyleSheet.create({
    mainContainer: {
        paddingTop: 50,
        paddingHorizontal: 30,
        opacity: 0.9,
        backgroundColor: colorGreyDark1,
        flex: 1
    },
    button: {
        backgroundColor: colorPrimary,
        borderRadius: 5,
        marginHorizontal: 30,
        height: 50,
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 70
    },
})

export default styles