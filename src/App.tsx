import React from "react";
import { Button } from "./components/atoms/Button/Button";
import { Input } from "./components/atoms/Input/Input";
import logo from "./logo.svg";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <Button />
      <Input />
    </div>
  );
};

export default App;
