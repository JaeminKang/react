import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

function GetData () {
        const [text, setText] = useState(0);

        return (
            <React.Fragment>
                <div align="center">

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
                <Button variant="primary" type="submit" className="btn-submit">검색</Button>{' '}
                </div>
            </React.Fragment>
        )
    }

export default GetData;