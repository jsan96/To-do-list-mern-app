import React, {useEffect, useState} from 'react';
import laptopGuy from '../assets/laptopguy.png';



function HomePage() {

  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("http://localhost:3000").then(
    response => response.json()
    ).then(
      data => {
        debugger
        setBackendData(data)
      }  
    )
}, [])


  return (
    <div className="wrapper">
    <div className="header">
            <h1>Welcome to Life List</h1>
    </div>
    <div className="content">
    <h1>Trouble staying organized? We gotchu.</h1> 
    <p>Simple to use; create, delete, edit your tasks and to-dos! Whether it be your school assignments or grocery shopping, we have you covered.</p>
    <button className="button-37">Sign up</button> 
    </div>
    <div className="footer">
      <a className = "footerTag" href='https://github.com/jsan96/To-do-list-mern-app'> 🖥️ Find us on GitHub </a>
    </div>
  </div>
  );
}

export default HomePage;