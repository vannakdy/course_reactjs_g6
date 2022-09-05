import {useState,useEffect} from "react"
import axios from "axios"
import {Link,useNavigate,useLocation} from "react-router-dom";
import LoadingLabel from "../component/loading/LoadingLabel";
import { fetchData} from "../helper";
import {
    AiFillSignal,
    AiFillBank
} from "react-icons/ai"
import {
    FcPortraitMode
} from "react-icons/fc"

import {
    MdDelete,
    MdEdit
} from "react-icons/md"




function CategoryPage (props) {
    const navigate = useNavigate()
    const [list,setList] = useState([])
    const [loading,setLoading] = useState(false)

    useEffect(()=>{
        getList();
    },[])

    const getList = () => {
        setLoading(true)
        fetchData("api/category",{},"GET").then(res=>{
            setList(res.list)
            setLoading(false)
        });

        // axios({
        //     url : "https://demo-intern.cleverapps.io/api/category",
        //     method : "GET"
        // }).then(res=>{
        //     setLoading(false)
        //     if(res.data && res.data.list){
        //         setList(res.data.list)
        //     }
        // }).catch(err=>{
        //     setLoading(false)
        //     console.log(err)
        //     alert("error")
        // })
    }

    const handleDelete = (item) => {
        setLoading(true)
        var data =  {
            "category_id" : item.category_id
        }
        fetchData("api/category",data,"DELETE").then(res=>{
            getList();
            setLoading(true)
        });

        // axios({
        //     url : "https://demo-intern.cleverapps.io/api/category",
        //     method : "DELETE", // GET POST PUT DELETE
        //     data : {
        //         "category_id" : item.category_id
        //     }
        // }).then(res=>{
        //     setLoading(false)
        //     getList();
        // }).catch(err=>{
        //     setLoading(false)
        //     alert("error")
        //     console.log(err)
        // })
    }

    const handleToNeWpage = () => {
        navigate("/category/create")
    }

    return (
        <div>
            <div className="main_container">
                <div className="col1">
                    <div className="main_title">Category</div>
                    <input className="text_input" type="text" placeholder="Search"/>
                </div>
                <div className="col1">
                    <button className="btn_new" onClick={handleToNeWpage}>NEW Category</button>
                </div>
            </div>
            <AiFillSignal 
                className="icon"
                style={{ 
                    color:"red",
                    fontSize : 34,
                    marginTop:30,
                    paddingBottom:10
                }}
            />
            <AiFillBank />
            <FcPortraitMode
                style={{ 
                    color:"red",
                    fontSize : 54,
                    marginTop:30,
                    paddingBottom:10
                }}
            />
            <LoadingLabel 
                loading={loading}     
            />
            <table>
                <thead>
                    <tr className="row-table">
                        <th>#</th>
                        <th>Category name</th>
                        <th>Image</th>
                        <th>Parent</th>
                        <th>Order</th>
                        <th>Status</th>
                        <th style={{textAlign:'right'}}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((item,index)=>{
                        return(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{item.name}</td>
                                <td>{item.image}</td>
                                <td>{item.parent}</td>
                                <td>{item.sort_order}</td>
                                <td>{item.status == 1 ? "Actived" : "Disabled"}</td>
                                <td style={{textAlign:'right'}}>
                                    <Link to={"/category/edit/"+item.category_id}><button><MdEdit style={{fontSize:16}}/></button></Link>
                                    <button onClick={()=>handleDelete(item)}><MdDelete style={{color:'red',fontSize:16}}/></button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default CategoryPage