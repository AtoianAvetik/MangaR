import React from "react";
import {createDrawerNavigator, createStackNavigator, DrawerActions} from "react-navigation";
import LibraryStack from "./LibraryNavigator";
import SideBar from "../containers/SlidebarContainer";
import Modal from "../containers/ModalContainer";
import Settings from "../containers/SettingsContainer";
import TransitionConfiguration from "../navigation/transitions";

const DrawerStack = createStackNavigator(
    {
        Library: {screen: LibraryStack},
        Modal: {screen: Modal},
        Settings: {screen: Settings}
    },
    {
        headerMode: "none",
        mode: "card ",
        initialRouteName: "Library",
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


export default createDrawerNavigator(
    {
        DrawerStack: {screen: DrawerStack}
    },
    {
        getCustomActionCreators: (route, stateKey) => {
            return {
                toggleMainDrawer: () => DrawerActions.toggleDrawer({key: stateKey})
            };
        },
        drawerPosition: "left",
        contentComponent: props => <SideBar {...props} />
    }
);
