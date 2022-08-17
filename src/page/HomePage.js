
import {useState} from 'react'

function HomePage () {
    var value1 = 0; // not state
    const [x,setX] = useState(0)
    const [y,setY] = useState(0)
    const [count,setCount] = useState(0)
    const [arrName,setArrName] = useState(["Sok","Som","Dara","Bona","Sok","Som","Dara","Bona"]); //[] empty array
    const [arrProduct,setArrProduct] = useState([
        {
            id : 101,
            product_name : "Men Jean",
            full_price : 10,
            discount : 50,
            price : 5
        },
        {
            id : 102,
            product_name : "Men TShirt",
            full_price : 10,
            discount : 50,
            price : 5
        },
        {
            id : 103,
            product_name : "Wonen Shoes",
            full_price : 10,
            discount : 50,
            price : 5
        }
    ])

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

            <h1>List Product</h1>
            {arrProduct.map((item,index)=>{
                return (
                    <div key={index}
                        style={{
                            padding : 20,
                            backgroundColor : "#e2e2e2",
                            width : 250,
                            height : 100,
                            margin : 10
                        }}
                    >
                        <div>{item.product_name}</div> 
                        <div>
                            {item.full_price}$
                            <del> {item.discount}% </del> 
                            {item.price}$
                        </div> 
                    </div>
                )
            })}

            <h1>List Name</h1>
            {arrName.map((item,index)=>{
                return (
                    <div 
                        style={{
                            padding : 10,
                            margin : 5,
                            backgroundColor : "gray"
                        }} 
                        key={index}
                    >
                        <div style={{color:"white",fontSize:22}}>{index+1}.{item}</div>
                    </div>  
                )
            })}

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