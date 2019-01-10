import axios from 'axios'

const host = 'https://sixdegrees-mx.herokuapp.com/auth'

//signup
export const signup = (user) => {
    return axios.post(host+'/signup', user)
        .then(r=>r.data)
        .catch(e=>e.response)
}

//login
export const login = (user) =>{
    return axios.post(host+'/login', user,{withCredentials:true})
        .then(r=>r.data)
        .catch(e=>e.response)
}

//logout
export const logout = (user) =>{
    return axios.get(host+'/logout', user,{withCredentials:true})
        .then(r=>r.data)
        .catch(e=>e.response)
}

//profile

export const getProfile = () =>{
    return axios.get(host+'/profile',{withCredentials:true})
        .then(r=>r.data)
        .catch(e=>{
            console.log(e)
            return e.response
            
        })
}