import React from 'react'

// C in Components should be general component naming is capital, First letter in component file is capital

// We should initialize the constructor method 

class Classcomponent extends React.Component{

    constructor(){
        super();

        this.state={
            isLoggedin:true
            
        }



    }
    

    render(){
        return(
            <div>
                <h1>You are currently logged {this.state.isLoggedin ? "in" : "out"}</h1>
            </div>
        );
    }
}

export default Classcomponent;