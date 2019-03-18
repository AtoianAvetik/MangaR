import React from "react";
import { createDrawerNavigator, createStackNavigator, DrawerActions } from "react-navigation";
import LibraryTopBar from "../components/LibraryTopBar";
import Library from "../containers/LibraryContainer";
import LibraryItem from "../containers/LibraryItemContainer";

const DrawerRight = createDrawerNavigator(
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

export default createStackNavigator(
    {
        Library: {
            screen: DrawerRight
        },
        LibraryItem: {
            screen: LibraryItem
        }
    },
    {
        headerMode: "float",
        mode: "card ",
        navigationOptions: ({ navigation }) => ({
            header: <LibraryTopBar navigation={navigation}/>
        })
    }
);
