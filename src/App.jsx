import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useDispatch } from "react-redux";
import { increment } from "./store/slices/counterSlice";
import InsideApp from "./InsideApp";

function App() {
  const dispatch = useDispatch();

  return (
    <>
      <h1 onClick={() => dispatch(increment())}>Chicmic studios</h1>
      <InsideApp></InsideApp>
    </>
  );
}

export default App;
