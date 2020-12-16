import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, filteredTodos }) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                 {/* By passing in 'todos' data, now we have an array of objects that we can map through and for each object 
                render out the 'text' property of the Todo Component. */}
                {filteredTodos.map(todo => (
                    /* By giving our Todo object an id or unique key, react knows exactly what to remove and what to keep in the 
                    /  case we wanted to delete a 'todo' item. So whenever you have a list of something, you will have to 
                    /  add a special 'key' to it.
                    */
                    <Todo 
                        todos={todos}
                        todo={todo}
                        setTodos={setTodos}
                        key={todo.id} 
                        text={todo.text} 
                    />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;