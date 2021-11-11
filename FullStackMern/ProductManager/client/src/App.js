import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update';
    
function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <Routes>
        <Route path="/product" element={<Main />}/>
        <Route path="/:id" element={<Detail />}/>
        <Route path="/product/:id/edit" element={<Update/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
    
export default App;

