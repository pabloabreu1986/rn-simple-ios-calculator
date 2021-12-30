import { useState } from 'react'
import { isFractional } from '../../utils/utilities'

export const useCalculator = () => {
    const [result, setResult] = useState('0')
    const [previousResult, setPreviousResult] = useState('0')
    const [operation, setOperation] = useState('.')

    // event handlers
    const clear = () => {
        setResult('0')
        setPreviousResult('0')
    }

    const changeSymbol = () => {
        if (result !== '0') {
            if (result.startsWith('-')) {
                setResult(result.slice(1))
            } else {
                setResult('-' + result)
            }
        }
    }

    const del = () => {
        const newValue: string =
            result.includes('-') && result.length > 2
                ? result.slice(0, -1)
                : '0'
        setResult(newValue)
    }

    const addValue = (value: string) => {
        let newValue: string
        switch (value) {
            case '0':
                if (isFractional(result)) {
                    newValue = result + value
                    setResult(newValue)
                }
                newValue = result !== '0' ? result + value : value
                setResult(newValue)
                break

            case '.':
                if (!isFractional(result)) {
                    setResult(result + value)
                }
                break

            default:
                newValue = result !== '0' ? result + value : value
                setResult(newValue)
                break
        }
    }

    const addOperation = (newOperation: string) => {
        setPreviousResult(result)
        setOperation(newOperation)
        setResult('0')
    }

    const executeOperation = () => {
        switch (operation) {
            case '/':
                if (previousResult === '0') {
                    return setResult('0')
                }
                setResult('' + Number(previousResult) / Number(result))
                break

            case 'x':
                setResult('' + Number(previousResult) * Number(result))
                break

            case '-':
                setResult('' + (Number(previousResult) - Number(result)))
                break

            default:
                setResult('' + (Number(previousResult) + Number(result)))
                break
        }
        setPreviousResult('0')
    }

    return {
        result,
        previousResult,
        operation,
        clear,
        changeSymbol,
        del,
        addValue,
        addOperation,
        executeOperation,
    }
}
