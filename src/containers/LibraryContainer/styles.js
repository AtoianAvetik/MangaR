import {getStatusBarHeight} from "react-native-status-bar-height";

export default {
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    statusBar: {
        backgroundColor: "rgba(0,0,0,0.05)"
    },
    toolbar: {
        container: {
            height: 56 + getStatusBarHeight(),
            paddingTop: getStatusBarHeight(),
            backgroundColor: "#f7f7f7"
        },
        leftElement: {color: "#8e8e8e"},
        titleText: {color: "#444444", fontWeight: "300"},
        rightElement: {color: "#8e8e8e", alignItems: "center"},
    },
    popupMenu: {
        popupMenuActionsShift: {
            left: 20
        },
        popupMenuIcon: {
            color: "#8e8e8e"
        }
    },
    text: {
        alignSelf: "center",
        marginBottom: 7
    },
    mb: {
        marginBottom: 15
    }
};
