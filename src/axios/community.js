import {baseService} from "./user";

export const getBoard = async () => {
    try {
        return await baseService.get('/community/board');
    } catch (e) {
        console.log(e.response)
        return e.response
    }
}

export const getComment = async (board_id) => {
    try {
        return await baseService.get(`/community/comment/${board_id}`);
    } catch (e) {
        console.log(e.response)
        return e.response
    }
}

export const addBoard = async (args) => {
    const {title, location, content} = args;
    try {
        const response = await baseService.post('/community/board/',{
            title, location, content
        })
        return response.status;
    } catch (e) {
        return Number(e.message.slice(e.message.length - 3));
    }
}
export const addComment = async (args) => {
    const {board, comment} = args;
    try {
        const response = await baseService.post('/community/comment/',{
            board, comment
        })
        return response.status;
    } catch (e) {
        return Number(e.message.slice(e.message.length - 3));
    }
}

export const getLike = async (args) => {
    const {user, like_posts} = args;
    try {
        const response = await baseService.post('/community/like/',{
            user, like_posts
        })
        return response.status;
    } catch (e) {
        return Number(e.message.slice(e.message.length - 3));
    }
}
