import axios from "axios"
const USER_REST_API_URL="http://localhost:8080"

class LoginService{
    login(payLoad){
        axios.post(`${USER_REST_API_URL}`+"/",payLoad)
        .then(res => {
            console.log(res.data);
          })
    }
}

export default new LoginService();
