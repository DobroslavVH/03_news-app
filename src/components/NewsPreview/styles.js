import { Dimensions, StyleSheet } from "react-native";
import {
    colorGreyDark1,
    colorGreyDark2,
    colorGreyDark3,
    colorPrimary
} from "../../../assets/base";

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    bottomRowContainer: {
        flexDirection: 'row',
        paddingVertical: 10,
        width: '100%',
        justifyContent: 'space-between'
    },
    iconCointainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    divider: {
        borderBottomWidth: 2,
        borderColor: colorGreyDark3
    },
    image: {
        width: Dimensions.get('window').width - 20,
        height: Dimensions.get('window').width / 2
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colorGreyDark1
    },
    timeLabel: {
        color: colorGreyDark2,
        marginBottom: 5
    },
    sourceText: {
        fontStyle: 'italic',
        fontSize: 15,
        color: colorPrimary,
        fontWeight: 'bold'
    }
})

export default styles