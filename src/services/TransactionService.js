import axios from 'axios'

const AUTHENTICATION_BASE_REST_API = "http://localhost:8080/api/appUser";

class AppService{
    
    registerAppUser(appUser){
        return axios.post(AUTHENTICATION_BASE_REST_API + "/register", appUser)
    }

    loginAppUser(appUser){
        return axios.post(AUTHENTICATION_BASE_REST_API + "/login", appUser)
    }
}

export default new AppService();