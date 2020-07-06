import React, { useState } from 'react';
import axios from '../../Api/axios';
import GetData from './GetData';

function GetComponent (props) {
        const [nasaData, setnasaData] = useState(0);
        const [loading, setLoading] = useState(0);
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
        const [message, setmessage] = useState(0);
        
        props.onSubmit(searchState);

        let onSearch = async (Params) => {
            axios
                .get('/search', {
                    params: {
                        q: Params.text
                    }
                })
                .then(function (res){
                    setLoading(false);
                })
                .catch(function (err){
                    if(err.response) {
                        switch (err.response.status) {
                            case 400:
                                message = "The request was unacceptable, often due to missing a required parameter.";
                                break;
                            case 404:
                                message = "The requested resource doesn’t exist.";
                                break;
                            case 500:
                            case 502:
                            case 503:
                            case 504:
                                message = "Server Errors";
                                break;
                            default:
                                message = "Call developers to Check axios status error";    
                        }
                    } else if (err.request) {
                        message = "App Error";
                    } else {
                        message = "Unknown Error";
                    }
                    setnasaData(null);
                    setLoading(true);
                    setmessage(null);
                })
        }

        return (
            <React.Fragment>
                <GetData onSearch={onSearch}/>
                <div className="loading-text">
                    {
                        loading ? <h6>now loading...</h6> : null
                    }
                </div>
            </React.Fragment>
        )
    }

export default GetComponent