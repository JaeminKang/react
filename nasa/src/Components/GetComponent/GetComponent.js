import React, { useState } from 'react';
import axios from '../../Api/axios';
import GetData from './GetData';
import GetViewerList from './GetViewerList';

function GetComponent () {
        const [nasaData, setnasaData] = useState(0);
        const [loading, setLoading] = useState(true);
        const [message, setmessage] = useState(0);
        
        let onSearch = async (Params) => {
            axios
                .get('/search', {
                    params: {
                        q: Params.text
                    }
                })
                .then(function (res){
                    setLoading(false);
                    setnasaData(res.data.collection.items);
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
                <GetData onSearch={onSearch}/>
                <div className="loading-text">
                    {
                        loading ? <h6>now loading...</h6> : null
                    }
                </div>
                <GetViewerList nasaData= {nasaData} />
            </React.Fragment>
        )
    }

export default GetComponent