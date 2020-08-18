/**
 * Author: Lubem Tser
 * Description: Office App for taking attendance of staff that come to the office
 * Page: this is the style sheet used across all the pages of the application
 */
import {StyleSheet, Platform} from "react-native"

const stylesheet = StyleSheet.create({
    container: {
        flex: 1, alignItems: 'center', justifyContent: 'center', paddingTop: (Platform.OS === 'ios')? 20:0,
    },
    header: {
        height: 50,
        backgroundColor: '#2e8b57',
    },
    splash: {
        justifyContent: 'center', alignItems: 'center', flex:1, width: '100%', height: '100%', margin: 0,
    },
    formTitle: {
        fontSize: 30, fontWeight: 'bold', marginVertical: 18,
    },
    submitButton: {
        backgroundColor: '#838b83', shadowColor: '#c1cdc1', shadowOpacity: 0.2, elevation: 3, shadowOffset: {width: 0, height: 10},
        marginVertical: 10, paddingVertical: 4, alignItems: 'center', borderRadius: 20,
    },
    buttonText: {
        color: '#fff', fontSize: 16, paddingVertical: 4,
    },
    listItem: {
        backgroundColor: '#838b83', shadowColor: '#c1cdc1', shadowOpacity: 0.2, elevation: 3, shadowOffset: {width: 0, height: 10}, marginVertical: 3, paddingHorizontal: 2,
    },
    imageContainer: {
        borderRadius: 10,
        width: 300, height: 360, borderColor: '#838b83', borderWidth: 2, flex:1, justifyContent: 'center', alignItems: 'center',
    },
    staffDetailsText: {
        fontSize:16, paddingVertical:3,
    }
})

export default stylesheet;
