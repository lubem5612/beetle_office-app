import React, {Component} from "react"
import {Text, View, Image, Animated} from "react-native";
import stylesheet from "../stylesheet";

export default class Splash extends Component {
    constructor(props){
        super(props)
        this.state = {
            fadeValue: new Animated.Value(0.3)
        }
    }

    componentDidMount(){
        Animated.timing(this.state.fadeValue, {
            toValue: 1,
            duration: 2000
        }).start();
    }

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#caff70'}}>
                <Animated.View style={{opacity: this.state.fadeValue,}}>
                    <Image
                        style={{width: 180, height: 180,}}
                        source={require('../images/office-logo.png')}
                    />
                </Animated.View>
            </View>
        )
    }
}

