import { useState } from "react";

function Counter() {
    const [count, updateCount] = useState(0);

    const style = {
        width: '30px',
        height: '50px',
        color: "white",
        display: 'flex',
        flexDirection: 'row'
    };
    const buttonStyle = {
        margin: '10px'
    }
    const handleMinusClick = (event) => {
        updateCount(count - 1);   //async function
    }
    const handleAddClick = (event) => {
        updateCount(count + 1);
    }    
    return (
        <div style={style}>
            <button style={buttonStyle} onClick={handleMinusClick}>-</button>
            {count}
            <button style={buttonStyle} onClick={handleAddClick}>+</button>

        </div>

    )
}

export default Counter;