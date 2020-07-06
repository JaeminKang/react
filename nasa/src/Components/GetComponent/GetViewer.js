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
                                    JSON.stringify(props.nasaData.data[0].title).slice(1, -1) :
                                    "Unknown"
                                }
                            </h5>
                            <h6>
                                {
                                    props.nasaData.data[0].date_created ?
                                    JSON.stringify(props.nasaData[0].date_created).slice(1, 11) :
                                    "Unknown"
                                }
                            </h6>
                            <div className="viewer-text">
                                {
                                    props.nasaData.data[0].description ?
                                    JSON.stringify(props.nasaData.data[0].description.slice(0,200)+"...") :
                                    "Unknown"
                                }
                            </div>
                            <a
                                href="."
                                className="btn-dark"
                                tabIndex="-1"
                                role="button"
                                aria-disabled="true"
                            >
                                center : {
                                    props.nasaData.data[0].center ?
                                    JSON.stringify(props.nasaData.data[0].center) :
                                    "Unknown"
                                }
                            </a>
                            <a
                                href="."
                                className="btn-dark"
                                tabIndex="-1"
                                role="button"
                                aria-disabled="true"
                            >
                                
                            </a>
                    </div>
                </div>
                <div>

                </div>
            </React.Fragment>
        )
    }

export default GetViewer;