'use strict';

function countSameElements(collection) {
  /*var tag=collection[0],k=0;
  var key=[];
  var count=[];
  count[0]=1;
  key[0]=tag;
  for(var i=1;i<collection.length-1;i++){
  //  if(collection[i]>='a'&&collection[i]<='z'){
      if(collection[i]!=tag){
        key.push(collection[i]);
        tag=collection[i];
        count[++k]=1;
      }
      else{
        count[k]++;
      }
  //}
  }
  //  else{
  var str=[];
  str=collection[collection.length-1].split("-");
  key.push(str[0]);
  count[++k]=parseInt(str[1]);
  // }
  var result=[];
  for(i=0;i<=k;i++){
    result[i]={};
    result[i].key=key[i];
    result[i].count=count[i];
  }
  return result;*/

var tag=collection[0],k=0;
  var key=[];
  var count=[];
  count[0]=1;
  key[0]=tag;
  for(var i=1;i<collection.length;i++) {
    if (collection[i].length == 1) {
      if (collection[i] != tag) {
        key.push(collection[i]);
        tag = collection[i];
        count[++k] = 1;
      }
      else {
        count[k]++;
      }
    }
    else {
      var str = [];
      str = collection[i].split("-");
      key.push(str[0]);
      count[++k] = parseInt(str[1]);
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
