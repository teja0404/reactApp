import React from 'react';


class List extends React.Component{


    render(){
        return(
            <div className="todo-item">
                <input type="checkbox" />
                <p>{this.props.text}</p>
            </div>
        );

    }
}

export default List;