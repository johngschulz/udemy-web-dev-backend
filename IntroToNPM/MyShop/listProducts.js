var faker = require("faker");
function fakeShop(){
    console.log("++++++++++++++++++++++++");
    console.log("  Welcome to FakeShop");
    console.log("++++++++++++++++++++++++");
    for(var i = 0; i<10; i++){
        console.log(faker.fake("{{commerce.productName}} - ${{commerce.price}}"));
}
}
fakeShop();