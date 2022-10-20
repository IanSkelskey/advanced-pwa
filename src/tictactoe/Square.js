import { useState } from 'react';

function Square() {
    const [value, setValue] = useState(0);
    return <button className='square'>{value}</button>;
}

export default Square;
