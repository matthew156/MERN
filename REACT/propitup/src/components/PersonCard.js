import React, { Component } from 'react';

class PersonCard extends React.Component{
    render(){
        const{firstName, lastName, age, hairColor} = this.props;
            return(
                <div>
                    <h1>{this.props.lastName}, {this.props.firstName}</h1>
                    <p>Age: {this.props.age}</p>
                    <p>Hair: {this.props.hairColor}</p>
                </div>
            )
    }
}
export default PersonCard;
