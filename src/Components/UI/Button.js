import React from 'react';



const Button = (props) => {
    return(
    <button type="button" className="" onClick="props.clicked">{props.children}</button>
    )
};

export default Button;