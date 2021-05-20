import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaUserPlus,FaRegUser ,FaSignOutAlt  ,FaRegFolder} from 'react-icons/fa';
export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand">Student Information</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link"><FaRegUser />&nbsp;Students</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link"><FaUserPlus />&nbsp;Add Student</Link>
          </li>
          <li className="navbar-item">
          <Link to="/user" className="nav-link"><FaRegFolder />&nbsp;Add Department</Link>
          </li>
          
        </ul>
        <span className="navbar-text">
        <div style={{color:"black",cursor: "pointer"}}  onClick={this.props.logout} ><FaSignOutAlt />&nbsp;Logout</div>
        </span>
        </div>
      </nav>
    );
  }
}