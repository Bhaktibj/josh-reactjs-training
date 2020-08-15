import React from 'react';

const GreetUser=(props)=>{
    return (<h1>Welcome {`${props.name} ${props.surname}`}</h1>)
}

export default GreetUser;