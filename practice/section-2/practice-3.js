'use strict';

function countSameElements(collection) {
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
    else if(collection[i].length==3){
      var str = [];
      str = collection[i].split(/[-:]/);
      if(str[0]!=tag){
        key.push(str[0]);
        tag=str[0];
        count[++k]=parseInt(str[1]);
      }
      else
        count[k] +=parseInt(str[1]) ;
    }
    else if(collection[i].length==4) {
      var str2 = [];
      var str3 = [];
      str2 = collection[i].split("[");
      str3 = str2[1].split("]");
      if (str2[0] != tag) {
        key.push(str2[0]);
        tag = str2[0];
        count[++k] = parseInt(str3[0]);
      }
      else
        count[k] += parseInt(str3[0]);
    }
    else if(collection[i].length==5){
      var str2=[];
      var str3=[];
      str2=collection[i].split("[");
      str3=str2[1].split("]");
      if(str2[0]!=tag){
        key.push(str2[0]);
        tag=str2[0];
        count[++k]=parseInt(str3[0]);
      }
      else
        count[k]+=parseInt(str3[0]);
    }
  }
  var result=[];
  for(i=0;i<=k;i++){
    result[i]={};
    result[i].name=key[i];
    result[i].summary=count[i];
  }
  return result;
}
