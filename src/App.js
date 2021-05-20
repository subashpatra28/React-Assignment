
import React,{Component} from 'react';
import LoginPage from './components/loginpage';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
//import {BrowserRouter as Router,Route} from "react-router-dom";
import Home from './components/home';


class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      connected : true,
      user : null
    }
  }

  testlogin(){
    if(this.state.connected) return(
      <Home user={this.state.user} logout={()=>{this.setState({connected:false})}}/>
    );
    else return(
      
      <LoginPage login={(user)=>{this.setState({connected:true,user:user})}}/>
    );
  }

  render() { 
    return ( 
      < >
        {this.testlogin()}
      </>
     );
  }
}
 
export default App;

