import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {AppRouter} from './appRouter';

let todos = [
    {
        id:1,
        title: 'Lorem ipsum dolor sit amet',
        isDone: false,
        description : ''
    },
    {
        id:2,
        title: 'Donec nec justo eget feli',
        isDone: true,
        description : ''
    },
    {
        id:3,
        title: 'Morbi in sem quis dui',
        isDone: false,
        description : ''
    },
    {
        id:4,
        title: 'Praesent dapibus, neque id cursus faucibus',
        isDone: true,
        description : ''
    }            
]
ReactDOM.render(<AppRouter todos={todos} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
