import React from 'react';

class BluetoothSender extends React.Component {
    static sendDataToDevice = async (device, data) => {
        try {
            // Connect to the Bluetooth device
            const server = await device.gatt.connect();

            // Get the primary service
            const service = await server.getPrimaryService('your-service-uuid');

            // Get the characteristic for data transmission
            const characteristic = await service.getCharacteristic('your-characteristic-uuid');

            // Convert the data to an appropriate format (e.g., Uint8Array)
            const dataArray = new Uint8Array(data.length);
            for (let i = 0; i < data.length; i++) {
                dataArray[i] = data.charCodeAt(i);
            }

            // Write the data to the characteristic
            await characteristic.writeValue(dataArray);

            console.log('Data sent to the mobile device');
        } catch (error) {
            console.error('Error:', error);
        }
    };

    requestDeviceAccess = async () => {
        try {
            // Request device access
            const device = await navigator.bluetooth.requestDevice({
                filters: [{ services: ['your-service-uuid'] }],
            });

            // Send data to the selected device
            BluetoothSender.sendDataToDevice(device, 'Hello World');
        } catch (error) {
            console.error('Error:', error);
        }
    };

    render() {
        return (
            <button onClick={this.requestDeviceAccess}>Send "Hello World" to Nearby Device</button>
        );
    }
}

export default BluetoothSender;
