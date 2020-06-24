
import React, { Component } from 'react';
import './Layout.css';


const Layout = (props) => {
    return(
        <div className='PillContainer'>
            {props.children}
        </div>
    );
};


export default Layout;