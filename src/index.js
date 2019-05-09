import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {ToDoList} from './toDoList';

let todos = [
    {
        id:1,
        title: 'Lorem ipsum dolor sit amet'
    },
    {
        id:2,
        title: 'Donec nec justo eget feli',
        edit:true
    },
    {
        id:3,
        title: 'Morbi in sem quis dui'
    },
    {
        id:4,
        title: 'Praesent dapibus, neque id cursus faucibus'
    }            
]
ReactDOM.render(<ToDoList todos={todos} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
