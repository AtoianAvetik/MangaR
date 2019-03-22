import React, {Component} from "react";
import Modal from "react-native-modalbox";
import {View, Text, Button, Icon} from "native-base";
import {connectModal} from "redux-modal";
import styles from "./styles";


class FilterModal extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        const {show, handleHide, message} = this.props;
        return (
            <View style={styles.container}>
                <Modal
                    coverScreen={true}
                    isOpen={show}
                    backdrop={false}
                    onClosed={handleHide}
                >
                    <View style={[styles.contentModal, styles.modalBasic]}>
                        <Button transparent style={styles.btnClose} onPress={handleHide}>
                            <Icon name="close" style={styles.txtMessage}/>
                        </Button>
                        <Text style={styles.text}>{message}</Text>
                    </View>
                </Modal>
            </View>
        );
    }
}

export default connectModal({
    name: "filterModal",
    destroyOnHide: true
})(FilterModal);
