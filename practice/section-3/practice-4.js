'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var tag=collectionA[0],k=0;
  var key=[];
  var count=[];
  count[0]=1;
  key[0]=tag;
  for(var i=1;i<collectionA.length;i++) {
    if (collectionA[i].length == 1) {
      if (collectionA[i] != tag) {
        key.push(collectionA[i]);
        tag = collectionA[i];
        count[++k] = 1;
      }
      else {
        count[k]++;
      }
    }
    else {
      var str = [];
      str = collectionA[i].split("-");
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
  var shang;
  for(var i=0;i<result.length;i++){
    for(var j=0;j<objectB.value.length;j++){
      if(result[i].key==objectB.value[j]){
        shang=parseInt(result[i].count/3);
        result[i].count-=shang;
        break;
      }
    }
  }
  return result;
}
