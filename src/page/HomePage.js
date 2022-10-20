
import { Line } from '@ant-design/charts';
import { Column } from '@ant-design/plots';
import {
  Row,
  Col,
  Spin
} from "antd";
import {useState,useEffect} from "react";
import {fetchData} from "../helper"
function HomePage () {

    const [SalePeformance,setSalePeformance] = useState([])
    const [AppInsight,setAppInsight] = useState([])
    const [ArrayImage,setArrayImage] = useState([])
    
    
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
      getList();
    },[]);

    const getList = () => {
      fetchData("api/dashboard",{},"POST").then(res=>{
        if(res){
          setSalePeformance(res.SalePeformance)
          setAppInsight(res.AppInsight)
          setArrayImage(res.ArrayImage)
        }
        setLoading(false)
      })
    }
    
    const data = [
        { year: '1991', value: 3 },
        { year: '1992', value: 4 },
        { year: '1993', value: 3.5 },
        { year: '1994', value: 5 },
        { year: '1995', value: 4.9 },
        { year: '1996', value: 6 },
        { year: '1997', value: 7 },
        { year: '1998', value: 9 },
        { year: '1999', value: 13 },
      ];
    
      const config = {
        data,
        xField: 'year',
        yField: 'value',
        point: {
          size: 5,
          shape: 'diamond',
        },
      };


      const configSalePerformance = {
        data : SalePeformance,
        xField: 'title',
        yField: 'value',
        point: {
          size: 5,
          shape: 'diamond',
        },
      };

      const configAppInsight = {
        data : AppInsight,
        xField: 'title',
        yField: 'value',
        point: {
          size: 5,
          shape: 'diamond',
        },
      };


      return (
        <div>
            <Spin spinning={loading}>
            <Row gutter={10}>
              <Col span={12}>
                <h1>Sale Peformance</h1>
                <Column 
                    {...configSalePerformance}
                />
              </Col>
              <Col span={12}>
                <h1>App Insight</h1>
                <Line {...configAppInsight} />
              </Col>
            </Row>
            <br/>

            <Row gutter={10}>
              <Col span={12}>
                <h1>Sale By Category</h1>
                <Column {...config} />
              </Col>
              <Col span={12}>
                <h1>Sale Summary</h1>
                <Line {...config} />
              </Col>
            </Row>
            </Spin>

            <Row gutter={[10,10]}>
              {ArrayImage.map((item,index)=>{
                return (
                  <Col span={6}>
                    <img
                      alt={item.image}
                      src={item.image}
                      width={"100%"}
                    />
                  </Col>
                )
              })}
            </Row>

        </div>
      )
       
    //   return (
    //     <h1>Hoom</h1>
    //   )
}

export default HomePage