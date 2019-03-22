import React from "react";
import {createStackNavigator} from "react-navigation";
import Library from "../containers/LibraryContainer";
import LibraryItem from "../containers/LibraryItemContainer";
import Viewer from "../containers/ViewerContainer";
import TransitionConfiguration from "../navigation/transitions";

export default  createStackNavigator(
    {
        Library: {
            screen: Library
        },
        LibraryItem: {
            screen: LibraryItem
        },
        Viewer: {
            screen: Viewer,
        },
    },
    {
        headerMode: "none",
        mode: "card ",
        transitionConfig: TransitionConfiguration,
        navigationOptions: ({navigation}) => {
            let drawerLockMode = "unlocked";
            if (navigation.state.index > 0) {
                drawerLockMode = "locked-closed";
            }

            return {
                drawerLockMode,
            };
        }
    }
);
