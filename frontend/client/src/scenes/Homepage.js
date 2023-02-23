import React, {useEffect, useState} from 'react';



function HomePage() {

  const [backendData, setBackendData] = useState(null)

  useEffect(() => {
/*    fetch("http://localhost:8000").then(
    response => response.json()
    ).then(
      data => {
        debugger
        setBackendData(data)
        console.log(data)
      }  
    ) */

    const fetchData = async () => {

      const response = await fetch(`http://localhost:8000`)
   
      const resData = await response.json()
      setBackendData(resData.message)
   
     }
     fetchData()
}, [])

  return (
    <div className="wrapper">
    <div className="header">
            <h1>{backendData}</h1>
    </div>
    <div className="content">
    <h1>Trouble staying organized? We gotchu.</h1> 
    <p>Simple to use; create, delete, edit your tasks and to-dos! Whether it be your school assignments or grocery shopping, we have you covered.</p>
    <a href='/register' className="button-37">Sign up</a> 
    </div>
    <div className="footer">
      <a className = "footerTag" href='https://github.com/jsan96/To-do-list-mern-app'> 🖥️ Find us on GitHub </a>
    </div>
  </div>
  );
}

export default HomePage;