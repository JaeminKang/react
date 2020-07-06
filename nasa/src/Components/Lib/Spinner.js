import React from 'react';

function Spinner() {
    return (
        <React.Fragment>
            <div className="spinner" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </React.Fragment>
    )
}

export default Spinner;