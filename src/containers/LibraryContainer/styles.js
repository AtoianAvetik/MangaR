import {getStatusBarHeight} from "react-native-status-bar-height";

export default {
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    toolbar: {
        container: {
            height: 56 + getStatusBarHeight(),
            paddingTop: getStatusBarHeight(),
            backgroundColor: "#fff",
        },
        leftElement: {color: "#000"},
        titleText: {color: "#000"},
        rightElement: {color: "#000"},
    },
    popupMenu: {
        popupMenuActionsShift: {
            left: 20
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
