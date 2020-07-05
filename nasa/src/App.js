import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import GetData from './Components/GetData'
import Introduction from './Components/Introduction'

import 'bootstrap/dist/css/bootstrap.min.css';


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
        <div className="introduction">
          <h2 style={{textAlign: "center"}}>NASA 사진 검색 어플리케이션</h2>
        </div>
        <Introduction />
        <GetData />
      </React.Fragment>
    );
}

export default App;