import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeDepartement = this.onChangeDepartement.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      departement: ''
    }
  }

  onChangeDepartement(e) {
    this.setState({
      departement: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const departement2 = {
      departement: this.state.departement
    }

    console.log(departement2);

    axios.post('http://localhost:5000/users/add', departement2)
      .then(res => console.log(res.data)).catch(error=> {
        console.log(error.response)
    });

    this.setState({
      departement: ''
    })

    
    
  }

  render() {
    return (
      <>
         
          
        <h3>Add New département</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>departement: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.departement}
                onChange={this.onChangeDepartement}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Submit" className="btn btn-primary" />
          </div>
        </form>
      
      </>
    )
  }
}