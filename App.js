import 'react-native-gesture-handler';
import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, Layout, Button, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons'
import { default as theme } from './custom-theme.json';
import {AppNavigator} from "./src/navigation/Navigation"; // <-- Import app theme
import {Provider} from 'react-redux';
import Store from './src/store/reduxConfig'

export default () => (
    <Provider store={ Store}>
        <IconRegistry icons={EvaIconsPack}/>
        <ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }}>
            <AppNavigator/>
        </ApplicationProvider>
    </Provider>
);
