import React, {Component} from "react";
import {createAppContainer} from "react-navigation";
import {Root} from "native-base";
import SwitchNavigator from "./SwitchNavigator";

const AppContainer = createAppContainer(SwitchNavigator);

export default class App extends Component {
    render() {
        return (
            <Root>
                <AppContainer/>
            </Root>
        );
    }
}

