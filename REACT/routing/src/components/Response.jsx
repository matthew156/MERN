import React from 'react';
import { useParams } from 'react-router';


const Response = (props) => {
    const { id, bgColor, textColor } = useParams();
    console.log(id + bgColor + textColor);
    return (
        <div>
            <h1 style={{backgroundColor: bgColor, color:textColor}}>Hello</h1>
        </div>
    );
};


export default Response;