import React, { useState } from 'react';
import api from '../utils/axios';

function Multiply() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [result, setResult] = useState(null);

  const handleMultiply = async () => {
    const payload = {
      a,
      b,
    };
    try {
      const res = await api.post('/multiply', {
        ...payload,
      });
      setResult(res?.data?.result);
      console.log('res', res);
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <div>
      <input type="number" value={a} onChange={(e) => setA(Number(e.target.value))} />
      <input type="number" value={b} onChange={(e) => setB(Number(e.target.value))} />
      <button onClick={handleMultiply}>Multiply</button>
      {result && <p>Result: {result}</p>}
    </div>

  );
}

export default Multiply;
