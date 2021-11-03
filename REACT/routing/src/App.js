import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link 
} from "react-router-dom";
import { useParams } from "react-router";
import Response from "./components/Response";
    
const Home = (props) => {
  return (
    <h1>Welcome!</h1>
  );
}
    
const About = (props) => {
  return (
    <h1 style={{color: "blue"}}>About Component</h1>
  );
}

// const Number = (props)=>{
//   const {id, color1, color2} =useParams()
//   console.log(color2)
//   console.log(color1)
//   return (
//     isNaN(id)?
//     <h1 style={{color: color1, backgroundColor: color2}}>The word is {id}</h1>:
//     <h1 style={{color: color1, backgroundColor: color2}}>The number is {id}</h1>
//   )
// }

// const Color = (props)=>{
//   const {var, color1, color2}=useParams();
//   console.log(id)
//   return(
//     isNaN(var)?
//     <h1 style={{color: color1, backgroundColor: color2}}>The word is {var}</h1>:
//     <h1 style={{color: color1, backgroundColor: color2}}>The number is {var}</h1>
//   ) 
// }

    
function App() {
  return (
    <BrowserRouter>
      <h1>Routing Example</h1>
      <p>
        <Link to="/home">Home</Link>
         | 
        <Link to="/about">About</Link>   
      </p>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route path="/:id/:bgColor/:textColor">
          <Response/>
        </Route>
        {/* <Route path="/:var/:color1/:color2">
        <Color/>
        </Route> */}
      </Switch>
    </BrowserRouter>
  );
}
    
export default App;
