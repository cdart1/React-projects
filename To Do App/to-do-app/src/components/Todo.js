import React from "react";

const Todo = ({ text, todo, todos, setTodos }) => {
    // Function to modify the state. 
    const deleteHandler = () => {
        /* 'setTodos' will update the TodoList by returning todos items that were not 'clicked'.
            We want to show the items that we didn't click to the UI- this mimics deleting something.
            So we select the todo items that are not equal to the item that was clicked. Don't show the item(s) that are equal, 
            which would be the one that was clicked. 
        */
        setTodos(todos.filter((el) => el.id !== todo.id));
    };
    const completeHandler = () => {
        // We are checking here if the todo item we clicked on in the UI have the same 'id' as the one in state.
        setTodos(todos.map((item) => {
            if(item.id === todo.id){
                return {
                    // '...item' means to add all other properties, and ', completed' means to modify this property only.
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    };
    return(
        <div className="todo">
            {/* Using the text attribute from the Todo child component of TodoList, we can display each Todo object's text.  */}
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
};

export default Todo;