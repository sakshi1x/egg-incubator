import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RelayControl = () => {
    const [relayStates, setRelayStates] = useState({
        relay1: false,
        relay2: false,
        relay3: false,
        relay4: false,
    });

    useEffect(() => {
        fetchRelayStates();
    }, []);

    const fetchRelayStates = async () => {
        try {
            const response = await axios.get('http://172.25.0.3:3001/api/get-relay');
            setRelayStates(response.data);
        } catch (error) {
            console.error('Error fetching relay states:', error);
        }
    };

    const updateRelayState = async (relayName, newState) => {
        try {
            await axios.post('http://172.25.0.3:3001/api/update-relay', {
                [relayName]: newState,
            });
            fetchRelayStates(); // Fetch updated relay states after the update
        } catch (error) {
            console.error('Error updating relay state:', error);
        }
    };

    return (
        <div>
            <h2>Relay Control</h2>
            <div>
                Relay 1: {relayStates.relay1 ? 'ON' : 'OFF'}
                <button onClick={() => updateRelayState('relay1', !relayStates.relay1)}>Toggle</button>
            </div>
            <div>
                Relay 2: {relayStates.relay2 ? 'ON' : 'OFF'}
                <button onClick={() => updateRelayState('relay2', !relayStates.relay2)}>Toggle</button>
            </div>
            <div>
                Relay 3: {relayStates.relay3 ? 'ON' : 'OFF'}
                <button onClick={() => updateRelayState('relay3', !relayStates.relay3)}>Toggle</button>
            </div>
            <div>
                Relay 4: {relayStates.relay4 ? 'ON' : 'OFF'}
                <button onClick={() => updateRelayState('relay4', !relayStates.relay4)}>Toggle</button>
            </div>
        </div>
    );
};

export default RelayControl;
