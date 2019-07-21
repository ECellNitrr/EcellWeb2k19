import axios from "axios";

let baseURL = "http://localhost:8000"

if( process.env.NODE_ENV === 'production'){
    baseURL = ""
}

export const getuser = () => {
    const user = sessionStorage['ecell_user']
    if(user){
        return JSON.parse(user)
    }else{
        return false
    }
}

export default () => {
    let token = null 
    const user = getuser()
    if(user){
        token = user.token
    }
    console.log({token})
    return axios.create({
        baseURL,
        headers: {
            Authorization: token
        }
    });
};
