import React from 'react';

// import { ColorModeSwitcher } from './ColorModeSwitcher';
// import InputBox from "./component/Input-box/input.component";
// import {NavBar} from './component/navbar/navbar-component';

import {Route, Routes,} from 'react-router-dom';
import Homepage from './pages/homepage/homepage-page';
import History from './pages/historyPage/history-page';
import MostSearched from './pages/mostSearched/mostSearched-page';

function App() {
  return (
    
      <>
      <Routes>
        <Route exact path='/' element={<Homepage/>}></Route>
        <Route exact path='/history' element={<History/>}></Route>
        <Route exact path='/mostSearched' element={<MostSearched/>}></Route>
      </Routes>
      </>
  );
}

export default App;
