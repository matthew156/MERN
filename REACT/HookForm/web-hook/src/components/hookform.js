import React, {useState} from 'react';

const Form = (props) =>{
    let [fname, setfName] = useState("")
    let [lname, setlName] = useState("")
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    return(
    <>  
    <form>
        <div className="form-group">
          <label htmlFor="">First Name:</label>
          <input onChange={(e)=>{setfName(e.target.value)}} type="text" name="fName" id="" className="form-control"></input>
        </div>
        <div className="form-group">
          <label htmlFor="">Last Name:</label>
          <input onChange={(e)=>{setlName(e.target.value)}} type="text" name="" id="" className="form-control"></input>
        </div>
        <div className="form-group">
          <label htmlFor="">Email:</label>
          <input onChange={(e)=>{setEmail(e.target.value)}} type="text" name="" id="" className="form-control"></input>
        </div>
        <div className="form-group">
          <label htmlFor="">Password:</label>
          <input onChange={(e)=>{setPassword(e.target.value)}} type="password" name="" id="" className="form-control"></input>
        </div>
        <div className="form-group">
          <label htmlFor="">Confirm Password:</label>
          <input type="password" name="" id="" className="form-control"></input>
        </div>
    </form>
    <div>
      <p>First Name: {fname}</p>
      <p>Last Name: {lname}</p>
      <p>Email: {email}</p>
      <p>Password: {password}</p>

    </div>
    </>
    )
}
export default Form;