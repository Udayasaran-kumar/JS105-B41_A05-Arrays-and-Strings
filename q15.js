var order_management=[["Order_id:Kannan"],["Order_id:Kumar"],["Order_id:Karnan"],["Order_id:Viruman"],
["Order_id:KannanKarnan"]];
order_management[7]=order_management[4];
order_management[6]=order_management[3];
order_management[5]=order_management[2];
order_management[4]=order_management[1];
order_management[3]=order_management[0];
order_management[2]=["Order_id:Durga"];
order_management[1]=["Order_id:Priya"];
order_management[0]=["Order_id:Aruna"];
order_management.pop();
order_management.pop();
console.log(order_management);
for(let i=0;i<=order_management.length-1;i++){
  if(i==order_management.length-1){
    console.log("processing order for",+order_management[order_management.length-1]);
  }
}order_management.pop();
console.log(order_management);
let bigname="";
for(let i=0;i<=order_management.length-1;i++){
  for(let j=0;j<=order_management[i].length-1;j++){
    bigname=order_management[i];
    if(order_management[i].length>bigname.length){
      bigname=order_management[i];
    }
  }
}console.log(bigname);
