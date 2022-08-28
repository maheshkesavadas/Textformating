import React from 'react'

export default function Alert(props) {

    const captil = (word) =>{
       const wordsCaptil = word.toLowerCase();
       return wordsCaptil.charAt(0).toUpperCase() + wordsCaptil.slice(1);
    }
  return (
    props.alert && 
    <div className={`alert alert-${props.mod} alert-dismissible fade show`} role="alert">
    <strong>{captil(props.alert.type)}  </strong>{ props.alert.msg}
    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
  )
}
