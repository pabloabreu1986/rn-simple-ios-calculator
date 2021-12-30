import React from 'react'
import {
    StyleProp,
    Text,
    TextStyle,
    TouchableOpacity,
    View,
} from 'react-native'

// styles
import { styles } from './styles'

interface ButtonProps {
    label: string
    type?: 'main' | 'opperation' | 'zero' | 'number'
    onPress: (value: string) => void
}

export const Button = ({ label, onPress, type = 'number' }: ButtonProps) => {
    const buttonStyle: StyleProp<TextStyle> = [styles.container]
    const labelStyle: StyleProp<TextStyle> = [styles.label]
    switch (type) {
        case 'main':
            buttonStyle.push(styles.main)
            labelStyle.push(styles.mainLabel)
            break

        case 'opperation':
            buttonStyle.push(styles.opperation)
            labelStyle.push(styles.opperationLabel)
            break

        case 'zero':
            buttonStyle.push(styles.zero)
            labelStyle.push(styles.zeroLabel)
            break

        default:
            break
    }

    return (
        <TouchableOpacity activeOpacity={0.75} onPress={() => onPress(label)}>
            <View style={buttonStyle}>
                <Text style={labelStyle}>{label}</Text>
            </View>
        </TouchableOpacity>
    )
}
