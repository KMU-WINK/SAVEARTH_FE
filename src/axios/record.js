import {baseService} from "./user";

export const getRecord = async (user_id) => {
    try {
        return await baseService.get(`/route?user_id=${user_id}`);
    } catch (e) {
        console.log(e.response)
        return e.response
    }
}

export const addRecord = async (args) => {
    const {date, datetime, activeTime, distance, step} = args;
    try {
        const response = await baseService.post('/',{
            date, datetime, activeTime, distance, step
        })
        console.log(response);
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

