import { BrowserRouter, Routes, Route } from 'react-router-dom';
import homePage from 'scenes/homePage';
import profilePage from 'scenes/profilePage';
import frontPage from 'scenes/frontPage';
import { useMemo } from "react";
import { useSelector } from 'react-redux';
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme"; 

function App() {
  const mode = useSelector ((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);


  return (
    <div className="app">
      <BrowserRouter>
          <Routes>
            <Route path="/front" element= {<frontPage/> } />
            <Route path="/home" element= {<homePage/> } />
            <Route path="/profile/:userId" element= {<profilePage /> } />
         </Routes>
      </BrowserRouter>
    </div>);
}

export default App;
