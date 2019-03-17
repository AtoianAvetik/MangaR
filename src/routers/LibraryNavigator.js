import React from "react";
import {StackNavigator} from "react-navigation";
import LibraryTopBar from "../components/LibraryTopBar";
import Library from "../containers/LibraryContainer";
import LibraryItem from "../containers/LibraryItemContainer";

export default StackNavigator(
    {
        Library: {
            screen: Library
        },
        LibraryItem: {
            screen: LibraryItem
        }
    },
    {
        headerMode: "float",
        mode: "card ",
        navigationOptions: ({navigation}) => ({
            header: <LibraryTopBar navigation={navigation}/>,
        })
    }
);
