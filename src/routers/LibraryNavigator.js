import React from "react";
import { createDrawerNavigator, createStackNavigator, DrawerActions } from "react-navigation";
import LibraryTopBar from "../components/LibraryTopBar";
import Library from "../containers/LibraryContainer";
import LibraryItem from "../containers/LibraryItemContainer";
import Viewer from "../containers/ViewerContainer";
import TransitionConfiguration from "../navigation/transitions";

const LibraryDrawer = createDrawerNavigator(
    {
        Library: {
            screen: Library
        }
    }, {
        getCustomActionCreators: (route, stateKey) => {
            return {
                toggleFilterDrawer: () => DrawerActions.toggleDrawer({ key: stateKey })
            };
        },
        drawerPosition: "right"
    }
);

const LibraryStack = createStackNavigator(
    {
        Library: {
            screen: LibraryDrawer
        },
        LibraryItem: {
            screen: LibraryItem
        },
    },
    {
        headerMode: "float",
        mode: "card ",
        transitionConfig: TransitionConfiguration,
        navigationOptions: ({ navigation }) => ({
            header: <LibraryTopBar navigation={navigation}/>
        }),
    }
);

export default createStackNavigator(
    {
        LibraryStack: {
            screen: LibraryStack
        },
        Viewer: {
            screen: Viewer,
        }
    },
    {
        headerMode: "none",
        mode: "card ",
        transitionConfig: TransitionConfiguration
    }
);
