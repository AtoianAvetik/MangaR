import { getStatusBarHeight } from "react-native-status-bar-height";

export default {
    container: {
        flex: 0.8,
        backgroundColor: "#fff"
    },
    toolbar: {
        container: {
            height: 56 + getStatusBarHeight(),
            paddingTop: getStatusBarHeight(),
            backgroundColor: "rgba(255, 255, 255, 0)",
            elevation: 0
        },
        leftElement: {color: "#fff"},
        titleText: {color: "#fff"},
        rightElement: {color: "#fff"}
    },
    content: {
        zIndex: 0,
    },
    bgImage: {
        height: 250,
        width: null,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0
    },
    bgGradient: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: 150
    }
};
