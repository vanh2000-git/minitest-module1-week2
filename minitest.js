// BÀI 1
function tinhtiendien(){
    let x = +document.getElementById('dientieuthu').value;
    let y;
    if (x<=50){
        y = x*1893;
    } else if (x<=100){
        y = (x-50)*1956 + 50*1893;
    } else if (x<=200){
        y = (x-100)*2271 + 50*1893 + 50*1956;
    } else if (x<=300){
        y = (x-200)*2860 + 50*1893 + 50*1956 + 100*2271;
    } else if (x<=400){
        y = (x-300)*3197 + 50*1893 + 50*1956 + 100*2271 + 100*2860;
    } else if (x>400){
        y = (x-400)*3302 + 50*1893 + 50*1956 + 100*2271 + 100*2860 + 100*3197;
    }
    document.getElementById('tiendien').innerHTML = "Số tiền của bạn tháng này là: " + y + " vnđ";
}
// BÀI 2
function tinhnam(){
let year =+document.getElementById('year').value;
let isLeapYear = false;

let isDivisibleBy4 = year % 4 == 0;
if (isDivisibleBy4) {
    let isDivisibleBy100 = year % 100 == 0;
    if (isDivisibleBy100) {
        let isDivisibleBy400 = year % 400 == 0;
        if (isDivisibleBy400) {
            isLeapYear = true;
        }
    } else {
        isLeapYear = true;
    }
}

if (isLeapYear) {
    document.getElementById('result').innerHTML = year + " là năm nhuận";
} else {
    document.getElementById('result').innerHTML = year + " là năm không nhuận";
}
}
//Bài 3
function kiemtrahinhtamgiac(){
    let a = +document.getElementById('a').value;
    let b = +document.getElementById('b').value;
    let c = +document.getElementById('c').value;
    if (a>0 && b>0 && c>0 && a+b>c && b+c>a && c+a>b){
        if(a==b && b==c){
            document.getElementById('ketquakiemtra').innerHTML = 'Đây là 3 cạnh của tam giác đều';
        } else if(a==b || b==c || a==c){
            document.getElementById('ketquakiemtra').innerHTML = 'Đây là 3 cạnh của tam giác cân';
        } else if((a^2 + b^2 == c^2 || c^2 + b^2 == a^2 || a^2 + c^2 == b^2) && (a==b || a==c)){
            document.getElementById('ketquakiemtra').innerHTML = 'Đây là 3 cạnh của tam giác vuông cân';
        } else if (a^2 + b^2 == c^2 || c^2 + b^2 == a^2 || a^2 + c^2 == b^2) {
            document.getElementById('ketquakiemtra').innerHTML = 'Đây là 3 cạnh của tam giác vuông';
        } else {
            document.getElementById('ketquakiemtra').innerHTML = 'Đây là 3 cạnh của hình tam giác';
        }
    } else {
        document.getElementById('ketquakiemtra').innerHTML = 'Đây không phải là 3 cạnh của hình tam giác';
    }
}

