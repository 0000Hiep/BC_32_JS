function caculate(){
    var n=document.getElementById("txt-n").value;
    var n1 = Math.floor(n/10);
    console.log("số hàng chục = "+n1);
    var n2 = Math.floor(n%10);
    console.log("số hàng đơn vị = "+n2);
    var sum = n1+ +n2;
    console.log("tổng = "+sum);

}