import axios from "axios";
import {getData} from "./asyncStorage";
import {url} from "./user";

export const getTrash = async () => {
    const token = await getData('token');
    try {
        return await axios.get(`${url}/trash/`,
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

export const addTrash = async (args) => {
    const token = await getData('token');
    try {
        const response = await axios.post(`${url}/trash/`,
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
        return Number(e.message.slice(e.message.length - 3));
    }
}

export const delTrash = async (trash_id) => {
    const token = await getData('token');
    try {
        const result = await axios.delete(`${url}/trash/${trash_id}/`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${token.Token}`
                }
            }
        );
        return result.status;
    }
    catch (e) {
        console.log(e.response.status);
        return e.response.status;
    }
}
