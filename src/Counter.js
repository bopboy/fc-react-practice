import React, { Component } from 'react';

class Counter extends Component {
    // constructor(props) {
    //     super(props);
    //     // this.increase = this.increase.bind(this);
    //     // this.decrease = this.decrease.bind(this);
    //     this.state = {
    //         counter: 0
    //     }
    // }
    state = {
        counter: 0,
        fixed: 1,
    }
    increase = () => {
        // console.log(this);
        console.log('+');
        // this.setState({
        //     counter: this.state.counter + 1
        // });
        this.setState(state => ({
            counter: state.counter + 1
        }));
        this.setState(state => ({
            counter: state.counter + 1
        }));
        this.setState(state => ({
            counter: state.counter + 1
        }));
        this.setState(state => ({
            counter: state.counter + 1
        }));

    }
    decrease = () => {
        console.log('-');
        this.setState({
            counter: this.state.counter - 1
        });
        this.setState({
            counter: this.state.counter - 1
        });
        this.setState({
            counter: this.state.counter - 1
        });
        this.setState({
            counter: this.state.counter - 1
        });
    }
    render() {
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.increase}>+1</button>
                <button onClick={this.decrease}>-1</button>
                <p>고정값 : {this.state.fixed}</p>
            </div>
        );
    }
}



// import React, { useState } from 'react'
// import React, { useReducer } from 'react'

// function reducer(state, action) {
//     switch (action.type) {
//         case 'INCREMENT': return state + 1;
//         case 'DECREMENT': return state - 1;
//         default: throw new Error('Unhandled action');
//     }
// }
// function Counter() {
//     const [number, dispatch] = useReducer(reducer, 0);
//     // const [number, setNumber] = useState(0);
//     const onIncrease = () => {
//         // setNumber(number + 1)
//         // setNumber(prevNumber => prevNumber + 1)
//         dispatch({ type: 'INCREMENT' });
//     }
//     const onDecrease = () => {
//         // setNumber(number - 1)
//         // setNumber(prevNumber => prevNumber - 1)
//         dispatch({ type: 'DECREMENT' });
//     }
//     return (
//         <div>
//             <h1>{number}</h1>
//             <button onClick={onIncrease}>+1</button>
//             <button onClick={onDecrease}>-1</button>
//         </div>
//     )
// }
export default Counter;