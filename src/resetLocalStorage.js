import React from 'react';

export class ResetLocalStorage extends React.Component{
    resetStorage(){
        localStorage.clear();
    }
    render(){
        return (
            <button className="btn btn-default" onClick={this.resetStorage}>clear localStorage</button>
        )
    }
}