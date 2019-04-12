import * as  React from 'react';
const { useState, useEffect } = React;
import styled from 'styled-components';

const RowStyled = styled.div`
  margin-top: 10px;
  border-top: 3px #000000;
  padding: 20px;
  font: 20px;
`;

function Row({ label, value}) {
    return (
        <RowStyled>
            <label>{label}</label>
            <p>{value}</p>
        </RowStyled>
    )
}
function useWindowWidth() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });

    return width;
}

function Counter2() {
    const [count, setCount] = useState<number>(0);
    const [name, setName] = useState<string>('');
    const width = useWindowWidth();

    const handleName = (event) => {
        setName(event.target.value);
    };

    const handleCount = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <input type="text" onChange={handleName} value={name}/>
            <button onClick={handleCount}>
                Click me
            </button>
            <Row label='Count 📍' value={count}/>
            <Row label='Width 📍' value={width}/>
            <Row label='name 📍' value={name}/>

        </div>
    )
}

export default  Counter2;
