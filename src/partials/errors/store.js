let newInfo = [];
count=4;
for(let i=1;i< count+1;i++){
    let q = 'question'+ (i);
    newInfo.push(q);
} 
console.log("new array",newInfo);


let arrayEmpty = {
  class_name: "wdwd",
  user_id: 1,
};
count=4;
for(let i=1;i< count+1;i++){
    let q = 'question'+ (i);
    arrayEmpty[q] = ""
} 
console.log("arrayEmpty ",arrayEmpty);

const info = {
question1 : "yam",
question2 : "beans"
}
console.log("entered array",info);

const arrayobj = Object.keys(info).map(arr =>{
return arr
});
console.log("arrayobj",arrayobj);
const arrDiff = newInfo.filter(ins => !arrayobj.includes(ins));
console.log("array difference",arrDiff);

for(let i=0; i< arrDiff.length  ; i++ ){
info[arrDiff[i]] = ""
}


    info['class_name'] = "wdwd"
    info['user_id'] = "1"


console.log(info);