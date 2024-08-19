export const checkLogin = (status) => {
    console.log("status in checkLogin", status)
    return {
        type: 'CHECK_LOGIN',
        status,  // hoặc payload: status
    };

}