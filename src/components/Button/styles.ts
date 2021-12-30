import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        width: 80, // probar a quiyar esto para error en iOS
        height: 80,
        backgroundColor: '#2d2d2d',
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10,
    },
    label: {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        color: '#fff',
        fontWeight: '300',
    },
    main: {
        backgroundColor: '#9b9b9b',
    },
    mainLabel: {
        color: '#000',
    },
    opperation: {
        backgroundColor: '#ff9427',
    },
    opperationLabel: {
        color: '#fff',
    },
    zero: {
        width: 180,
    },
    zeroLabel: {
        textAlign: 'left',
        paddingLeft: 30,
    },
})
