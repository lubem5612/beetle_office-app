import React, {Component, Fragment} from "react"
import {ScrollView, View, Text, TouchableOpacity} from "react-native";
import {Input, Header, Image} from "react-native-elements"
import stylesheet from "../../stylesheet"
import Icon from "react-native-vector-icons/FontAwesome";

export default class Login extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <Fragment>
                <Header centerComponent={{text: 'Login', style: {color: '#fff', marginTop: (Platform.OS === 'ios')? 0 : -24, fontSize: 24}}}
                        containerStyle={stylesheet.header}/>
                <ScrollView style={{marginTop: 18}}>
                    <View style={stylesheet.container}>
                        <Image style={{width: 80, height: 80,}} source={require('../../images/office-logo.png')}/>
                    </View>
                    <View style={stylesheet.container}>
                        <Input containerStyle={{marginVertical: 15, paddingVertical: 0}} placeholder={'email or username'} leftIconContainerStyle={{marginRight: 15,}} leftIcon={<Icon name={'user'} size={24} color={'black'}/>}/>
                        <Input secureTextEntry={true} containerStyle={{paddingVertical: 0}} placeholder={'password'} leftIconContainerStyle={{marginRight: 15,}} leftIcon={<Icon name={'lock'} size={24} color={'black'}/>}/>
                    </View>
                    <TouchableOpacity style={stylesheet.submitButton} onPress={(event)=>{
                        const {navigate} = this.props.navigation;
                        navigate('Verify', {item: 'is logged in'});
                    }}>
                        <Text style={stylesheet.buttonText}>SIGN IN</Text>
                    </TouchableOpacity>
                    <View style={stylesheet.container}>
                        <TouchableOpacity style={{marginTop: 12,}} onPress={()=> this.props.navigation.navigate('Password')} >
                            <Text style={{textDecorationLine: 'underline', fontSize: 18, color: '#ffa500'}}>Forgot password?</Text>
                        </TouchableOpacity>
                        <View style={{flexDirection: 'row', paddingVertical: 20 }}>
                            <Text style={{fontSize: 18}}>Don't have an account?</Text>
                            <TouchableOpacity onPress={()=> this.props.navigation.navigate('Register')} >
                                <Text style={{paddingLeft: 8, fontStyle: 'italic', color: '#ffa500', fontSize: 18}}>Register</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </Fragment>
        )
    }
}
