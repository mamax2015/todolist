import React from 'react';

export class Spinner extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="loader"></div>
                Geting data from remote storage...
            </React.Fragment>
        )
    }
}