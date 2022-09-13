import {baseService} from "./user";

export const getTrash = async () => {
    try {
        return await baseService.get('/trash/');
    } catch (e) {
        console.log(e.response)
        return e.response
    }
}

export const addTrash = async (args) => {
    const {trash_x, trash_y} = args;
    console.log(args);
    try {
        const response = await baseService.post('/trash/',{
            trash_x, trash_y
        })
        return response.status;
    } catch (e) {
        return Number(e.message.slice(e.message.length - 3));
    }
}

export const delTrash = async (args) => {
    const {trash_id} = args;
    console.log(args);
    try {
        return await baseService.delete(`/trash/${trash_id}`);
    } catch (e) {
        console.log(e.response.status);
        return e.response.status;
    }
}
