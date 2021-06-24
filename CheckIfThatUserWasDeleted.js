let resp = JSON.parse(responseBody);
let report = resp.data.message;
if(report.includes("Resource not found")){
    pm.test("Status code is 200", function () {
        pm.response.to.have.status(200);
    });
}