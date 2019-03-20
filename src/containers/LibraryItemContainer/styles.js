import {getStatusBarHeight} from "react-native-status-bar-height";

export default {
    container: {
        flex: 0.8,
        backgroundColor: "#fff"
    },
    header: {
        container: {
            height: 56 + getStatusBarHeight(),
            paddingTop: getStatusBarHeight()
        }
    },
    content: {
        paddingTop: 100
    },
    background: {
        container: {
            flex: 1,
            height: 250,
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 0,
        },
        gradient: {
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 150,
            zIndex: 0,
        },
    }
};
