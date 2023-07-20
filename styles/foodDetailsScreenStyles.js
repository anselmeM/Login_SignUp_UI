// foodDetailsScreenStyles.js

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    image: {
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        height: 96,
        width: '100%',
        position: 'absolute',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 4,
        alignItems: 'center',
    },
    backButton: {
        backgroundColor: 'white',
        borderRadius: 50,
        padding: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
    heartButton: {
        backgroundColor: 'white',
        borderRadius: 50,
        padding: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
    absolute: {
        position: 'absolute',
        top: 10,
        left: 10,
    },
    childElement: {
        marginRight: 10, // Adjust this value as needed
    },
    text: {
        letterSpacing: 2, // Adjust this value as needed
    },
    // Define other styles here...
});

export default styles;
