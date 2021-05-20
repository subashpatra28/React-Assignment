import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FaUserEdit } from 'react-icons/fa';
import { FaUserTimes } from 'react-icons/fa';
const Exercise = props => (
  <tr>
    <td>{props.exercise.user}</td>
    <td>{props.exercise.Department}</td>
    <td>{props.exercise.description}</td>
    <td>{props.exercise.duration}</td>
    <td>{props.exercise.date.substring(0,10)}</td>
    <td>
    <FaUserEdit />&nbsp;<Link to={"/edit/"+props.exercise._id}>edit</Link> &nbsp;|&nbsp; <FaUserTimes />&nbsp;<a href="#" onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</a>
    </td>
  </tr>
)

export default class ExercisesList extends Component {
  constructor(props) {
    super(props);

    this.deleteExercise = this.deleteExercise.bind(this)

    this.state = {exercises: [],
      Research_type:'user'
    
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/exercises/')
      .then(response => {
        this.setState({ exercises: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteExercise(id) {
    axios.delete('http://localhost:5000/exercises/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      exercises: this.state.exercises.filter(el => el._id !== id)
    })
  }

  exerciseList() {
    return this.state.exercises.map(currentexercise => {
      return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id}/>;
    })
  }
  changer=(e)=>{

    var val=e.target.value
    var type = this.state.Research_type;
   
    
      
      if(val === ''){
        axios.get('http://localhost:5000/exercises/')
      .then(response => {
        this.setState({ exercises: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
      }else{
        console.log(type);
        if(type === "user"){
          this.setState({
            exercises :this.state.exercises.filter(ex=>ex.user.toLowerCase().startsWith(val.toLowerCase()))
          })
        }else{
          this.setState({
            exercises :this.state.exercises.filter(ex=>ex.Department.toLowerCase().startsWith(val.toLowerCase()))
          })
          console.log("je");
        }
        
      }

    
    }

  render() {
    return (
      <>    
        <h3>Student List</h3>
        <center>
        <label><i>Research</i></label>&nbsp;
           <input type='text' onChange={this.changer} style={{height:"25px"}}/>
           <select onChange={(e) => this.setState({Research_type:e.target.value})} value={this.state.Research_type}>
            <option value="user">Name</option>
            <option value="Department">Department</option>
            
          </select>
          </center>
          
          
        <br/>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Name</th>
              <th>Department</th>
              <th>Description</th>
              <th>Age</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.exerciseList() }
          </tbody>
        </table>
      </>
    )
  }
}