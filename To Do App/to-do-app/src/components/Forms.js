import React from "react";

/* We can pass in 'props' or we could use '{}' and pass in the property name we defined within the Form component call from our main App
/  without needing to use 'props.setInputText' in this component.
*/
const Form = ({  inputText, setInputText, todos, setTodos, setStatus }) => {
    // Here we will write JS code & functions
    const inputTextHandler = (e) => {
        // Here we are getting info about the event. 'e.target.value' will get the exact text that's typed into the input field.
        console.log(e.target.value);
        // Updating the state.
        setInputText(e.target.value);
    };
    const submitTodoHandler = (e) => {
        // The below line prevents the page from refreshing when we click the 'submit' button.
        e.preventDefault();
        // These lines set the state. The state will have objects with the text, completed, and id properies.
        // The spread operator '...' lets us pass all props at once.
        setTodos([
            ...todos, 
            {text: inputText, completed: false, id: Math.random() * 1000 },
        ]);
        // Below we reset that state to an empty string. At this point this doesn't reflect in the UI.
        setInputText("");
    };
    // This will set the state value of a selected drop down option.
    const statusHandler = (e) => {
        setStatus(e.target.value);
    }
    return (
        <form>
            {/* Every time our input changes, this function 'inputTextHandler' is being run. */}
            {/* Every time our state changes we update our UI with the new state 'inputText'. */}
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                {/* Every time we make a selection from the drop down menu, we set the state to be the value of our selection. */}
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
};

// To hook this component up to our App we use the below statement.
// 'export' is like providing access to this file to other files in the project.
/* Follow this article for more into on 'export' and 'export default' : 
/  https://stackoverflow.com/questions/31852933/why-es6-react-component-works-only-with-export-default 
*/
export default Form;