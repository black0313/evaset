import axios from "axios";
export const api = ({dispatch}) => (next) => (action) => {
    if (action.type !== "api/apiCall") {
        next(action)
        return
    }
    next(action)
    const {url, method, data, onSuccess,params, onFail} = action.payload
   axios({
        baseURL: 'http://192.168.43.146:8080/api',

        headers:{
            Authorization:`Bearer ${localStorage.getItem('tokenname')}`
        },
        url, method, data,params
    }).then(res => {
         dispatch({
            type: onSuccess,
            payload: res.data
        })
        // console.log(res.data)
    }).catch(err => {
        dispatch({
            type: onFail,
            payload: {...err,success:false}
        })
    })
}
export default api
