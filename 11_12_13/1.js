var dongho={
    hangsx:"Casio",
    mau:"den",
    gia: 5000000,
    gioitinh:"nam",
    xemngay : function() {
        console.log("24-05-2020");
    }
}

console.log(dongho.hangsx);
console.log(dongho.xemngay());
console.log(dongho.gia);

var hocvien={
    ten:"Việt",
    ho: "Nguyễn Quang",
    tuoi:24,
    chieucao:172,
    cannang:47,
    tendaydu:function(){
        return this.ho+ " "+ this.ten;
    },
    danhgia: function(){
        if(this.chieucao/this.cannang<3){
            return "Body đẹp";
        }
        else {
            return "Hơi gầy, cần bồi dưỡng thêm";
        }
    }

}
console.log(hocvien.tendaydu());
console.log("Tuổi của học viên là " + hocvien.tuoi);
console.log(hocvien.danhgia());

console.log("hôm nay trời đẹp! tôi muốn \"đi chơi\" ");
