import React, {Component} from 'react';
import Splash from './app/components/splash';
import MainApp from "./app/MainApp";

export default class App extends Component{

  constructor(props){
    super(props)

    this.state = {
      isSplashVisible: true,
      realm: null
    }
  }

  splashScreenHide = () => {
    this.setState({
      isSplashVisible : false,
    })
  }

  componentDidMount() {
    setTimeout(()=> {
      this.splashScreenHide();
    }, 3500);
  }

  render() {
    console.disableYellowBox = true;
    if (this.state.isSplashVisible) {
      return(
          <Splash/>
      )
    }
    return <MainApp/>
  }
}
