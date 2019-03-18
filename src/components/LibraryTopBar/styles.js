import { getStatusBarHeight } from "react-native-status-bar-height";

export default {
    headerContainer: {
        paddingTop: getStatusBarHeight(),
        height: 56 + getStatusBarHeight()
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
        alignSelf: "center"
    },
    headerRight: {
        flex: 0.3
    },
    leftButton: {
        position: "absolute",
        left: 0,
        top: 8
    }
};
