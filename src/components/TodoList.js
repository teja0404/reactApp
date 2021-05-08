import React from 'react';
import '../style.css'

import List from '../components/List'



class TodoList extends React.Component{
  constructor(){
    super();
  }

  render(){

    return (
      <div className="todo-list">
        
        <List text="Hello" />
        <List text="Hi" />
        <List text="Byee" />
        <List text="see u" />
        
      </div>
     );
  }

  

}


export default TodoList;
