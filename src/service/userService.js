import { get,post } from "../untils/request"

export const login = async(email,pasword) =>{
   
    const result = await get(`users?email=${email}&password=${pasword}`);
    return result
}

export const register = async(options) =>{
   
    const result = await post(`users`,options);
    return result
}

export const checkExist = async(key,value) =>{
   
    const result = await get(`users?${key}=${ value}`);
    return result
}
// export const createProduct = async (data) =>{
//     const result = await post("products", data)
//     return result
// }

// export const deleteProduct = async (id) =>{
//         const result = await del(`products/${id}`);
//         return result;
// }
// export const editProduct = async (id, data) =>{
    
//     const result = await patch(`products/${id}`,data);
//     return result;
// }