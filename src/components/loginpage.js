import React, { Component } from "react";
import { Form,Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import '../serviceWorker';
import axios from 'axios';

export default class LoginPage extends Component {

  constructor(props){
    super(props);

    this.onChangeUsername=this.onChangeUsername.bind(this);
    this.onChangePassword=this.onChangePassword.bind(this);
    this.onSubmit=this.onSubmit.bind(this);

    this.state = {
      username:'',
      password:'',
      connected:false
    }
  }


  onChangeUsername(e){
    this.setState({
      username : e.target.value
    });
  }

  onChangePassword(e){
    this.setState({
      password : e.target.value
    });
  }

  componentWillMount(){
    this.setState({connected:this.props.connected});
  };
  


  onSubmit(e){
    e.preventDefault();

    const admin = {
      username : this.state.username,
      password : this.state.password,
    };

    
    

    

    console.log(admin);

    axios.get('http://localhost:5000/admins/'+this.state.username+'/'+this.state.password)
      .then(res=>{
        if(res.data == null) alert("Password or UserName is Incorrect");
        else {
          this.props.login(res.data);
          
        };
      });
  }


  render(){
  return (
    
    <div className="row h-100 justify-content-center align-items-center" style={{marginTop:"220px"}}>
      
    <Form onSubmit={this.onSubmit} >
    <Form.Group controlId="formBasicEmail">
      <Form.Label>Username</Form.Label>
      <Form.Control type="text" placeholder="Enter user" value={this.state.username} onChange={this.onChangeUsername}  />
      
    </Form.Group>
  
    <Form.Group controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password"  value={this.state.password} onChange={this.onChangePassword} />
    </Form.Group>
    
    <Button variant="primary" type="submit">
      Login
    </Button>
  </Form>
  </div>



  );
}
}
