import axios from "axios";

//let baseURL = "http://localhost:8000"
let baseURL = "https://ecell.nitrr.ac.in";

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
    let accessToken= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnQiOiJhbmRyb2lkIiwib3JnYW5pemF0aW9uIjoiRUNlbGwifQ.H2aaDJuOxK44D2kwRCWwv9s5rzJGCNYKT3thtQqN-hQ';
    const user = getuser()
    if(user){
        token = user.token
    }
    return axios.create({
        baseURL,
        headers: {
            Authorization: token,
            Access:accessToken
       
        }
    });
};
