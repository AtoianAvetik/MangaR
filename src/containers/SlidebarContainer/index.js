import React, {Component} from "react";
import Sidebar from "../../components/Sidebar";
import {connect} from "react-redux";
import {userRequestLogout} from "../../actions";

class SidebarContainer extends Component {
    constructor(props) {
        super(props);
        this.data = [
            {
                name: "Library",
                route: "Library",
                icon: "book"
            },
            {
                name: "Modal",
                route: "Modal",
                icon: "home"
            },
            {
                name: "Settings",
                route: "Settings",
                icon: "settings"
            },
            {
                name: "Logout",
                route: "Logout",
                icon: "log-out"
            }
        ];
    }

    navigator(data) {
        if (data.route === "Logout") {
            this.props.logout();
            this.props.navigation.navigate("Login");
        } else {
            this.props.navigation.navigate(data.route);
        }
    }

    render() {
        return (
            <Sidebar
                data={this.data}
                onPress={(data) => this.navigator(data)}/>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(userRequestLogout())
});

export default connect(
    null,
    mapDispatchToProps
)(SidebarContainer);
