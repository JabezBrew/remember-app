import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

    const [todoText, setTodoText] = useState({
        title: "",
        content: ""
    });

    const [todosList, setTodosList] = useState([]);

    function handleChange(event) {
        const {name, value} = event.target
        setTodoText(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    function addItem(event){
        event.preventDefault(); //the button click refreshed the page so this line prevents that

        setTodosList(prevState => {
            return [...prevState, todoText]
        })

        setTodoText({
            title: "",
            content: ""
        });
    }



    function deleteItem(id){
        setTodosList(prevState => {
            return prevState.filter((item, index) => {
                return index !== id
            })
        })
    }



  return (
    <div>
      <Header />
      <CreateArea inputFunction={handleChange} addButtonFunction={addItem} todo={todoText}  />
      { todosList.map( (todoItem, index)=> {
          return <Note key={index} id={index}  title={todoItem.title} content={todoItem.content} delete={deleteItem} />
      } ) }
      <Footer />
    </div>
  );
}

export default App;
