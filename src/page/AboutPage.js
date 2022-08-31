
import {useState,useEffect} from "react"
import {MyComponent,MyComponent1} from "../component/demo/MyComponent"
import Animal from "../component/demo/Animal"

// const MyComponent = (props) =>{
//     return (
//         <div>
//             <h1 style={{backgroundColor:"red",padding:10}}>Hello MyComponent</h1>
//         </div>
//     )
// }

function AboutPage () {

    var cat = [
        // "MacBook",
        // "HP",
        // "Lenevo",
    ]
    const [categroy,setCategroy] = useState(cat)
    const [txtCat,setTxtCat] = useState("");

    const onChangeCat = (event) => {
        console.log(event.target.value)
        setTxtCat(event.target.value)
    }

    const onClickAdd = () => {
        // Way 1
            // var data  = categroy
            // data.push(txtCat)
            // setCategroy([...data])
        // Way2
            // setCategroy([...categroy,txtCat])
        // Way3
            // var data = categroy.concat(txtCat)
            // setCategroy(data)
        // Way4
            var data = [...categroy,txtCat]
            setCategroy(data)

        setTxtCat("")
    }

    const onClickRemove = (item,index) => {
        // way1
            // categroy.splice(index, 1);
            // setCategroy([...categroy])
         // way2
            // var data = categroy
            // data.splice(index, 1);
            // setCategroy([...data])
        // Way3
        var data = categroy.filter((item,i)=>i != index)  
        setCategroy([...data])
    }

    // const MyComponent = (props) =>{
    //     return (
    //         <div>
    //             <h1 style={{backgroundColor:"red",padding:10}}>Hello MyComponent</h1>
    //         </div>
    //     )
    // }

    return (
        <div style={{padding:20}}>
            <Animal
                name="Dog"
                age={10}
                color="yellow"
            />
            <Animal
                name="Cat"
                age={3}
                color="red"
            />
            <Animal
                name="Pig"
                age={30}
                color="white"
            />

            <MyComponent />
            <MyComponent1 />

            <h1>About Page</h1>
            <input
                value={txtCat}
                placeholder="Categroy"
                style={{
                    padding : 10
                }}
                onChange={onChangeCat}
            />
            <img

            />
            
            <button onClick={onClickAdd} style={{padding:10}}>Add</button>
            <div>List Categroy</div>
            {categroy.map((item,index)=>{
                return (
                    <div key={index} style={{padding:10}}>
                        <span key={index}>{index+1}.{item} </span>
                        <button onClick={()=>onClickRemove(item,index)}>Remove</button>
                    </div>
                )
            })}
        </div>
    )
}

export default AboutPage