import {useState} from "react"
function ProductPage () {

    const [barcode,setBarcode] = useState("")
    const [name,setName] = useState("")
    const [price,setPrice] = useState(0)
    const [idEdit,setIdEdit] = useState(null)
    const [product,setProduct] = useState([])

    const onChangeBarcode = (event) => {
        setBarcode(event.target.value)
    }
    const onChangeName = (event) => {   
        setName(event.target.value)
    }
    const onChangePrice = (event) => {
        setPrice(event.target.value)
    }

    const onClickAdd = () =>  {
        var item =  {
            "barcode" : barcode,
            "name" : name,
            "price" : price,
        }
        if(idEdit == null){
            var productTmp = [...product,item]
            setProduct(productTmp)
            onClickReset();
        }else{
            productTmp = product;
            productTmp[idEdit].barcode = barcode
            productTmp[idEdit].name = name
            productTmp[idEdit].price = price
            setProduct([...productTmp])
            onClickReset();
        }
      
    }
    const onClickReset = () => {
        setBarcode("")
        setName("")
        setPrice("")
        setIdEdit(null)
    }

    const onClickDelete = (item,index) => {
        var productTmp = product.filter((item,i)=> i != index)
        setProduct(productTmp)
    }

    const onClickEdit = (item,index) => {
        setBarcode(item.barcode)
        setName(item.name)
        setPrice(item.price)
        setIdEdit(index)
    }

    return (
        <div>
            <div className="mainTitle">Product </div>
            <input 
                value={barcode}
                className="inputText"
                placeholder="Barcode"
                onChange={onChangeBarcode}
            /> <br/>
            <input 
                value={name}
                className="inputText"
                placeholder="Product name"
                onChange={onChangeName}
            /> <br/>
            <input
                value={price} 
                className="inputText"
                placeholder="Product price"
                onChange={onChangePrice}
            /> <br/>
            <button onClick={onClickAdd} className="btn">{idEdit == null ? "ADD" : "EDIT"}</button>
            <button onClick={onClickReset} className="btn">Reset</button>

            <div className="mainTitle">List Product {product.length} </div>
            <table>
                <thead>
                    <tr>
                        <th>Barcode</th>
                        <th>Product Name</th>
                        <th>Product price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {product.map((item,index)=>{
                        return(
                            <tr key={index}>
                                <td>{item.barcode}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>
                                    <button onClick={()=>onClickDelete(item,index)} className="btn">Delete</button>
                                    <button onClick={()=>onClickEdit(item,index)} className="btn">Edit</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
                
            </table>
        </div>
    )
}

export default ProductPage