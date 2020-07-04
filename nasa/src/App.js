import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';


function App() {
  const [count, setCount] = useState("");

  useEffect(() => {
    axios
      .get("https://images-api.nasa.gov/search?q=apollo%2011")
      .then(response => {
        setCount(JSON.stringify(response))
        console.log(JSON.stringify(response))
      });
  });

  return (
    <React.Fragment>
      {count}
    </React.Fragment>
  );
}

export default App;
