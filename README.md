
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


