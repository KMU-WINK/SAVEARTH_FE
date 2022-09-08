import {baseService} from "./user";

export const getTrashCan = async () => {
    try {
        return await baseService.get('/trashcan/');
    } catch (e) {
        console.log(e.response)
        return e.response
    }
}
