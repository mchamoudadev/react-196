import { useReducer, useRef } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import countReducer, { INITIAL_STATE } from './countReducer';
import About from './pages/about';
import Contact from './pages/contact';
import User from './pages/user';
import Post from './Post';




function App() {

  const [state, dispatch] = useReducer(countReducer, INITIAL_STATE);

  const inputRef = useRef();

  // inputRef.current.style.backgroundColor = "";
  // inputRef.current.children[0].style.margin = "10px";
  // inputRef.current.children[1].style.margin = "10px";

  // const styles = { backgroundColor: "skyblue !important" };

  return (
    <div className="App">
      {/* <button onClick={() => dispatch({ type: "increment", })}>+</button>
      <button onClick={() => dispatch({ type: "decrement", })}>-</button>
      <h1>count {state.count}</h1>
      <Post /> */}
      <Header />

      <Routes>
        <Route path="/about" element={<About />}>Home</Route>
        <Route path="/contact" element={<Contact />}>Home</Route>
        <Route path="/user/:id" element={<User />}></Route>
        {/* <Route path="/user" element={<User />}></Route> */}
      </Routes>

    </div>
  );
}

export default App;
