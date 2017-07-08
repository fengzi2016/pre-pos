'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var shang;
  for(var i=0;i<collectionA.length;i++){
    for(var j=0;j<objectB.value.length;j++){
      if(collectionA[i].key==objectB.value[j]){
        shang=parseInt(collectionA[i].count/3);
        collectionA[i].count-=shang;
        break;
      }
    }
  }
  return collectionA;
}
