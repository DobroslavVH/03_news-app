import { StyleSheet } from "react-native";
import { colorGreyDark1, colorGreyLight4, colorPrimary } from "../../../../assets/base";

const styles = StyleSheet.create({
    contentContainer: {
        paddingHorizontal: 28,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 25,
        marginBottom: 10,
        justifyContent: 'flex-start'
    },



    itemContainer: {
        backgroundColor: colorGreyLight4,
        height: 25,
        borderRadius: 12.5,
        alignSelf: 'flex-start',
        marginBottom: 15,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    cancelContainer: {
        width: 25,
        height: 25,
        borderRadius: 12.5,
        backgroundColor: colorPrimary,
        justifyContent: 'center',
        alignItems: 'center'
    },
    label: {
        fontSize: 15,
        fontStyle: 'italic',
        color: colorGreyDark1,
        marginRight: 5,
        marginLeft: 9
    }
})

export default styles