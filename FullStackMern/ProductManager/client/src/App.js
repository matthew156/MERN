import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/update';
    
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/product/">
          <Main />
        </Route>
        <Route path="product/:id">
          <Detail />
        </Route>
<Route path="/product/:id:edit">
    <Update/>
</Route>
      </div>
    </BrowserRouter>
  );
}
    
export default App;

