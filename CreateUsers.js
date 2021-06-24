//chú ý: var là globally scoped (Ko block scoped đc), let là block scoped.
let listOfUsers = [];
let token = "Bearer "+pm.environment.get("token");
 
//tạo 5 người dùng
for(let i = 0; i<5;i++){
    let random = Math.floor(Math.random() * 9000) + 1;
    var em = "cs543"+random+"@gmail.com";
    pm.environment.set("email", e);
    const postRequest = {
        url: 'https://gorest.co.in/public-api/users/',
        method: 'POST',
        header: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': token
        },
 
        body: {
            mode:'raw',
            raw: JSON.stringify({
            'name':'AAAAAAAAAA',
            'gender':'Female',
            'email': em,
            'status':'Active'
        })
  }
}
    pm.sendRequest(postRequest, function (err, response) {
        //thêm người dùng vào listOfUsers
        listOfUsers.push(response.json().data.id);  
        });
    
}

pm.environment.set("list_id", listOfUsers);
 
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});
