
import axios from "axios";
import React, { useState } from "react";
import { useNavigate,useParams } from "react-router-dom";
import LoadingLabel from "../component/loading/LoadingLabel";
const CategoryEditPage = () => {
    const navigate = useNavigate();
    const params = useParams();

    const [name,setName] = useState("");
    const [parent,setParent] = useState("");
    const [image,setImage] = useState("");
    const [sort,setSort] = useState("");
    const [status,setStatus] = useState("");
    const [loading,setLoading] = useState(false);
    

    React.useEffect(()=>{
        getCategoryById()
    },[])

    const getCategoryById = () => {
        setLoading(true)
        axios({
            url : "https://demo-intern.cleverapps.io/api/category/"+params.id,
            method : "GET",
            // data : {}
        }).then(res=>{
            setLoading(false)
            console.log(res.data.list)

            if(res.data.list && res.data.list.length > 0){
                var item = res.data.list[0];
                setName(item.name);
                setParent(item.parent);
                setImage(item.image);
                setSort(item.sort_order);
                setStatus(item.status);
            }
            
        })
    }

    const handleUpdate = () => {

        setLoading(true)
        axios({
            url : "https://demo-intern.cleverapps.io/api/category",
            method : "PUT",
            data : {
                "category_id": params.id,
                "name": name,
                "parent": parent,
                "image": image,
                "sort_order": sort,
                "status": status
            }
        }).then(res=>{
            setLoading(false)
            navigate("/category")
        })
    }

    const onChangeName = (event) => {
        setName(event.target.value)
    }

    const onChangeParent = (event) => {
        setParent(event.target.value)
    }

    const onChangeImage = (event) => {
        setImage(event.target.value)
    }

    const onChangeSort = (event) => {
        setSort(event.target.value)
    }

    const onChangeStatus = (event) => {
        setStatus(event.target.value)
    }



    return (
        <div>
            <div className="main_container">
                <div className="main_title">Update Category</div>
            </div>
            <LoadingLabel
                loading={loading}
            />
            <div className="form_container">
                
                <div className="form_item">
                    <input value={name} placeholder="Category name" onChange={onChangeName}  type={"text"}/>
                </div>
                <div className="form_item">
                    <input value={parent} placeholder="Parent" onChange={onChangeParent} type={"text"}/>
                </div>
                <div className="form_item">
                    <input value={image}  placeholder="Image Url" onChange={onChangeImage}  type={"text"}/>
                </div>
                <div className="form_item">
                    <input value={sort}  placeholder="Sort order"  onChange={onChangeSort} type={"text"}/>
                </div>
                <div className="form_item">
                    <input value={status}  placeholder="Status"  onChange={onChangeStatus} type={"text"}/>
                </div>

                <div>
                    <button  className="btn_new" onClick={handleUpdate}>Update</button>
                </div>
                
            </div>
        </div>
    )
}

export default CategoryEditPage;