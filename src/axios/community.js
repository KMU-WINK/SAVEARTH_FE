import {baseService} from "./user";

export const getBoard = async () => {
    try {
        return await baseService.get('/community/board');
    } catch (e) {
        console.log(e.response)
        return e.response
    }
}
