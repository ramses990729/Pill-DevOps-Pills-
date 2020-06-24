import React, { Component }  from 'react';
import './Pill.css';

class Pill extends Component {
    render(){

        return(
            <div class="app">
                <h1 className="pill-title">Open the pill!</h1>
                <div className="flex-container">
                    <div className="pill-left"></div>
                    <div className="pill-right"></div>
                </div>
            </div> 
            )
    }  
}



export default Pill;