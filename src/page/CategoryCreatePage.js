
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadingLabel from "../component/loading/LoadingLabel";
const CategoryCreatePage = () => {
    const navigate = useNavigate();

    const [name,setName] = useState("");
    const [parent,setParent] = useState("");
    const [image,setImage] = useState("");
    const [sort,setSort] = useState("");
    const [status,setStatus] = useState("");
    const [loading,setLoading] = useState(false);
    

    React.useEffect(()=>{

    },[])

    const handleSave = () => {
        setLoading(true)
        axios({
            url : "https://demo-intern.cleverapps.io/api/category",
            method : "POST",
            data : {
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
                <div className="main_title">Category</div>
            </div>
            <LoadingLabel
                loading={loading}
            />
            <div className="form_container">
                
                <div className="form_item">
                    <input placeholder="Category name" onChange={onChangeName}  type={"text"}/>
                </div>
                <div className="form_item">
                    <input placeholder="Parent" onChange={onChangeParent} type={"text"}/>
                </div>
                <div className="form_item">
                    <input  placeholder="Image Url" onChange={onChangeImage}  type={"text"}/>
                </div>
                <div className="form_item">
                    <input placeholder="Sort order"  onChange={onChangeSort} type={"text"}/>
                </div>
                <div className="form_item">
                    <input  placeholder="Status"  onChange={onChangeStatus} type={"text"}/>
                </div>

                <div>
                    <button  className="btn_new" onClick={handleSave}>Save</button>
                </div>
                
            </div>
        </div>
    )
}

export default CategoryCreatePage;