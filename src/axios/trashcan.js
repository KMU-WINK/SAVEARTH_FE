import {baseService} from "./user";

export const getTrashCan = async () => {
    try {
        return await baseService.get('/trashcan/');
    } catch (e) {
        console.log(e.response)
        return e.response
    }
}

export const addTrashCan = async (args) => {
    const {trashcan_x, trashcan_y} = args;
    console.log(args);
    try {
        const response = await baseService.post('/trashcan/',{
            trashcan_x, trashcan_y
        })
        return response.status;
    } catch (e) {
        return Number(e.message.slice(e.message.length - 3));
    }
}

export const delTrashCan = async (args) => {
    const {trashcan_id} = args;
    try {
        return await baseService.delete(`/trashcan/${trashcan_id}/`);
    } catch (e) {
        console.log(e.response.status);
        return e.response.status;
    }
}
