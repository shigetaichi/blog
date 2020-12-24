import React from "react";
import TextInput from "./Components/TextInput";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <TextInput type="text" defaultValue={"azasu"} />
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
