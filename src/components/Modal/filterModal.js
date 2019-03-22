import React, {Component} from "react";
import Modal from "react-native-modalbox";
import {StatusBar} from "react-native";
import {Container, View, Text, Button, Icon, Header} from "native-base";
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
            <Container style={styles.container}>
                <Modal
                    coverScreen={true}
                    isOpen={show}
                    backdrop={false}
                    onClosed={handleHide}
                >
                    <View style={[styles.contentModal, styles.modalBasic]}>
                        <StatusBar animated={true} backgroundColor="rgba(0,0,0,0.7)"  barStyle="light-content"/>
                        <Button transparent style={styles.btnClose} onPress={handleHide}>
                            <Icon name="close" style={styles.txtMessage}/>
                        </Button>
                        <Text style={styles.text}>{message}</Text>
                    </View>
                </Modal>
            </Container>
        );
    }
}

export default connectModal({
    name: "filterModal",
    destroyOnHide: true
})(FilterModal);
