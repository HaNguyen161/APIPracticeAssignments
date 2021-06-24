//đặt tên mới
let new_name = "APIEZ"+seconds;

// lấy giây ở khoảnh khắc này
let today = new Date();
let seconds = today.getSeconds();

let token = "Bearer "+pm.environment.get("token");

//patch url
let patch_url = pm.environment.get("url")+"/public-api/users/"+pm.environment.get("ID_Random");

//tạo request mới và gửi
const postRequest = {
        url: patch_url,
        method: 'PATCH',
        header: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': token
        },
 
        body: {
            mode:'raw',
            raw: JSON.stringify({
            'name': new_name
        })
  }
}
pm.sendRequest(postRequest, function (err, response) {
         console.log(response.json());
});

pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});
        