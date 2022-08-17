// import logo from './logo.svg';
import './App.css';

function App() {

  const x=10, y=20;
  const name = "Somnang"
  var a = 100;
  a = 200;

  var productname = "Men Jean"
  var product_qyt = 2
  var price = 3.4
  var total = product_qyt * price;
  var status = false

  var arrDemo = [12,34,5,6,7,8]
  var arrCourse = ["C","C++","Java","React","ReactNative"]

  return (
    <div style={{padding:20}}>
      <h1>Home</h1>
      <h1>{x+10}</h1>
      <h1>{y}</h1>
      <h1>{name}</h1>
      <h1>{100 + 200}</h1>
      <h1>{100 + "200"}</h1>

      <h1>{a}</h1>

      <div>{productname} {"Qty. "+product_qyt} {price+"$"} {total} {status == true ? "Enabled" : "Disabled"}</div>

      <div>arrDemo {arrDemo.length}</div>
      <div>arrCourse {arrCourse.length}</div>
      {arrCourse.map((row,i)=>{
        return (
          <h1>{i+1}.{row}</h1>
        )
      })}

      <h1 style={{textAlign:"center",marginTop:10,color:"red"}}>Hello ReactJS</h1>
      <div className='txtTitle' >Welecome My React</div>
      <div id='subTitle' >Welecome My React</div>
      <h2>My Element H2</h2>
    </div>
  );
}

export default App;
