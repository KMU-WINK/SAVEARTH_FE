import axios from 'axios';
import {storeData} from "./asyncStorage";

const baseURL = new URL('http://127.0.0.1:8000');
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';

export const baseService = axios.create({
    baseURL: baseURL.toString(),
    headers: {
        'Content-Type': 'application/json',
        withCredentials: true,
    }
})

export const signup = async (args) => {
    const {
        nickname, email, name, password,
        birth_year, birth_month, birth_day, gender
    } = args;
    console.log(
        nickname, email, name, password,
        birth_year, birth_month, birth_day, gender);
    try {
        const response = await baseService.post('/user/signup/', {
            nickname, email, name, password,
            birth_year, birth_month, birth_day, gender
        });
        return response.status;
    } catch (e) {
        console.log(e);
        return e.message.slice(e.message.length - 3)
    }
}

export const login = async (args) => {
    const {username, password} = args;
    try {
        const response = await baseService.post('/user/login/',{
            username,
            password
        })
        await getUserInfo(response.data.Token);
        return response.status;
    } catch (e) {
        console.log(e)
        return Number(e.message.slice(e.message.length - 3))
    }
}

export const getUserInfo = async(token) => {
    try {
        const result = await axios.get('http://127.0.0.1:8000/user/getuser/',
        {headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            }}
        )
        await storeData('userInfo', result.data[0].id);
        return result;
    } catch (e) {
        console.log(e.response)
        return e;
    }
}
