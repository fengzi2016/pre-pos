'use strict';

function countSameElements(collection) {
  var tag=collection[0],k=0;
  var key=[];
  var count=[];
  count[0]=1;
  key[0]=tag;
  for(var i=1;i<collection.length;i++){
    if(collection[i]!=tag){
         key.push(collection[i]);
         tag=collection[i];
         count[++k]=1;
    }
    else{
      count[k]++;
    }
  }
  var result=[];
  for(i=0;i<=k;i++){
    result[i]={};
    result[i].key=key[i];
    result[i].count=count[i];
  }
  return result;
}
