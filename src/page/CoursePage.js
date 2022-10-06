import {useState,useEffect} from "react"
import {Link,useNavigate} from "react-router-dom";
import LoadingLabel from "../component/loading/LoadingLabel";
import { fetchData} from "../helper";
import {
    MdDelete,
    MdEdit
} from "react-icons/md";
import {
    Button,
    Input,
    Row,
    Col,
    Space,
    Popconfirm,
    Select,
    Modal,
    Form
} from "antd";
import {SaveFilled,QuestionCircleOutlined} from "@ant-design/icons"
const {Search} = Input;
const {Option} = Select


function CoursePage (props) {
    const navigate = useNavigate();

    const [list,setList] = useState([])
    const [loading,setLoading] = useState(false)
    const [category,setCategory] = useState([])
    const [visibleModal,setVisibleModal] = useState(false);

    const [txtSearch,setTxtSearch] = useState("");
    const [categoryId,setCategoryID] = useState("");


    useEffect(()=>{
        getList();
    },[txtSearch,categoryId])

    const getList = () => {
        setLoading(true)
        var param = {};
        if(txtSearch !== "" && txtSearch !== null){
            param.text_search = txtSearch;
        }
        if(categoryId !== "" && categoryId !== null){
            param.category_id = categoryId;
        }
        fetchData("api/course",param,"POST").then(res=>{
            if(!res.err){
                setList(res.list)
                setCategory(res.category)
                setLoading(false)
            }else{
                
            }
            
        });
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
    }

    const handeOpenModal = () => {
        setVisibleModal(true);
    }

    const onChangeCategory = (value) => {
        setCategoryID(value)
    }

    const handleSearch  = () => {
        getList();
    }

    const handleFilter = () => {
        getList();
    }

    const onCancelModal = () =>{
        setVisibleModal(false)
    }

    const onOkModal = () => {

    }

    return (
        <div>
            <Modal
                open={visibleModal}
                title="New Course"
                onCancel={onCancelModal}
                onOk={onOkModal}
            >
                <Form
                    labelCol={{
                        span: 6,
                    }}
                    wrapperCol={{
                        span: 18,
                    }}
                >
                    <Form.Item
                        name={"name"}
                        label={"Course Name"}
                        rules={[
                            {
                              required: true,
                              message: 'Please fill in course name!',
                            },
                        ]}
                    >
                        <Input
                            placeholder="Course Name"
                        />
                    </Form.Item>
                    <Form.Item
                        name={"price"}
                        label={"Course Price"}
                    >
                        <Input
                            placeholder="Course Price"
                        />
                    </Form.Item>
                    <Form.Item
                        name={"category"}
                        label={"Category"}
                    >
                       <Select
                            placeholder="-- Select Cagtegory --"
                       >
                            {category.map((item,index)=>{
                                return (
                                    <Option value={item.category_id} key={index}>{item.name}</Option>
                                )
                            })}
                        </Select> 
                    </Form.Item>
                    <Form.Item
                        name={"status"}
                        label={"Status"}
                    >
                       <Select
                            placeholder="-- Select Status --"
                            defaultValue={"1"}
                       >
                            <Option value={"1"} >Actived</Option>
                            <Option value={"0"} >Diabled</Option>
                        </Select> 
                    </Form.Item>
                    <Form.Item
                        name={"description"}
                        label={"Description"}
                    >
                       <Input.TextArea
                            placeholder="Description"
                       />
                    </Form.Item>
                </Form>
            </Modal>
            <div className="main_container">
                <Row gutter={10}>
                    <Col>
                        <div className="main_title">Course</div>
                    </Col>
                    <Col>
                        <Search 
                            placeholder="Search course" 
                            onSearch={handleSearch} 
                            // onChange={(e)=>setTxtSearch(e.target.value)}
                            onChange={(e)=>{
                                setTxtSearch(e.target.value)
                                if(e.target.value == ""){
                                    getList(e.target.value);
                                }
                            }}
                            enterButton 
                            // allowClear
                            allowClear={true}
                        />
                    </Col>
                    <Col>
                        <Select
                            allowClear
                            showSearch
                            placeholder="Select a category"
                            optionFilterProp="children"
                            onChange={onChangeCategory}
                            style={{width : 200}}
                            // filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
                        >
                            {category.map((item,index)=>{
                                return (
                                    <Option key={index} value={item.category_id}>{item.name}</Option>
                                )
                            })}
                        </Select>
                    </Col>
                    <Col>
                        <Button onClick={handleFilter} type="primary"><SaveFilled />Filter</Button>
                    </Col>
                </Row>
                <div className="col1">
                    <Button onClick={handeOpenModal} type="primary"><SaveFilled />NEW Course</Button>
                </div>
            </div>
            <LoadingLabel 
                loading={loading}     
            />
            <table>
                <thead>
                    <tr className="row-table">
                        <th>#</th>
                        <th>Course name</th>
                        <th>Price</th>
                        <th>Category nme</th>
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
                                <td className="txtPrice">{item.full_price}$</td>
                                <td>{item.category_name}</td>
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

export default CoursePage