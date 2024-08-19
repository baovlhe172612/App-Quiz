


// Hàm để set thời gian bao lâu cho 1 cookie
export function setCookies(cname,cvalue,exdays){
    //Tạo một đối tượng Date đại diện cho thời gian hiện tại
    var d = new Date();
    d.setTime(d.getTime()+(exdays*34*60*60*1000));
    var expires = "expires="+d.toUTCString();
    //Thiết lập cookie bằng document.cookie
    document.cookie = cname+"="+cvalue+";"+expires
}

// Hàm để lấy giá trị của cookie dựa trên tên
export function getCookies(cname) {
    // Tạo một chuỗi tìm kiếm bằng cách ghép tên cookie với dấu "="
    var name = cname + "=";

    // Tách các cookie trong document.cookie thành mảng các chuỗi, sử dụng dấu chấm phẩy làm điểm tách
    var ca = document.cookie.split(";");

    // Duyệt qua từng phần tử của mảng cookie
    for (var i = 0; i < ca.length; i++) {
         // Lấy một cookie từ mảng
        var c = ca[i]; 
        // Loại bỏ khoảng trắng ở đầu chuỗi cookie
        while (c.charAt(0) == ' ') {
             c = c.substring(1);
        }
        // Kiểm tra xem cookie có bắt đầu bằng tên cần tìm không
        if (c.indexOf(name) == 0) {
        // Nếu có, trả về giá trị của cookie bằng cách cắt bỏ phần tên và dấu "="
        return c.substring(name.length, c.length);
        }
    }
// Nếu không tìm thấy cookie, trả về chuỗi rỗng
return "";
}
export function deleteCookie(cname1) {
    // document.cookie = `${cname}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    document.cookie = "cname1=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
}

export function deleteAllCookies() {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i];
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
        document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
    }
}


export function deleteToken(){
//  document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
//  document.cookie = "email=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
//  document.cookie = "fullName=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
    deleteCookie("token");
    deleteCookie("email");
    deleteCookie("fullName");
}


