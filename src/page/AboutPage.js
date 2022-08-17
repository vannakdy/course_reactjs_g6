
import {useState} from "react"
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

    return (
        <div style={{padding:20}}>
            <h1>About Page</h1>
            <input
                value={txtCat}
                placeholder="Categroy"
                style={{
                    padding : 10
                }}
                onChange={onChangeCat}
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