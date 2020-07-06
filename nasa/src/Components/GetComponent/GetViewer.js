import React, { useState } from 'react';

const GetViewer =
        props => {
        return (
            <React.Fragment>
                <div className="viewer">
                    {
                        props.nasaData.links ?
                            <img
                                className="card-img"
                                src={props.nasaData.links[0].href}
                                alt="Preparing"
                            /> :
                            "No image"
                    }
                    <div className="viewer-body">
                            <h5 className="viewer-title">
                            {
                            props.nasaData.data[0].title ?
                            }  
                            </h5>
                    </div>
                </div>
                <div>

                </div>
            </React.Fragment>
        )
    }

export default GetViewer;