
// Functional Component
const { useState } = React;
const Counter = () => {
    const [count, setCount] = useState (0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    return (
        <div style={{ textAlign: 'left', margin: '10px' }}>
            <p style={{ fontSize: '24px' }}>{count}</p>
            <button onClick={() => setCount(count - 1)} style={{ marginRight: '10px' }}>-</button>
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Counter />);
