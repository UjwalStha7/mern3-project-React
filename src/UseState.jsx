import { useState } from "react";

function UseState() {
    // var count = 0;
    // const increaseCount = () =>{
    //     count++;
    //     console.log(count);
    // }
    // const decreaseCount = () =>{
    //     count--;
    //     console.log(count);
    // }
    // const bucket = useState("Ujwal");
    // const count2 = bucket[0];
    // const setCount2 = bucket[1]; 
    const [count, setCount] = useState(0);
    const [data, setData] = useState({
        name: "Ujwal",
        age: 21
    });
    const increaseCount = () => {
        setCount(count + 1);
    } 
    const decreaseCount = () => {
        setCount(count - 1);
    } 
    return (
        <div>
            <h1>Count: {count}</h1>
            <h1>Name: {data.name}</h1>
            <h1>Age: {data.age}</h1>
            <button onClick={increaseCount}>+</button>
            <button onClick={decreaseCount}>-</button>

        </div>
    );
}

export default UseState;