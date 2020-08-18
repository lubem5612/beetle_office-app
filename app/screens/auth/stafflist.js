import React, {Component, Fragment} from "react"
import {Alert, Text, TouchableOpacity, View, ActivityIndicator, Image} from "react-native";
import {Header,} from "react-native-elements";
import {FlatGrid} from "react-native-super-grid";
import * as Progress from "react-native-progress";
import stylesheet from "../../stylesheet";
import {BASE_URL} from "../../helpers/config"

export default class StaffList extends Component{
    constructor(props){
        super(props)
        this.state = {
            list: [],
            isLoading: true,
        }
    }

    async fetchStaff() {
        try {
            let response = await fetch(`${BASE_URL}/api/staff`);
            return await response.json();
        }
        catch(e) {
            console.log(e)
        }
    }

    async componentDidMount() {
        const staff = await this.fetchStaff();
        this.setState({list: staff, isLoading: false})
    }

    keyExtractor = (item, index) => index.toString()

    renderItem = ({ item }) => (
        <TouchableOpacity onPress={()=>{Alert.alert(
            'Confirm',
            'Do you wish to proceed as '+item.name,
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                {
                    text: 'Login',
                    onPress: () => {const {navigate} = this.props.navigation;
                        navigate('Verify', {staff: [item, 1]});}
                },
                {
                    text: 'LogOut',
                    onPress: () => {const {navigate} = this.props.navigation;
                        navigate('Verify', {staff: [item, 2]});}
                },
            ],
            {cancelable: false},
        );}} style={{height: 175, width: 150,}} >
            <View style={stylesheet.container}>
                <Image source={{ uri: `${BASE_URL}/media/images/${item.image_url}` }} style={{height:140, width:140}}/>
                <Text style={{fontSize:17, fontWeight:'bold', paddingTop:5}}>{item.name}</Text>
            </View>
        </TouchableOpacity>
    )

    render(){
        return (
            (this.state.isLoading)?
                (
                    <View style={[stylesheet.container, {backgroundColor: '#caff70',}]}>
                        <Progress.Circle size={80} indeterminate={true} borderWidth={4} color={'#04d0ff'} />
                    </View>
                ):
                (
                    <Fragment>
                        <Header centerComponent={{text: 'LIST OF STAFF', style: {color: '#fff', marginTop: (Platform.OS === 'ios')? 0 : -24, fontSize: 24}}} containerStyle={stylesheet.header}/>
                        <FlatGrid items={this.state.list} itemDimension={130} renderItem={this.renderItem} itemContainerStyle={{flex:1, justifyContent:'center', alignItems:'center'}}/>
                    </Fragment>
                )
        )
    }
}
