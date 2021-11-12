// task 1.1

var str_alpha = "webmaster";

function sortAlpha(text) {
  return text.split("").sort().join("");
}
console.log(sortAlpha(str_alpha));

// task 1.2
var arrStr = ["AABBBCCCCCAADDDD", "PPPQRRRSTTQQS", "XYZ"];

var cb = (pre, cur) => {
  if (pre === 0) {
    pre = [];
    pre[0] = 1;
    pre[1] = cur;
  } else if (pre[pre.length - 1] === cur) {
    pre[pre.length - 2] += 1;
  } else {
    pre.push(1);
    pre.push(cur);
  }
  return pre;
};
function countChar(text) {
  var arr = text.split("");
  var result = "";
  arr = arr.reduce(cb, 0);
  return arr.join("").replace(/1/g, "");
}

arrStr = arrStr.map((el) => countChar(el));
console.log(arrStr);

// task 1.3

arrNum = [10,15,3,7]
k =17
function findSum(arr,k){
  return  arr.reduce((pre,cur)=>{
        arr.shift()
       arr.forEach(el => {
           if(cur+el==k) pre= true
       });
       return pre
   },false)
}

console.log(findSum(arrNum,k))
