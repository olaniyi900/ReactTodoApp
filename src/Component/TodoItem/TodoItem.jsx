import React from 'react';

const TodoItem = ({ todoItems })=>  {

    return (
        <div>
            <ul className="list-group list-group-flush">
            { 
              todoItems.map( 
              (item) => <li key={ item.id } className="list-group-item">{ item.todo}</li>
               )
              
              }
             </ul>
               
        </div>
    )
}

export default TodoItem;

