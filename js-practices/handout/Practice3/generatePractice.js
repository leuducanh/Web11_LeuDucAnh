'use strict'

function generate(testLengthArray){
    var json = "[";
    for(var i = 0;i < testLengthArray.length;i++){
      json += generateOneJson(testLengthArray[i]);
      if(i < testLengthArray.length-1){
        json = json +",";
      }else{
        json += "]";
      }
    }
    return json;
}

function generateOneJson(length) {
  var json = "{" + "input" + ":" ;
  var max = 0
  var arr = [];
    for(var i = 0;i < length;i++){
      var newElement;
      var decimal = 10;
        decimal = Math.floor((Math.random() * 10) + 1);
        newElement = Math.floor((Math.random() * decimal));
      arr.push(newElement);
    }

    sort(arr);
    json += arr.toString();
    var output;
    do{
      output = Math.floor((Math.random() * 10) + 1);
    }while(output >= length);

    var target = arr[output];

    return json += ",\"target\":" + target + ",\"output\":" + output + "}";
}


function sort(input) {
  return quickSort(input,0,input.length-1);
}

function  quickSort(input,start,end){
  var i = start;
  var j = end;
  var swap;
  var mid = input[Math.floor((start + end)/2)];
  while(i <= j){
    while(input[i] < mid) i++;
    while(input[j] > mid) j--;
    if(i <= j){
      swap = input[i];
      input[i] = input[j];
      input[j] = swap;
      i++;
      j--;
    }
  }

  if(start < j) quickSort(input,start , j);
  if(i < end) quickSort(input,i,end);

  return input;
}

module.exports = generate
