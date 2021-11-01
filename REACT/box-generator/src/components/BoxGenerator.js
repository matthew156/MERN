import React, {useState} from 'react';

const BoxGenerator = ()=>{

const [boxList, setBoxList]= useState([])
const [boxInfo, setBoxInfo] = useState({
    color:"",
    size:0
})
const Whatever = (event) =>
{
    setBoxInfo({
        ...boxInfo,
        [event.target.name]:event.target.value


    })
}
const newBox= (e) =>{
    e.preventDefault();
    setBoxList([...boxList, boxInfo])
    console.log(boxInfo, boxList)
    setBoxInfo({
        color:"",
        size:0
    });
}
return(
<>
<form onSubmit={newBox}>
    <div>
    <label>Color</label>
    <input onChange={Whatever} name="color" type="text" value={boxInfo.color}/>
    </div>
    <div>
       <label>Size</label>
       <input onChange={Whatever} name="size" type="number" value={boxInfo.size} />
    </div>
    <input type="submit" value="Submit"></input>
</form>
{
    boxList.map((box, i)=>{
        return(
            <div key={i} style={{backgroundColor: box.color, width: box.size+ "px", height: box.size+ "px",}}>
                
            </div>
        )
    })
}
</>
)
}
export default BoxGenerator;