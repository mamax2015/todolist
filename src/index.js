import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { AppRouter } from './appRouter';

let todos = [
    {
        id: 1,
        title: 'Lorem ipsum dolor sit amet',
        isDone: false,
        description: `f you are going
to use a passage of L
orem Ipsum, you need to be sure t
here isn't anything em
barrassing hidden in t.`
    },
    {
        id: 2,
        title: 'Donec nec justo eget feli',
        isDone: true,
        description: `to generate Lorem Ipsum 
which looks reasonable. The generated Lorem Ipsum 
is therefore always free from repetition, injected humour, 
or non-characteristic words etc.`
    },
    {
        id: 3,
        title: 'Morbi in sem quis dui',
        isDone: false,
        description: ''
    },
    {
        id: 4,
        title: 'Praesent dapibus, neque id cursus faucibus',
        isDone: true,
        description: ''
    }
]
ReactDOM.render(<AppRouter todos={todos} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
