import {createStackNavigator, createAppContainer} from "react-navigation";;
import Verify from "./screens/auth/verify";
import StaffList from "./screens/auth/stafflist";

const Auth = createStackNavigator({
    Staff: {
        screen: StaffList,
    },
    Verify: {
        screen: Verify,
    }
},{
    defaultNavigationOptions: ({navigation}) => ({
        header: null,
    })
})

export default createAppContainer(Auth)
