import {useState,useEffect} from "react"
import axios from "axios"
import {Link,useNavigate,useLocation} from "react-router-dom";
import LoadingLabel from "../component/loading/LoadingLabel";

function CategoryPage (props) {
    const navigate = useNavigate()
    const [list,setList] = useState([])
    const [loading,setLoading] = useState(false)

    useEffect(()=>{
        getList();
    },[])

    const getList = () => {
        setLoading(true)
        axios({
            url : "https://demo-intern.cleverapps.io/api/category",
            method : "GET"
        }).then(res=>{
            setLoading(false)
            if(res.data && res.data.list){
                setList(res.data.list)
            }
        }).catch(err=>{
            setLoading(false)
            console.log(err)
        })
    }

    const handleDelete = (item) => {
        setLoading(true)
        axios({
            url : "https://demo-intern.cleverapps.io/api/category",
            method : "DELETE", // GET POST PUT DELETE
            data : {
                "category_id" : item.category_id
            }
        }).then(res=>{
            setLoading(false)
            getList();
        }).catch(err=>{
            setLoading(false)
            console.log(err)
        })
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
                        <th>Action</th>
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
                                <td>
                                    <button>Edit</button>
                                    <button onClick={()=>handleDelete(item)}>Delete</button>
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