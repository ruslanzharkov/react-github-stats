import React from 'react';

const Button = (props) =>  {
    return(
        <button onClick={props.onClick} className={props.styles}>
            {props.value || props.children}
        </button>
    )
};

export default Button;
