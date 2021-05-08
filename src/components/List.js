import React from 'react';


class List extends React.Component{


    constructor(props){
        super(props);

        this.state={
            name:props.text
        }
    }
    
    

    render(){

        

        return(
            <div className="todo-item">
                <input type="checkbox" />
                <h1>{this.state.name}</h1>
                <p>{this.props.text}</p>
            </div>
        );

    }
}

export default List;