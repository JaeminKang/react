import React from 'react';

const Error = props => {
    return (
        <React.Fragment>
            <div className="alert" role="alert">
                {props.message}
            </div>
        </React.Fragment>
    );
}

export default Error;