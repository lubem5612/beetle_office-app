import React, {Component} from "react"
import {View, Text, TouchableOpacity, Alert, ToastAndroid, Platform, Image, ScrollView} from "react-native";
import ImagePicker from "react-native-image-picker";
import stylesheet from "../../stylesheet"

export default class Verify extends Component {
    constructor(props){
        super(props)
        this.array = this.props.navigation.state.params.staff;
        this.state = {
            fileUri: null,
            uploadState: 'No upload currently active.',
            id: this.array[0].id,
            action: this.array[1],
            isImageCaptured: false,
        }
        this.staff = this.array[0];
    }

    selectedImage() {
        const options = {
            quality: 1.0,
            maxWidth: 300,
            maxHeight: 380,
            storageOptions: {
                skipBackup: true
            },
            cameraType: 'front',
        };

        ImagePicker.launchCamera(options, (response) => {
            console.log('Response = ', response);
            if (response.didCancel) {
                console.log('User cancelled photo picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                this.setState({isImageCaptured: true});
                let source = { uri: response.uri };
                console.log(response.uri);
                this.setState({
                    fileUri: source,
                });
            }
        });
    }

    createFormData = (uri, body) => {
        const data = new FormData();
        data.append('image', {
            name: 'image.jpg',
            type: 'image/jpg',
            uri: Platform.OS === 'android' ? uri : uri.replace('file://', ''),
        });
        Object.keys(body).forEach(key => {
            data.append(key, body[key]);
        });
        return data;
    };

    uploadToServer() {
        // fetch needs the source as a string, but "source" is an object
        const sourceAsString = this.state.fileUri.uri.toString();

        // replace below once with your own API URI
        fetch('http://www.beetletaxis.com/media/uploader.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                body: this.createFormData(sourceAsString, {'staff_id' : this.staff.id.toString(), 'action' : this.state.action.toString()}),
            },
            this.setState({
                uploadState: 'Uploading... please be patient.',
            }))
            .then((response) => response.json())
            .then((responseJson) => {
                if(responseJson.status==='success'){
                    switch (responseJson.action) {
                        case 'login':{
                            Alert.alert('Success', 'You have successfully signed in today');
                            break;
                        }
                        case 'logout':{
                            Alert.alert('Success', 'You have successfully signed out today');
                            break;
                        }
                        case 'restricted':{
                            Alert.alert('Error!', 'You must sign in first');
                            break;
                        }
                        case 'already':{
                            Alert.alert('Error!', 'You have already signed in today');
                            break;
                        }
                        case 'repeated':{
                            Alert.alert('Error!', 'Already signed out, log in first');
                            break;
                        }
                    }
                    this.props.navigation.navigate('Staff');
                }else{
                    Alert.alert('Error!', 'Unknown error, try again');
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        let today = new Date();
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

        return (
            <View style={[stylesheet.container,{marginTop:20}]}>
                <ScrollView>
                    <TouchableOpacity onPress={()=>this.selectedImage()}>
                        <View style={stylesheet.imageContainer}>
                            {this.state.fileUri === null ?
                                <Text style={{padding:10, backgroundColor:'#838b83'}}>CAPTURE YOURSELF</Text>
                                :
                                <Image style={stylesheet.imageContainer}  source={this.state.fileUri}/>
                            }
                        </View>
                    </TouchableOpacity>

                    <View style={{paddingVertical:15}}>
                        <Text style={[stylesheet.staffDetailsText,{ fontWeight: 'bold', fontSize:18}]}>STAFF DETAILS</Text>
                        <Text style={stylesheet.staffDetailsText}>Name: {this.staff.name.toString()}</Text>
                        <Text style={stylesheet.staffDetailsText}>Time: {time}</Text>
                    </View>

                    {this.state.isImageCaptured?
                        <TouchableOpacity style={stylesheet.submitButton} onPress={()=>this.uploadToServer()}>
                            <Text style={stylesheet.buttonText}>UPLOAD DETAILS</Text>
                        </TouchableOpacity>
                        :
                        null
                    }
                </ScrollView>
            </View>
        )
    }
}
