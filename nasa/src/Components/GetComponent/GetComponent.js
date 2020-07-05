import React, { useState } from 'react';
import axios from '../../../Api/axios';

function GetComponent () {
        const [nasaData, setnasaData] = useState(0);
        const [loading, setLoading] = useState(0);
        const [searchState, setsearchState] = useState(0);

        return (
            <React.Fragment>
                <GetData />
            </React.Fragment>
        )
    }

export default GetComponent