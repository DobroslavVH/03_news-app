import { StyleSheet } from "react-native";
import { colorGreyLight4 } from "../../../../assets/base";

const styles = StyleSheet.create({
    rowContainer: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    checkBox: {
        borderWidth: 1,
        borderColor: colorGreyLight4,
        borderRadius: 5,
        height: 20,
        width: 20,
        marginRight: 20
    },
    text: {
        fontSize: 20,
        color: colorGreyLight4
    },
})

export default styles