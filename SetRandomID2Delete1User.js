// lim của danh sách 5 người dùng
let lim = pm.environment.get("list_id").length;
let random_position = Math.floor(Math.random() * lim); 
let list_id =  pm.environment.get("list_id"); 
pm.environment.set("ID_Random", list_id[random_position]);
let ID_random = pm.environment.get("ID_Random");

//set danh sách 4 người dùng còn lại
let listOf4 = [];
for(let i = 0; i<list_id.length;i++){
    if(i!=random_position){
        listOf4.push(list_id[i]);
    }
}
pm.environment.set("list_4_id", listOf4);

// lim của danh sách 4 người dùng còn lại
let lim4 = pm.environment.get("list_4_id").length;
let random_position4 = Math.floor(Math.random() * lim4);

//Chọn ra 1 người dùng bất kỳ để xóa dựa vào id
pm.environment.set("ID_Random_to_Delete", listOf4[random_position4]);

pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});