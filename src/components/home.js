import React,{Component} from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./navbar.component"
import ExercisesList from "./ExercisesList";
import EditExercise from "./EditExercise";
import CreateExercise from "./CreateExercise";
import CreateUser from "./CreateUser";




class Home extends Component {
    state = {  }
    render() {  
        return ( 
    <Router>
      <div className="container">
      <Navbar logout={this.props.logout} />
      <br/>
      <Route path="/" exact component={ExercisesList} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/create" component={CreateExercise} />
      <Route path="/user" component={CreateUser} />
      
      </div>
    </Router>
         );
    }
}

export default Home;