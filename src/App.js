import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Header} from "./components/Header";
import React, {useState} from "react";
import {Context} from './components/User/context'






function App() {
  const [state,setState] = useState(0);
  return (
      <Context.Provider value={{state,setState}}>
        <Header/>
      </Context.Provider>
  );
}

export default App;
