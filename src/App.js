import React ,{useState } from 'react'
import Textforms from './Textforms';
import Navbar from './Navbar';
import Alert from './Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


export default function App() {

   const [mode ,setMode] = useState('dark');


   const [mod ,setMod] = useState('');

   const [popMode,setPopmode] = useState('Enable Darkmode')

   const [alert,setAlert] = useState(null)

   const showalert = (message,type) =>{
       setAlert({
       msg : message,
       type : type
       } )

       setTimeout(() => {
         setAlert(null)
       }, 2000);
   }
   const toogleMode = () => {
      if(mode === 'dark'){
        setMode('light');
        document.body.style.backgroundColor = 'white';
        setPopmode('Enter Darkmode')
        setMod('primary')
        showalert("Light mode enable successfull","success")
        document.title='Textutiles - white mode'
        setInterval(() => {
          document.title = 'Textutiles Amazing app mode'
        },2000);
        setInterval(() => {
          document.title = 'Install Textutils app '
        },1500);
      }
      else {
        setMode('dark');
        document.body.style.backgroundColor = 'grey';
        setPopmode('Enter whitemode')
        setMod('danger')
        showalert("Dark mode enable successfull","success")
        document.title='Textutiles - Dark mode'
      }
   }

  return (
    <>
    <Router>
     <Navbar title= "TextUtils" darkMode={popMode} mode={mode} toogleMode={toogleMode} />
     <Alert alert={alert} mod={mod}/>
     <Routes>
         <Route exact path = '/'element={<Textforms heading="Enter Text Here" mode ={mode} toogleMode={toogleMode}/>}></Route>
     </Routes>
   </Router>
   </>
  );
} 
