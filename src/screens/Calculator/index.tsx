import React from 'react'
import { View, Text } from 'react-native'

// components
import { Button } from '../../components'
// hooks
import { useCalculator } from '../../hooks/useCalculator/index'
// utils
import { numberFormatter } from '../../utils/formatters'
// styles
import { styles } from './styles'

export const Calculator = () => {
    const {
        result,
        previousResult,
        clear,
        changeSymbol,
        del,
        addValue,
        addOperation,
        executeOperation,
    } = useCalculator()

    return (
        <View style={styles.container}>
            {previousResult != '0' && (
                <Text style={styles.previousResult}>
                    {numberFormatter(previousResult)}
                </Text>
            )}
            <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
                {numberFormatter(result)}
            </Text>
            {/** --- Buttons row --- */}
            <View style={styles.rowContainer}>
                <Button label="C" onPress={clear} type="main" />
                <Button label="+/-" onPress={changeSymbol} type="main" />
                <Button label="del" onPress={del} type="main" />
                <Button
                    label="/"
                    onPress={() => addOperation('/')}
                    type="opperation"
                />
            </View>
            {/** --- Buttons row --- */}
            <View style={styles.rowContainer}>
                <Button label="7" onPress={() => addValue('7')} />
                <Button label="8" onPress={() => addValue('8')} />
                <Button label="9" onPress={() => addValue('9')} />
                <Button
                    label="x"
                    onPress={() => addOperation('x')}
                    type="opperation"
                />
            </View>
            {/** --- Buttons row --- */}
            <View style={styles.rowContainer}>
                <Button label="4" onPress={() => addValue('4')} />
                <Button label="5" onPress={() => addValue('5')} />
                <Button label="6" onPress={() => addValue('6')} />
                <Button
                    label="-"
                    onPress={() => addOperation('-')}
                    type="opperation"
                />
            </View>
            {/** --- Buttons row --- */}
            <View style={styles.rowContainer}>
                <Button label="1" onPress={() => addValue('1')} />
                <Button label="2" onPress={() => addValue('2')} />
                <Button label="3" onPress={() => addValue('3')} />
                <Button
                    label="+"
                    onPress={() => addOperation('+')}
                    type="opperation"
                />
            </View>
            {/** --- Buttons row --- */}
            <View style={styles.rowContainer}>
                <Button label="0" onPress={() => addValue('0')} type="zero" />
                <Button label="." onPress={() => addValue('.')} />
                <Button
                    label="="
                    onPress={executeOperation}
                    type="opperation"
                />
            </View>
        </View>
    )
}
