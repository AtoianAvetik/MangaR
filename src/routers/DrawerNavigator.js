import React from "react";
import { createDrawerNavigator, DrawerActions } from "react-navigation";
import Library from "./LibraryNavigator";
import SideBar from "../containers/SlidebarContainer";
import Modal from "../containers/ModalContainer";
import Settings from "../containers/SettingsContainer";

export default createDrawerNavigator(
    {
        Library: {screen: Library},
        Modal: {screen: Modal},
        Settings: {screen: Settings}
    },
    {
        getCustomActionCreators: (route, stateKey) => {
            return {
                toggleMainDrawer: () => DrawerActions.toggleDrawer({ key: stateKey })
            };
        },
        initialRouteName: "Library",
        contentComponent: props => <SideBar {...props} />
    }
);
