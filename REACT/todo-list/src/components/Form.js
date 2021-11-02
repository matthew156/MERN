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

        setTask({
            name:"",
            isComplete: false
        })


    }

    //COMPLETE A TASK
    const completeTask = (e, idx) => {
        console.log("done with the task at", idx )
        //updating the clicked object

        let [...updatedTasks] = listOfTasks
        updatedTasks[idx].isComplete = !updatedTasks[idx].isComplete
        setListOfTasks(updatedTasks)
    }

    //Delete A task
    const deleteTask = (e, idx) =>{
        let newList = listOfTasks.filter((task,i)=>{
            return i != idx})
            //update my state variable
        setListOfTasks(newList)
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
                        <h3 style={{textDecoration: taskObj.isComplete? "line-through": "none"}}>{taskObj.name}<input onClick={(e)=>completeTask(e, i)} type="checkbox"/></h3>
                        <button onClick={e=>deleteTask(e, i)}>Delete</button>
                    </div>
                )
            })
        }
    </>
    );
};

export default Form;