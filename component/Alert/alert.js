import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Modal from 'react-native-modal';

class alert extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: this.props.isVisible,
        };
    }


    componentDidUpdate(prevProp, prevState) {
        if (prevProp.isVisible !== this.props.isVisible)
            this.setState({ visible: this.props.isVisible });
    }

    render() {
       
        return (
            <Modal
                isVisible={this.state.visible}
                animationIn={"zoomIn"}
                backdropOpacity={0}
                animationOut={"zoomOut"}
                animationInTiming={0}
                animationOutTiming={0}
                onBackButtonPress={() => {
                    this.setState({ visible: !this.state.visible });
                }}
            >
                <View
                    style={{
                        justifyContent: "center", alignItems: "center"
                    }}
                >
                    <View
                        style={{
                            width: wp(80), backgroundColor: "#fff",
                            borderRadius: wp(2), elevation: wp(2), alignItems: "center"
                        }}
                    >
                        <Text style={{ fontFamily: "sans", fontSize: wp(5), marginTop: hp(2) }}>پیام</Text>
                        <View
                            style={{
                                height: hp(0.1), backgroundColor: "#E5E5E5", width: wp(70),
                                marginTop: hp(1.5)
                            }}></View>
                        <View style={{ width: wp(70), marginVertical: hp(3) }}>
                            <Text
                                style={{
                                    color: "#263238", fontFamily: "sansm", fontSize: wp(3.5),
                                    textAlign: "center"
                                }}
                            >{this.props.text}</Text>
                        </View>
                        <View style={{ justifyContent: "center", alignItems: "center", marginTop: hp(1), marginBottom: hp(2.5) }} >
                            <TouchableOpacity
                                style={{
                                    width: wp(20), height: hp(5), backgroundColor: "#980000"
                                    , borderRadius: wp(3), elevation: wp(2),
                                    justifyContent: "center", alignItems: "center"
                                }}
                                onPress={() => {
                                    this.setState({ visible: !this.state.visible });
                                }}
                            >
                                <Text style={{ fontFamily: "sans", fontSize: wp(3.8), color: "#fff" }}>{this.props.closeText}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

            </Modal>
        );
    }
}

export default alert;
