import {url} from "./user";
import axios from "axios";
import {getData} from "./asyncStorage";

export const getTrashCan = async () => {
    const token = await getData('token');
    try {
        return await axios.get(`${url}/trashcan/`,
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

export const addTrashCan = async (args) => {
    const token = await getData('token');
    try {
        const response = await axios.post(`${url}/trashcan/`,
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
        return Number(e.message.slice(e.message.length - 3));
    }
}

export const delTrashCan = async (trashcan_id) => {
    const token = await getData('token');
    try {
        const result = await axios.delete(`${url}/trashcan/${trashcan_id}/`,
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
