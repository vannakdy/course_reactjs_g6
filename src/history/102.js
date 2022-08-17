
import {useState} from 'react'

function HomePage () {
    var value1 = 0; // not state
    const [x,setX] = useState(0)
    const [y,setY] = useState(0)
    const [count,setCount] = useState(0)

    const onClickPlus = () => {
        value1 = 1000
        value1 = 10
        setX(value1)
        setY(y+2)
        setCount(count+3)
    }

    const onClickSub = () => {
        setX(x-1)
        setY(x-2)
        setCount(count-3)
    }

    const onClickReset = () => {
        setX(0)
        setY(0)
        setCount(0)
    }
   
    return (
        <div style={{padding : 10}}>
            <h1>HomePage</h1>
            <h1>value1 = {value1}</h1>
            <h1>x = {x}</h1>
            <h1>y = {y}</h1>
            <h1>count = {count}</h1>
            <button onClick={onClickPlus}>+</button>
            <button onClick={onClickSub}>-</button>
            <button onClick={onClickReset}>reset count</button>
        </div>
    )
}

export default HomePage