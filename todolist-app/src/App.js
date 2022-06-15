import React from "react";
import reactDom from "react-dom";
import Input from './Components/Input/Input';
import Todo from './Components/List/Todo';

function App() {
  return (
    <div>
      <div>
      To Do List
      </div>
      <div className="App">
        <Input/>
      </div>
    </div>
    
  );
}

export default App;
