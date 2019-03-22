import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {
    View,
    UIManager,
    findNodeHandle,
    ViewPropTypes as RNViewPropTypes,
    StyleSheet,
} from "react-native";
import {IconToggle} from "react-native-material-ui";

const ViewPropTypes = RNViewPropTypes || View.propTypes;

const propTypes = {
    style: PropTypes.shape({
        popupMenuContainer: ViewPropTypes.style,
        popupMenuIcon: ViewPropTypes.style,
        popupMenuActionsShift: ViewPropTypes.style,
    }),
    size: PropTypes.number,
    actions: PropTypes.any, // eslint-disable-line
    onPress: PropTypes.func,
    /**
     * Name of Icon and Icon set that should be use. From react-native-vector-icons
     */
    iconColor: PropTypes.string,
    iconName: PropTypes.string,
    iconSet: PropTypes.string,
};
const defaultProps = {
    actions: null,
    onPress: null,
    size: null,
    style: {},
    iconName: "more-vert",
    iconSet: null,
};

function getStyles(props) {
    const popupMenuIconStyles = {color: props.iconColor};

    return {
        popupMenuContainer: [
            props.style.popupMenuContainer,
        ],
        popupMenuIcon: [
            popupMenuIconStyles,
            props.style.popupMenuIcon,
        ],
        popupMenuActionsShift: [
            props.style.popupMenuActionsShift,
        ],
    };
}

class PopupMenu extends PureComponent {
    onError() {
        console.log("Popup Error");
    }

    onPress = items => {
        const {onPress} = this.props;

        UIManager.showPopupMenu(
            findNodeHandle(this.menu),
            items,
            this.onError,
            (result, index) => {
                if (onPress) {
                    onPress({action: "popupMenu", result, index});
                }
            },
        );
    };

    render() {
        const {actions, size, iconName, iconSet} = this.props;
        const styles = getStyles(this.props, this.context, this.state);

        if (!actions) {
            return null;
        }

        let actionsMap = [];
        let result = [];

        if (actions) {
            if (typeof actions === "string") {
                actionsMap.push(actions);
            } else if (Array.isArray(actions)) {
                actionsMap = actions;
            } else if (actions.actions) {
                actionsMap = actions.actions;
            }
        }

        const flattenPopupMenuContainer = StyleSheet.flatten(styles.popupMenuContainer);
        const flattenPopupMenuIcon = StyleSheet.flatten(styles.popupMenuIcon);
        const flattenPopupMenuActionsShift = StyleSheet.flatten(styles.popupMenuActionsShift);

        return (
            <View style={flattenPopupMenuContainer}>
                <View key="popupMenuIcon">
                    {/* We need this view as an anchor for drop down menu. findNodeHandle can
                        find just view with width and height, even it needs backgroundColor :/
                    */}
                    <View
                        ref={c => {
                            this.menu = c;
                        }}
                        style={{
                            ...{
                                backgroundColor: "transparent",
                                width: 1,
                                height: StyleSheet.hairlineWidth,
                            },
                            ...StyleSheet.absoluteFill,
                            ...flattenPopupMenuActionsShift,
                        }}
                    />
                    <IconToggle
                        name={iconName}
                        iconSet={iconSet}
                        color={flattenPopupMenuIcon.color}
                        size={size}
                        onPress={() => this.onPress(actions)}
                        style={flattenPopupMenuIcon}
                    />
                </View>
            </View>
        );
    }
}

PopupMenu.propTypes = propTypes;
PopupMenu.defaultProps = defaultProps;

export default PopupMenu;
