import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Introduction from './Components/Introduction'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import GetComponent from './Components/GetComponent/GetComponent'

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [count, setCount] = useState("");

  useEffect(() => {
    axios
      .get("https://images-api.nasa.gov/search?q=apollo%2011")
      .then(response => {
        setCount(JSON.stringify(response))
        //console.log(JSON.stringify(response))
      });
  });

    return (
      <React.Fragment>
        <Container>
          <Row>
            <Col>
            <p></p>
          <div className="introduction">
            <h2 style={{textAlign: "center"}}>NASA 사진 검색 어플리케이션</h2>
          </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <Introduction />
            </Col>
          </Row>
          <Row>
            <Col>
              <GetComponent />
            </Col>
          </Row>
          
        </Container>
      </React.Fragment>
    );
}

export default App;