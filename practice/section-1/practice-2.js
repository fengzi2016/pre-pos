'use strict';

function collectSameElements(collectionA, collectionB) {
  var a=new Array();
  for(var i=0;i<collectionA.length;i++){
    for(var j=0;j<collectionB[0].length;j++){
      if(collectionA[i]==collectionB[0][j]){
        a.push(collectionA[i]);
        break;
      }
    }
  }
  return a;
}
