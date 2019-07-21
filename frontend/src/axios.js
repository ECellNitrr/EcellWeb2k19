import axios from "axios";

let baseURL = "http://localhost:8000"

if( process.env.NODE_ENV === 'production'){
    baseURL = ""
}

export default () => {
    return axios.create({
        baseURL,
        headers: {
            authorization: sessionStorage["token"]
        }
    });
};
