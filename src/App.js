import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
export default class App extends React.Component {

    constructor(props) {
                super(props);
                this.state = {
                    userName: "Vinayak"
        }
    }    
    render() {
        return (
            <div>
                <h4 className="bg-primary text-white text-center p-2">
                    { this.state.userName }'s To Do List
                </h4>
            </div>
        )
    };
}