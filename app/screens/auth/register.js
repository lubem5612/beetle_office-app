import React, {Component, Fragment} from "react"
import {ScrollView, View, Text, TouchableOpacity} from "react-native";
import {Header, Image, Input} from "react-native-elements"
import Icon from 'react-native-vector-icons/FontAwesome'
import stylesheet from "../../stylesheet"

export default class Register extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <Fragment>
                <Header centerComponent={{text: 'Register', style: {color: '#fff', marginTop: (Platform.OS === 'ios')? 0 : -24, fontSize: 24}}}
                        containerStyle={stylesheet.header} leftComponent={( <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={{marginBottom: 25}}>
                    <Icon style={{paddingLeft: 12}} color='#fff' size={20} name={'chevron-left'}/>
                </TouchableOpacity>)}/>
                <ScrollView style={{marginTop: 18}}>
                    <View style={stylesheet.container}>
                        <Image style={{width: 80, height: 80,}} source={require('../../images/office-logo.png')}/>
                    </View>
                    <View style={stylesheet.container}>
                        <Input containerStyle={{marginTop: 15, paddingVertical: 0}} placeholder={'first name'} leftIconContainerStyle={{marginRight: 15,}} leftIcon={<Icon name={'user'} size={24} color={'black'}/>}/>
                        <Input containerStyle={{marginTop: 15, paddingVertical: 0}} placeholder={'last name'} leftIconContainerStyle={{marginRight: 15,}} leftIcon={<Icon name={'user'} size={24} color={'black'}/>}/>
                        <Input containerStyle={{marginTop: 15, paddingVertical: 0}} placeholder={'username'} leftIconContainerStyle={{marginRight: 15,}} leftIcon={<Icon name={'heart'} size={24} color={'black'}/>}/>
                        <Input containerStyle={{marginTop: 15, paddingVertical: 0}} placeholder={'email'} leftIconContainerStyle={{marginRight: 15,}} leftIcon={<Icon name={'envelope'} size={24} color={'black'}/>}/>
                        <Input secureTextEntry={true} containerStyle={{marginTop: 15, paddingVertical: 0}} placeholder={'password'} leftIconContainerStyle={{marginRight: 15,}} leftIcon={<Icon name={'lock'} size={24} color={'black'}/>}/>
                        <Input secureTextEntry={true} containerStyle={{marginTop: 15, paddingVertical: 0}} placeholder={'confirm password'} leftIconContainerStyle={{marginRight: 15,}} leftIcon={<Icon name={'lock'} size={24} color={'black'}/>}/>
                        <Input containerStyle={{marginTop: 15, paddingVertical: 0}} placeholder={'phone number'} leftIconContainerStyle={{marginRight: 15,}} leftIcon={<Icon name={'phone'} size={24} color={'black'}/>}/>
                    </View>
                    <TouchableOpacity style={stylesheet.submitButton}>
                        <Text style={stylesheet.buttonText}>REGISTER</Text>
                    </TouchableOpacity>
                    <View style={stylesheet.container}>
                        <View style={{flexDirection: 'row', paddingBottom: 20, paddingTop: 5, }}>
                            <Text style={{fontSize: 18}}>Already have an account?</Text>
                            <TouchableOpacity onPress={()=> this.props.navigation.navigate('Login')}>
                                <Text style={{paddingLeft: 8, fontStyle: 'italic', color: '#ffa500', fontSize: 18}}>sign in</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </Fragment>
        )
    }
}
