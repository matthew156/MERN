import React from 'react';
const Tabs = () =>{

const [tab, setTab]= useState([
    {
        label:"Tab 1",
        content:"This is tab 1",
        isSelected:false
    },
    {
        label:"Tab 2",
        content:"This is tab 2",
        isSelected:false
    },
    {
        label:"Tab 3",
        content:"This is tab 3",
        isSelected:false
    }
])
}
export default Tabs