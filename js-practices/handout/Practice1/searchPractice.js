'use strict'
function binarySearch(input,target,start,end) {
  let mid = Math.floor((end+start)/2);
  
  if(input[mid] === target){
      console.log(mid + " " + input[mid]);
      return mid;
  } else if(input[mid] < target&& (end-start) > 1){
    return binarySearch(input,target,mid,end);
  }else if(input[mid] > target && (end-start) > 1){
    return binarySearch(input,target,start,mid);
  }else{
    return -1;
  }
}

function search(input, target) {
  if(typeof(target) =='undefined'){
    return -1;
  }

  return binarySearch(input,target,0,input.length);
}

  // let pos = -1;
  // input.forEach(element => {
  //     if(element === target){
  //       return; 
  //     }
  //     pos++;
  // });

  // return pos;
  // // for (var i = 0; i < input.length - 1; i++) {
  // //   for (var j = i + 1; j < input.length; j++) {
  // //     if (input[j] < input[i]) {
  // //       var swap = input[i];
  // //       input[i] = input[j];
  // //       input[j] = swap;
  // //     }
  // //   }
  // // }

  // // return binarySearch(input,target);
 

module.exports = search
