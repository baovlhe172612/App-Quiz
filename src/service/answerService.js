import { getCookies } from "../helpers/cookie";
import { get } from "../untils/request";

export const getAnswerByUserId = async() =>{
   

    const userId = getCookies("id");
    console.log("userId",userId)
    const result = await get(`answers?userId=${userId}`);
    return result
}


export const getAnswer = async(id) =>{
    const result = await get(`answers/${id}`);
    return result
}