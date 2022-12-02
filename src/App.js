import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  return (
    <div className="App">
      <TodoList></TodoList>
      
    </div>
  );
}

function TodoList() {

  const [todos, setTodos] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(data => setTodos(data))
  }, [])
  
      
  return (
    <div>
      <h1>Todos Items:-{todos.length}</h1>
      <div style={{display: 'grid',gridTemplateColumns: 'repeat(3, 1fr)' }} >
        
      {
          todos.map(todo => <Post title={todo.title} completed={todo.completed} id={todo.id} key={todo.id}></Post>
          )
        }  
        key= "userId";
      </div>
      
    </div>
  )
}

function Post(props) {
  return (
    <div style={{ backgroundColor: '#DEBACE', color: '#2B3A55', padding: '8px', border: '2px solid #6D67E4', margin: '10px', borderRadius: '20px'}}>
      
      <h3>Title:- {props.title}</h3>
      <p>Todo Items num: {props.id}</p>
      <p>Completed Status:{props.true}</p>
    </div>
  )
}


export default App;
