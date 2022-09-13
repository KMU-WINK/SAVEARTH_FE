import axios from 'axios';
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
        console.log(response);
        return response.status;
    } catch (e) {
        console.log(e)
        return Number(e.message.slice(e.message.length - 3))
    }
}
