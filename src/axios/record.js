import {baseService, url} from "./user";
import {getData} from "./asyncStorage";
import axios from "axios";

export const getRecord = async (user_id) => {
    const token = await getData('token');
    try {
        return await axios.get(`${url}/route/?user_id=${user_id}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${token.Token}`
                }
            }
        );
    } catch (e) {
        console.log(e.response)
        return e.response
    }
}

export const addRecord = async (args) => {
    const token = await getData('token');
    try {
        const response = await axios.post(`${url}/route/`,
            args,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${token.Token}`
                }
            },
        )
        return response.status;
    } catch (e) {
        console.log(e)
        return Number(e.message.slice(e.message.length - 3))
    }
}

export const delRecord = async (record_id) => {
    try {
        return await baseService.delete(`/trash/${record_id}`);
    } catch (e) {
        console.log(e.response.status);
        return e.response.status;
    }
}

