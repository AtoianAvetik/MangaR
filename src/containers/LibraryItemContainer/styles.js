import { getStatusBarHeight } from "react-native-status-bar-height";

export default {
    container: {
        flex: 1,
        backgroundColor: "#1280ee"
    },
    headerContainer: {
        paddingTop: getStatusBarHeight(),
        height: 56 + getStatusBarHeight(),
        position: "absolute",
        zIndex: 1,
        top: 0,
        left:0
    },
    headerLeft: {
        flex: 0.3,
        position: "relative",
        height: "100%"
    },
    headerBody: {
        flex: 0.4
    },
    textBody: {
        alignSelf: "center",
        color: "#fff"
    },
    headerRight: {
        flex: 0.3
    },
    leftButton: {
        position: "absolute",
        left: 0,
        top: 8
    },
    iconButton: {
        height: 45,
        width: 45,
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 0,
        paddingBottom: 0,
        alignItems: "center",
        justifyContent: "center"
    },
    content: {
        zIndex: 0
    }
};
