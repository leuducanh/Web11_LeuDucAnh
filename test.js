// var print = (callback)=>{
//     console.log("abcd");

//     var timeout = 1000;

//     setTimeout(() => {
//         console.log("dep trai vl");
//         callback();
//     }, timeout);
// }

// var callbackFun=()=>{
//     console.log("end");
// }

// console.log("start!")
// print(callbackFun);
// console.log("finish!")
// var a=5;
// var a=6;
// console.log(a,b);

// var arr=[];
// var countDown = (time)=>{
//     var n = time;
//     for(var i = time;i > 0;i--){
//         arr.push(i);
//         setTimeout(()=>{
//             console.log( arr[time-n]);
//             n--;
//         },(time -1)*1000);
//     }
// }


// countDown(5);
// var countDown = (time)=>{
//     for(var i = time;i > 0;i--){
//         var j = i;
//         setTimeout(()=>{
//             console.log(j);
//         },(time -1)*1000);
//     }
// }


// countDown(5);


// function sort(a) {
//     for( var i =0;i < a.length-1;i++){
//         for(var j = i+1;j < a.length;j++){
//             if(a[j] < a[i]){
//                 var swap = a[i];
//             a[i] = a[j];
//             a[j] = swap;
//             }
//         }
//     }
// }

// var a= [3,2,1];
// sort(a);
// console.log(a[0] + " " + a[1]);

const fs = require('fs');
var data = JSON.parse(fs.readFileSync('./data.json','utf-8'))
console.log(data);