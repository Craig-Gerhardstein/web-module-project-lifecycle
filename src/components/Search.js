import React, { useState, useEffect } from 'react'
import styled from "styled-components"

const formDiv = styled.div `
display:flex;
justify-content: center;
justify-content: space-evenly;
align-content: center;
align-items: center;


`

export default function Search(props) {
    const [username, setUsername] = useState('');
    const { searchedUser } = props;

    const onChange = event => {
        setUsername(event.target.value)
    }

    const onSubmit = event => {
        event.preventDefault()
        searchedUser(username)
    }
    useEffect(() => {
        console.log(username)
    },[username]);

    return (
        <formDiv>
            <form onSubmit={onSubmit}>
                <label>
                    <input value={username} onChange={onChange} name="username" type="text" />
                </label>
                <button>Search</button>
                </form>        
        </formDiv>
    )
}