import axios from "axios"
import setAuthorizationToken from "../utils/setAuthorizationToken"
import { SET_CURRENT_USER } from "../constants"
import jwtDecode from "jwt-decode"

export const setCurrentUser = (user) =>{
    return{
        type:SET_CURRENT_USER,
        user
    }
}

export const logout = () =>{
    return dispatch => {
        localStorage.removeItem("jwtToken");
        // 取消请求头中的信息
        setAuthorizationToken(false);
        // 清除掉redux中的数据
        dispatch(setCurrentUser({}))
    }
}


export const login = (data) =>{
    return dispatch =>{
        return axios.post("/api/auth",data).then(res =>{
            const token = res.data;
            localStorage.setItem('jwtToken',token);
            setAuthorizationToken(token)
            dispatch(setCurrentUser(jwtDecode(token)))
        })
    }
}