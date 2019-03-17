import React from "react";
import {createDrawerNavigator} from "react-navigation";
import Library from "./LibraryNavigator";
import SideBar from "../containers/SlidebarContainer";
import Modal from "../containers/ModalContainer";
import Settings from "../containers/SettingsContainer";

export default createDrawerNavigator(
    {
        Library: {screen: Library},
        Modal: {screen: Modal},
        Settings: {screen: Settings},
    },
    {
        initialRouteName: "Library",
        contentComponent: props => <SideBar {...props} />
    }
);
