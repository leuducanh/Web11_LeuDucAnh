'use strict'

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


module.exports = sort
