import React from "react";
import Footer from "./components/landingPage/Components/Footer";
import Pages from "./components/pages/Pages";
import Scroll from './Scroll'
import {BrowserRouter} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
    <Scroll/>
    <div>
    <Pages/>
    <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
