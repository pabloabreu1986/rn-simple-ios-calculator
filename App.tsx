import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'

// screens
import { Calculator } from './src/screens'

// styles
import { styles } from './src/theme/appTheme'

const App = () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="black" barStyle="light-content" />
            <Calculator />
        </SafeAreaView>
    )
}

export default App
