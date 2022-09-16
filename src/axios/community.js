import {url} from "./user";
import {getData} from "./asyncStorage";
import axios from "axios";

export const getBoard = async () => {
    const token = await getData('token');
    try {
        return await axios.get(`${url}/community/board/`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${token.Token}`
                }
            },
        );
    } catch (e) {
        console.log(e.response)
        return e.response
    }
}

export const getComment = async (board_id) => {
    const token = await getData('token');
    try {
        return await axios.get(`${url}/community/comment/${board_id}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${token.Token}`
                }
            },
        );
    } catch (e) {
        console.log(e.response)
        return e.response
    }
}

export const addBoard = async (args) => {
    const token = await getData('token');
    console.log(args);
    try {
        const response = await axios.post(`${url}/community/board/`,
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
export const addComment = async (args) => {
    const token = await getData('token');
    try {
        const response = await axios.post(`${url}/community/comment/`,
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

export const addLike = async (args) => {
    const token = await getData('token');
    try {
        const response = await axios.post(`${url}/community/like/`,
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

export const getLike = async () => {
    const token = await getData('token');
    try {
        return await axios.get(`${url}/community/like/`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${token.Token}`
                }
            },
        );
    } catch (e) {
        return Number(e.message.slice(e.message.length - 3));
    }
}
