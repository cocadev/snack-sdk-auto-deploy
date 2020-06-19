const username = ''; //fill the blanks
const password = ''; //fill the blanks
const appId = ''; //fill the blanks
const sdkVersion = '37.0.0';

const files = {
    "App.js": {
        "type": "CODE",
        "contents": `
import React from 'react';
import { AppLoading, } from 'expo';
import { createAppContainer, createSwitchNavigator, } from 'react-navigation';
import { createStackNavigator, } from 'react-navigation-stack';
import { createDrawerNavigator, } from 'react-navigation-drawer';
import * as Font from 'expo-font';
import { Ionicons,  } from '@expo/vector-icons';
import bbbb from './screens/bbbb';

const aaaa = createStackNavigator(
    {
        bbbb: { screen: bbbb },
    },
    {
        initialRouteName: 'bbbb',
        headerMode: 'none',
    }
);

const RootStack = createSwitchNavigator(
    {
        aaaa: { screen: aaaa },
    },
    {
        initialRouteName: 'aaaa',
    }
);

export default class App extends React.Component { 
    state = {
        isReady: false,
    };

    render () { 
    if (!this.state.isReady) {
        return (
        <AppLoading
            startAsync={this._cacheResourcesAsync}
            onFinish={() => this.setState({ isReady: true })}
            onError={console.warn}
        />
        ); 
    }
    const AppRoot = createAppContainer(RootStack);
    return ( 
        <AppRoot />
    ); 
    } 

    async _cacheResourcesAsync() {
        await Font.loadAsync({ Roboto: require('native-base/Fonts/Roboto.ttf'), Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'), ...Ionicons.font, });
    return true;
    }
}
        `},

    "screens/bbbb.js": {
        "type": "CODE",
        "contents": `
import React from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content, H1,  } from 'native-base';
import { Image, Dimensions, View,  } from 'react-native';

export default class bbbb extends React.Component { 
    render () {
        let screenHeight = Dimensions.get("window").height - 120;
        return (
            <Container style={{ backgroundColor: '#ffffff', flex: 1 }}> 
                <Image style={{ width: '100%', height: 40, resizeMode: 'stretch', bottom:0, position: 'absolute' }} source={{ uri: 'https://botmetadata.blob.core.windows.net/public/themes/light/assets/bar.png'}} />
                <Header transparent>
            <Left>
                
            </Left>
            <Body>
                <Button transparent  >
            <Image style={{ width: 28, height: 28, marginRight: 10, resizeMode: 'stretch', color: '#212121' }} source={{ uri: 'https://botmetadata.blob.core.windows.net/public/themes/light/assets/light.png'}} />
            <Title style={{ color: '#666666' }} >My App</Title>
        </Button>
            </Body>
            <Right>
                
            </Right>
        </Header>
        <Content style={{ padding: 10 }}>
            <View style={{ borderWidth: 10, borderColor: '#666666', borderStyle: 'dashed', borderRadius: 30, flex: 1, height: screenHeight, margin: 20, justifyContent: 'center', alignItems: 'center' }}>
            <H1 style={{ color: '#666666', fontWeight: 'bold', fontFamily: 'Roboto' }} >Content Here</H1>
        </View>
        </Content>
            </Container>
        ); 
            } 
        }
        `}
};

const dependencies = {
    "react-navigation": {
        "version": "4.3.3"
    },
    "react-native-screens": {
        "version": "2.0.0-alpha.12"
    },
    "react-native-reanimated": {
        "version": "1.8.0"
    },
    "@react-navigation/core": {
        "version": "3.0.0"
    },
    "@react-navigation/native": {
        "version": "3.1.1"
    },
    "react-native-safe-area-context": {
        "version": "0.7.3"
    },
    "@react-native-community/masked-view": {
        "version": "0.1.7"
    },
    "react-navigation-stack": {
        "version": "2.3.6"
    },
    "react-navigation-drawer": {
        "version": "2.4.10"
    },
    "native-base": {
        "version": "2.13.8"
    },
    "native-base/Fonts/Roboto.ttf": {
        "version": "latest"
    },
    "native-base/Fonts/Roboto_medium.ttf": {
        "version": "latest"
    }
};

export { username, password, appId, files, dependencies, sdkVersion }