import React from 'react'
import { Link } from "react-router-dom";


export default function Navbar(props){

    return(
        <nav className={`navbar navbar-expand-sm navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"><b>{props.title}</b></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="mynavbar">
            <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
               <input className="form-check-input" onClick={props.toogleMode} type="checkbox" id="flexSwitchCheckDefault"/>
               <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.darkMode}</label>
             </div>
          </div>
        </div>
      </nav> 
    );
}



