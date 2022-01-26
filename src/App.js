import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/Home";



const App = () => {

  return (
      <>
       <Home />
       <p>lalalala</p>
      </>)

}
App.displayName = "App";

ReactDOM.render(<App />, document.getElementById("app"));
export default App;