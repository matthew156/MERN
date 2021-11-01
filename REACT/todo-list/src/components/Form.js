import React, {useState} from 'react';

const Form = () => {
    //Each Task as an object
    const [task, setTask] = useState({
        name:"",
        isComplete: false
    })

    //Lists as an object
    const [listOfTasks, setListOfTasks] = useState([])



    const changeHandler = (e) =>{
        console.log("Change is in progress")
        setTask({
            ...task,
            [e.target.name]: e.target.value
        })
    }
    //After submitting we will add the task object
    const submitTask = (e) =>{
        e.preventDefault()
        console.log("Submitting Task!")
        setListOfTasks([...listOfTasks, task])
    }

    const completeTask =(e, idx)=>{
        console.log("Done with said tasks")
    }
    
    return (
    <>
        <div>
            <h4>Add a Task below</h4>
        </div>
        <form onSubmit={submitTask}>
            <div className="form-group">
            <label htmlFor="">Task</label>
            <input onChange={changeHandler} type="text" className="form-control" name="name"></input>

            </div>
            <input type="submit" className="btn btn-success mt-3"></input>
        </form>
        {
            listOfTasks.map((taskObj, i)=> {
                return(
                    <div key={i}>
                        <h3>{taskObj.name}</h3>
                    </div>
                )
            })
        }
    </>
    );
};

export default Form;