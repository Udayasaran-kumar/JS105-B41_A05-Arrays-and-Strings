var scores=[40,95,30,96,40,75,90,35,98,28];
console.log(scores);
for(let i=0;i<scores.length;i++){
  if(scores[i]<=40){
    scores[i]=scores[i]+20;
  }else if(scores[i]>=90){
    scores[i]=90;
  }
}console.log(scores);
let count=0;
for(let j=0;j<scores.length;j++){
  if(scores[j]>=50){
    count++;
  }
}console.log(count);
