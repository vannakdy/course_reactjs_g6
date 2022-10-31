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
    Form,
    message,
    Spin,
    Alert,
    Pagination
} from "antd";
import {SaveFilled,QuestionCircleOutlined,ReloadOutlined} from "@ant-design/icons"
import "../styles/page/CoursePage.css";

const {Search} = Input;
const {Option} = Select


function CoursePage (props) {
    const navigate = useNavigate();

    const [list,setList] = useState([])
    const [loading,setLoading] = useState(false)
    const [visibleModal,setVisibleModal] = useState(false);
    const [teacherId,setTeacherId] = useState(null)
    const [form] = Form.useForm();


    useEffect(()=>{
        getList();
    },[])

    const getList = () => {
        setLoading(true)
        var param = {};
        fetchData("api/teacher",param,"GET").then(res=>{
            if(!res.err){
                setList(res.list)
                setLoading(false)
            }
        });
    }

    const handleDelete = (item) => {
        setLoading(true)
        var data =  {
            "teacher_id" : item.teacher_id
        }
        fetchData("api/teacher",data,"DELETE").then(res=>{
            if(res.error){
                message.warning("Could Remove Ref Teacher")
            }else{
                getList();
            }
            setLoading(false)
        });
    }

    const handeOpenModal = () => {
        setVisibleModal(true);
        setTeacherId(null)
    }

    const onCancelModal = () =>{
        setVisibleModal(false)
        form.resetFields();
    }

    const onOkModal = () => {

    }

    const onFinish = (values) => {
        var data =  {
            "teacher_id" : teacherId,
            "firstname" : values.firstname, 
            "lastname" : values.lastname,
            "gender" : Number(values.gender),
            "email" : (values.email),
            "tel" : (values.tel) 
        }
        var method = (teacherId == null ?  "POST" : "PUT")
        fetchData("api/teacher",data,method).then(res=>{
            if(!res.error){
                if(teacherId == null){
                    message.success('Teacher create success!');
                }else{
                    message.success('Teacher Update success!');
                }
                onCancelModal()
                getList();
                form.resetFields(); 
            }else{
                
            }
        })

    }

    const handelClickEdit = (item) => {
        form.setFieldsValue({
            firstname : item.firstname,
            lastname : item.lastname,
            gender : item.gender+"",
            email : item.email,
            tel : item.tel
        })
        setVisibleModal(true)
        setTeacherId(item.teacher_id)
    }


    return (
        <div>
            <Spin spinning={loading}>
            <Modal
                open={visibleModal}
                title={teacherId == null ? "New Teacher" : "Edit Teacher"}
                onCancel={onCancelModal}
                onOk={onOkModal}
                footer={[]}
            >
                <Form
                    form={form}
                    labelCol={{
                        span: 6,
                    }}
                    wrapperCol={{
                        span: 18,
                    }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name={"firstname"}
                        label={"Firstname"}
                        rules={[
                            {
                              required: true,
                              message: 'Please fill in firstname!',
                            },
                        ]}
                    >
                        <Input
                            placeholder="Firstname"
                        />
                    </Form.Item>

                    <Form.Item
                        name={"lastname"}
                        label={"Lirstname"}
                        rules={[
                            {
                              required: true,
                              message: 'Please fill in Lirstname!',
                            },
                        ]}
                    >
                        <Input
                            placeholder="Lastname"
                        />
                    </Form.Item>

                    <Form.Item
                        name={"gender"}
                        label={"gender"}
                        rules={[
                            {
                              required: true,
                              message: 'Please Select Gender!',
                            },
                        ]}
                    >
                       <Select
                            placeholder="-- Select Gender --"
                       >
                            <Option value={"1"} >Male</Option>
                            <Option value={"0"} >Female</Option>
                        </Select> 
                    </Form.Item>

                    <Form.Item
                        name={"email"}
                        label={"Email"}
                    >
                       <Input
                            placeholder="Email"
                       />
                    </Form.Item>

                    <Form.Item
                        name={"tel"}
                        label={"Tel"}
                    >
                       <Input
                            placeholder="Tel"
                       />
                    </Form.Item>

                    <Form.Item
                        style={{
                            textAlign:"right"
                        }}
                        wrapperCol={{
                            offset : 6
                        }}
                    >
                        <Space>
                            <Button onClick={onCancelModal}>Cancel</Button>
                            <Button htmlType="submit" type="primary">{teacherId == null ? "Save" : "Update"}</Button>
                        </Space>
                    </Form.Item>

                </Form>

            </Modal>
            <div className="main_container">
                <Row gutter={10}>
                    <Col>
                        <div className="main_title">Teacher</div>
                    </Col>
                </Row>
                <div className="col1">
                    <Button onClick={handeOpenModal} type="primary"><SaveFilled />NEW Teacher</Button>
                </div>
            </div>
            <table>
                <thead>
                    <tr className="row-table">
                        <th>#</th>
                        <th>Fistname</th>
                        <th>Lastname</th>
                        <th>Gender</th>
                        <th>Email</th>
                        <th>Tel</th>
                        <th style={{textAlign:'right'}}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {list && list.map((item,index)=>{
                        return(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{item.firstname}</td>
                                <td>{item.lastname}</td>
                                <td>{item.gender == 1 ? "Male" : "Female"}</td>
                                <td>{item.email}</td>
                                <td>{item.tel}</td>
                                <td style={{textAlign:'right'}}>
                                    <Space>
                                        <Button onClick={()=>handelClickEdit(item)}><MdEdit style={{fontSize:16}}/></Button>
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
            </Spin>
        </div>
    )
}

export default CoursePage