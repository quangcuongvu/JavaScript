var x= "Dien thoai xiaomi, samsung, iphone, vsmart";

console.log(x.length); // tìm ra độ dài biến
// var vitri=x.indexOf('iphone'); // nếu có iphone trong x, thì trả về vị trị củ từ cái đó
// nếu không tìm thấy trả về là -1

var vitri=x.search('iphone'); // trùnh indexOf
if (vitri != -1){
    console.log("Tìm thấy ");
    var moi=x.replace('iphone', 'bphone');
    console.log(moi);
}
else {
    console.log("Không tìm thấy");
}

// hàm split - tách thành mảng

var x= "iphone, adroid, nokia, blackberry, samsung";
var mang=x.split(',');
console.log(mang);

for (var i = 0; i < mang.length; i++) {
    console.log(mang[i]);
}