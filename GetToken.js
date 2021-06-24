const datacc = cheerio.load(pm.response.text());
var accessToken = datacc("samp[class='user-select-all text-break']").text();
pm.environment.set("token",accessToken);
console.log(pm.environment.get("token"));

pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});