import React from 'react';

export class Spinner extends React.Component {
    render() {
        return (
            <div className="text-center" role="status">
                <div className="spinner-border text-center" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        )
    }
}