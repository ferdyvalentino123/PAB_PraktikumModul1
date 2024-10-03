class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };  // Menginisialisasi state
    }

    // Method untuk menambah nilai
    increment = () => {
        this.setState({ count: this.state.count + 1 });
    }

    // Method untuk mengurangi nilai
    decrement = () => {
        this.setState({ count: this.state.count - 1 });
    }

    render() {
        return (
            <div style={{ textAlign: 'left', margin: '5px' }}>
                <h1>{this.state.count}</h1>
                <button onClick={this.decrement} style={{ marginRight: '10px'}}>-1</button>
                <button onClick={this.increment}>+1</button>
            </div>
        );
    }
}

ReactDOM.createRoot(document.getElementById('root')).render(<Counter />);
