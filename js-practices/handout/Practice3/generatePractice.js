'use strict'

function getRandomNumber(a, b) {
  return Math.floor(Math.random() * (b - a + 1)) + a;
}

function generate(testLengthArray) {
  // var json = "[";
  // for(var i = 0;i < testLengthArray.length;i++){
  //   json += generateOneJson(testLengthArray[i]);
  //   if(i < testLengthArray.length-1){
  //     json = json +",";
  //   }else{
  //     json += "]";
  //   }
  // }
  // return json;

  var result = [];
  if (testLengthArray.length < 4) {
    testLengthArray.forEach((item, index) => {
      var obj = {};
      obj.input = [];
      for (let i = 0; i < item; i++) {
        obj.input.push(getRandomNumber(-10000, 10000));
      }

      obj.target = obj.input[getRandomNumber(0, item)];
      obj.output = obj.input.indexOf(object.target);
      result.push(obj);
    });
  } else {
    testLengthArray.forEach((item, index) => {
      var obj = {};
      obj.input = [];
      for (let i = 0; i < item; i++) {
        obj.input.push(getRandomNumber(-10000, 10000));
      }

      switch (index) {
        case 0:
          obj.target = 10001;
          break;

        case 1:
          obj.target = obj.input[0];
          break;
        case 2:
        obj.target = obj.input[item - 1];
          break;
        case 3:
        obj.target = obj.input[getRandomNumber(1,item-2)];
          break;
        default:
        obj.target = obj.input[getRandomNumber(0,item-1)];
          break;
      }

      obj.output = obj.input.indexOf(obj.target);
      result.push(obj);
    });
  }

  return result;
}

// function generateOneJson(length) {
//   var json = "{" + "input" + ":" ;
//   var max = 0
//   var arr = [];
//     for(var i = 0;i < length;i++){
//       var newElement;
//       var decimal = 10;
//         decimal = Math.floor((Math.random() * 10) + 1);
//         newElement = Math.floor((Math.random() * decimal));
//       arr.push(newElement);
//     }

//     sort(arr);
//     json += arr.toString();
//     var output;
//     do{
//       output = Math.floor((Math.random() * 10) + 1);
//     }while(output >= length);

//     var target = arr[output];

//     return json += ",\"target\":" + target + ",\"output\":" + output + "}";
// }


// function sort(input) {
//   return quickSort(input,0,input.length-1);
// }

// function  quickSort(input,start,end){
//   var i = start;
//   var j = end;
//   var swap;
//   var mid = input[Math.floor((start + end)/2)];
//   while(i <= j){
//     while(input[i] < mid) i++;
//     while(input[j] > mid) j--;
//     if(i <= j){
//       swap = input[i];
//       input[i] = input[j];
//       input[j] = swap;
//       i++;
//       j--;
//     }
//   }

//   if(start < j) quickSort(input,start , j);
//   if(i < end) quickSort(input,i,end);

//   return input;
// }

module.exports = generate
