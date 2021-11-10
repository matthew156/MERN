import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Main from './views/Main';
import Detail from './views/Detail';
    
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routh path="/product/">
          <Main />
        </Route>
        <Routh path="product/:id">
          <Detail />
        </Route>
      </div>
    </BrowserRouter>
  );
}
    
export default App;

