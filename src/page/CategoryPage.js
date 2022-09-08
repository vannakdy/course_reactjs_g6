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
} from "react-icons/md";
import {
    Button,
    Input,
    Row,
    Col,
    Drawer,
    Space,
    Modal,
    notification,
    Popconfirm
} from "antd";
import Button1 from "../component/button/Button";
import {SaveFilled,QuestionCircleOutlined} from "@ant-design/icons"

const {Search} = Input;



function CategoryPage (props) {
    const navigate = useNavigate()
    const [list,setList] = useState([])
    const [loading,setLoading] = useState(false)
    const [openDrawer,setOpenDrawer] = useState(false)
    const [openModal,setOpentModal] = useState(false)

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

    const handleToggleDrawer = () => {
        // setOpenDrawer(!openDrawer) // !false => true , !true => false
        if(openDrawer==false){
            setOpenDrawer(true)
        }else{
            setOpenDrawer(false)
        }
    }

    const handleToggleModal = () => {
        Modal.success({
            title : "Save",
            content : "Save category successfully!!"
        })
        // setOpentModal(!openModal)
    }

    const handleModalOk = () => {
        Modal.success({
            title : "Save",
            content : "Save category successfully!!"
        })
        setOpentModal(false)
    }

    const handleNotify = () => {
        notification.open({
            message : "Save",
            description : "Save success Save success Save success Save success"
        })
    }

    return (
        <div>
            <Drawer
                title="My Drawer"
                open={openDrawer}
                placement="left"
                width={600}
                onClose={handleToggleDrawer}
            >
                <h1>Content Drawer...</h1>

                <Space size={"large"}>
                    <Button onClick={handleToggleDrawer}>Close</Button>
                    <Button type="primary" style={{width:200,backgroundColor:"green"}}>Save</Button>
                </Space>
            </Drawer>
            <Modal
                open={openModal}
                title={"My Modal"}
                onCancel={handleToggleModal}
                onOk={handleModalOk}
            >
                <h1>Content...</h1>
                <h1>Content...</h1>
                <h1>Content...</h1>
            </Modal>

            <Space>
                <Button onClick={handleToggleDrawer}>Toggle Drawer</Button>
                <Button onClick={handleToggleModal}>Open Modal</Button>
                <Button onClick={handleNotify}>Open Notify</Button>
            </Space>
            <div className="main_container">
                <Row >
                    <Col>
                        <div className="main_title">Category</div>
                    </Col>
                    <Col>
                        <Search 
                            placeholder="Search catgory" 
                            onSearch={()=>{}} 
                            enterButton 
                            allowClear
                        />
                    </Col>
                    
                    
                </Row>
                <div className="col1">
                    {/* <button className="btn_new" onClick={handleToNeWpage}>NEW Category</button> */}
                    <Button onClick={handleToNeWpage} type="primary"><SaveFilled />NEW Category</Button>
                    {/* <Button1
                        title="AAAA"
                        type={"delete"}
                    /> */}
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
                    {list && list.map((item,index)=>{
                        return(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{item.name}</td>
                                <td>{item.image}</td>
                                <td>{item.parent}</td>
                                <td>{item.sort_order}</td>
                                <td>{item.status == 1 ? "Actived" : "Disabled"}</td>
                                <td style={{textAlign:'right'}}>
                                    <Space>
                                        <Link to={"/category/edit/"+item.category_id}><Button><MdEdit style={{fontSize:16}}/></Button></Link>
                                        <Popconfirm
                                            title="Are you sure to delete?"
                                            icon={
                                                <QuestionCircleOutlined
                                                    style={{color:'red'}}
                                                />
                                            }
                                            placement="left"
                                            onConfirm={()=>handleDelete(item)}
                                        >
                                            <Button  danger ><MdDelete style={{color:'red',fontSize:16}}/></Button>
                                        </Popconfirm>
                                    </Space>


                                    {/* onClick={()=>handleDelete(item)} */}
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