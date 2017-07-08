'use strict';
function collectSameElements(collectionA, collectionB) {
  var a=new Array();
  for (var i = 0; i < collectionA.length; i++) {
    for (var j = 0; j < collectionB.length; j++) {
      if (collectionA[i] == collectionB[j]) {
        a.push(collectionA[i]);
        break;
      }
    }
  }
  return a;
}
  /*var maxnum,minnum;
  if(collectionA.length>collectionB.length) {
    maxnum = collectionA.length;
    minnum = collectionB.length;
  }
  else{
    maxnum=collectionB;
    minnum=collectionA;
  }
  var a=new Array();
  var b=new Array();
  var k=0,t=0;
  if(maxnum==collectionB.length){
    for(var i=0;i<minnum;i++){
      for(var j=0;j<maxnum;j++){
        if(collectionA[i]==collectionB[j]){
          a[k++]=collectionA[i];
          break;
        }
      }
    }
   for(i=0;i<maxnum;i++){
      for(j=0;j<k;j++){
        if(collectionB[i]==a[j]){
          b[t++]=collectionB[i];
          break;
        }
      }
    }
  }
  else{
    for(var i=0;i<minnum;i++){
      for(var j=0;j<maxnum;j++){
        if(collectionB[i]==collectionA[j]){
          a[k++]=collectionB[i];
          break;
        }
      }
    }
   for(i=0;i<maxnum;i++){
      for(j=0;j<k;j++){
        if(collectionA[i]==a[j]){
          b[t++]=collectionA[i];
          break;
        }
      }
    }
  }
  return b;*/


