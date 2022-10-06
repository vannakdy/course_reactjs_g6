import axios from "axios"
export const config = {
    // base_url : "https://demo-intern.cleverapps.io/" // production

    base_url : "http://localhost:8080/" // develop

    // base_url : "http://192.168.100.24:8080/" // develop

}

export const fetchData = (url,data={},method="GET") =>{
    return axios({
        url : config.base_url + url,
        method : method,
        data : data
    }).then(res=>{
        return res.data
    }).catch(err=>{
        console.log(err)
        return err 
    })
}

