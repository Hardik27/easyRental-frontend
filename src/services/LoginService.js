import axios from "axios"
const USER_REST_API_URL="http://localhost:8080"

class LoginService{
    login(payLoad){
        var response=axios.post(`${USER_REST_API_URL}`+"/login",payLoad);
        console.log(response);
    }
}

export default new LoginService();
