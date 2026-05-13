import { useEffectEvent } from "react";

function UseEffect(){
    // useEffect(()=>{
    //     console.log("Use Effect 1 Called");
    // },[]);
    const [count, setCount] = useState(0);
    const [like, setLike] = useState(0);
        const increaseCount = () => {
            setCount(count + 1);
        } 
        const decreaseCount = () => {
            setCount(count - 1);
        }
        const likeIncrease = () => {    
            setLike(like + 1);
        }   
        // useEffect(()=>{
        //     console.log("Like and count used and Use Effect 3 Called");
        // },[count, like]);
        // useEffect(() =>{
        //     //login jati ahile like state ma value xa tyo backend ma pathaidine code.
        //     console.log("Like sent and Use Effect 3 Called");
        // }, [like]);
        useEffectEvent(()=>{
            console.log("Rokera dekhau");
        });
        return (
            <div>
                <h1>Count: {count}</h1>
                <button onClick={increaseCount}>+</button>
                <button onClick={decreaseCount}>-</button>
                <h2>Like : {like}</h2>
                <button onClick={likeIncrease}>Like Me</button>
            </div>
        );
}

export default UseEffect;