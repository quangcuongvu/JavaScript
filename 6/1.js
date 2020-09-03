var x=1, y=2;
console.log(x+y);
var z=5;
var h= "Quang Cường"
// chia lấy dư
function chaythu(){
    z=z+1; // mỗi lần click thì tăng giá trị của z 1 đơn vị
    console.log("IQ của "+ h+ " là: "+ ((z%5)+1));
    // nhưng đến số 0 thì quay lại về 5

}