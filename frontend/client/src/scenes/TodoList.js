//import React, from 'react';

function TodoPage() {
  return (
    <header>
      <h1 className="Todo1">To Do List</h1>
      <form className= "to-do-list">
        <input type="text" className= "to-do-list-input" placeholder="What Do You Need To Remember..."/>
        <input type="text" className= "to-do-list-input" placeholder="Due Date" />
        <input type="submit" className= "to-do-list-input" value="Post" />
      </form>
    </header>
  );
}

export default TodoPage;
