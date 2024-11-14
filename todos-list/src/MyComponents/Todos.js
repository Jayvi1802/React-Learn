import React from 'react';
import TodoItem from "../MyComponents/TodoItem";

const Todos = (props) => {
  return (
    <div className='container'>
      <h3>Todos List</h3>
      {props.todos.length === 0 ? (
        <p>No Todos to Display</p>
      ) : (
        props.todos.map((todo) => (
          <>
            <TodoItem key={todo.sno} todo={todo} onDelete={props.onDelete} /> <hr/>
          </>
        ))
      )}

    </div>
  );
};

export default Todos;





