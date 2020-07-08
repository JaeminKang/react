import React, { useState, useEffect } from 'react';
import axios from '../../Api/axios';
import GetViewerList from './GetViewerList';
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function GetComponent () {
        const [nasaData, setnasaData] = useState([]);
        const [loading, setLoading] = useState(true);
        const [message, setmessage] = useState("");
        const [searchState, setSearchState] = useState({ 
			text: 'star', 
			center: undefined, 
			description: undefined, 
			description_508: undefined, 
			keywords: undefined,
			location: undefined,
			media_type: undefined,
			nasa_id: undefined,
			page: undefined,
			photographer: undefined,
			secondary_creator: undefined,
			title: undefined,
			year_start: undefined,
            year_end: undefined,
            complete: false
        });

        useEffect(() => 
            {
                function e(){
                    onSearch(searchState);
                    setSearchState({...searchState, complete:true});
                }
                e();
            }
        ,[searchState.complete]);

        const onSearch = async (Params) => {
            axios
                .get('/search', {
                    params: {
                        q: Params.text
                    }
                })
                .then(function (res){
                    setLoading(false);
                    setnasaData(res.data.collection.items);
                    console.log(res);
                    setmessage("");
                })
                .catch(function (err){
                    if(err.response) {
                        switch (err.response.status) {
                            case 400:
                                setmessage("The request was unacceptable, often due to missing a required parameter.");
                                break;
                            case 404:
                                setmessage("The requested resource doesn’t exist.");
                                break;
                            case 500:
                            case 502:
                            case 503:
                            case 504:
                                setmessage("Server Errors");
                                break;
                            default:
                                setmessage("Call developers to Check axios status error");    
                        }
                    } else if (err.request) {
                        setmessage("App Error");
                    } else {
                        setmessage("Unknown Error");
                    }
                    setnasaData(null);
                    setLoading(true);
                    setmessage(null);
                })
        }
        
        return (
            <React.Fragment>
                <hr></hr>
                <Container>
                    <Row><Col algin="right" xs={10}>
                        <InputGroup className="text-input" 
                        type="text"
                        onChange={(e) => {
                            setSearchState({...searchState, text:e.target.value});
                        }                        
                        }>
                        <FormControl
                            placeholder="search"
                            aria-label="search"
                            aria-describedby="basic-addon1"
                        />
                        </InputGroup>
                    </Col>
                    <Col algin="left">
                        <Button variant="primary" className="btn-submit" 
                        onClick={(e) => {
                            onSearch(searchState);
                        }}>
                        검색</Button>{' '}
                    </Col>
                    </Row>
                </Container>

                <div className="loading-text">
                    {
                        loading ? <h6 align="center">now loading...</h6> : null
                    }
                </div>

                <GetViewerList nasaData= {nasaData} />
            </React.Fragment>
        )
    }

export default GetComponent