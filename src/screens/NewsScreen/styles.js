import { StyleSheet } from "react-native";
import { colorGreyDark1, colorGreyLight3, colorGreyLight4, colorPrimary } from "../../../assets/base";

const styles = StyleSheet.create({
    headerContainer: {
        width: '100%',
        paddingTop: 35,
        backgroundColor: colorGreyDark1,
        paddingBottom: 10,
        paddingLeft: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    categoryLabel: {
        fontSize: 18,
        fontWeight: "bold",
        color: colorGreyLight4,
        fontStyle: 'italic',
        marginBottom: 10
    },

    dotContainer: {
        flexDirection: 'row'
    },
    dot: {
        width: 15,
        height: 15,
        borderRadius: 7.5,
        marginRight: 5,
        borderWidth: 1.5,
        borderColor: '#ffffff',
    },
    dotActive: {
        backgroundColor: colorPrimary,
        borderColor: colorPrimary
    },

    dropDown: {
        right: 15,
        flexDirection: 'row'
    }
})

export default styles