import React from 'react';
import axios from 'axios';

function Test() {
    const toggleFan = async () => {
        try {
            await axios.post('http://localhost:3001/fan');
            console.log('Fan toggled');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Control Fan</h1>
            <button onClick={toggleFan}>Toggle Fan</button>
        </div>
    );
}

export default Test;
