import axios from "axios"
export const config = {
    // base_url : "https://demo-intern.cleverapps.io/" // production

    base_url : "http://localhost:8080/" // develop

    // base_url : "http://192.168.100.24:8080/" // develop

}

export const fetchData = (url,data={},method="GET") =>{
    // const token = localStorage
    // if(data.new_token){
    //     token = data.new_token
    // }
    return axios({
        url : config.base_url + url,
        method : method,
        data : data,
        headers : {
            
        }
    }).then(res=>{
        return res.data
    }).catch(err=>{
        refreshToken1(url,data,method)
        return err 
    })
}

export const refreshToken1 = (url,data,method) => {
    return axios({
        url : config.base_url,
    }).then(res=>{
        var res =  res.data;
        // set to storage
        var new_token = res.data.access_token
        data.new_token = new_token;
        return fetchData(url,data,method)
    }).catch(err=>{
        refreshToken1()
        return err 
    })
}
