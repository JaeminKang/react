import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function GetData (props) {
        const [text, setText] = useState(0);
        const [searchState, setsearchState] = useState({ 
			text: 'hello', 
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
			year_end: undefined
        });
        
        props.onSearch(searchState);

        return (
            <React.Fragment>
                <hr></hr>
                <Container>
                <Row><Col algin="right" xs={10}>
                    <InputGroup className="text-input" onChange={(e) => {
                    setText(e.target.value)
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
                    <Button variant="primary" type="submit" className="btn-submit">검색</Button>{' '}
                </Col>
                </Row>
                </Container>
            </React.Fragment>
        )
    }

export default GetData;