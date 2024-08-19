import { get } from "../untils/request";

export const getQuestionByTopicId = async(topicId) =>{
   
    const result = await get(`questions?topicId=${topicId}`);
    return result
}