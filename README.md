
# Create React App
    - node -v
    - npm -v
    - npx create-react-app projectname
    - npm start
    - npm install
    - cd dir
    - cd ..
    - ls
    - clear
    - control + c 
# Modify App.js
    - goto App.js and add
        function App() {
            return (
                <div>
                    <h1 style={{textAlign:"center",marginTop:10,color:"red"}}
                </div>
                );
            }
            export default App;
# React Route 
    - install
        > npm install module_name // syntax install module 
        > npm rm module_name // sytax remove

        > npm install react-router-dom
        > npm rm react-router-dom
# State in React
    - state 
        - declare state
            import {useState} from 'react'
            syntax : const [state_name,seter] = useState(initail)
        - call state
        - set state
    - event
        - onClick
                const onClickPlus = () => { // arrow function
                }
                function onClickPlus(){ //
                }
        - onChange
        - .....
    - Render data/list
        const [arrName,setArrName] = useState(["Sok","Som","Dara","Bona"]); 
        {arrName.map((item,index)=>{
            return (
                <div key={index}>{item}</div>  
            )
        })}
# React Component 

    - react compononet  vs html element
        <MyComponent
            title=""
        />

        <img
            src=""
            width="100px"
        />
    - create React Component
        // 3 way 

        1. in Main function
        2. outside Main function
        3. external Main function

        const MyComponent = (props) =>{
            return (
                <div>
                    <h1 style={{backgroundColor:"red",padding:10}}>Hello MyComponent</h1>
                </div>
            )
        }

        - class 
         <MyComponent/>
# React Icon
    > npm install react-icon
# Post main OR Thunder client
    - 
# Request Data From API
    1. npm install axios
    1. install a libary
        > npm install axios
    - getlist
    - create data
    - update data
    - delete
# Helper 
    - fechData

# Libray
    - React Bootstrap
    - React Materail
    - React Antd
    - ....

    => antd
        > npm install antd
            import {Button} from "antd";
            return (
                <Button>Title</Button>
            )
        > npm install --save @ant-design/icons
            import {StepForwardOutlined} from "@ant-design/icons"
            return (
                <Button><StepForwardOutlined /></Button>
            )
            


# LocalStorage 
    - setItem
        LocalStorage.setIte("key",value)
    - getItem
        LocalStorage.getItem("key")
    - removeItem
        LocalStorage.removeItem("key")
    - reset
        LocalStorage.reset()

# React Icon

# React Slider Image

# 




