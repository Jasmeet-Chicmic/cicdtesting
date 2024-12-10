import React from "react";
import { useSelector } from "react-redux";

const InsideApp = () => {
  const count = useSelector((state) => state.counter.value);
  return <div>InsideApp{count}</div>;
};

export default InsideApp;
