/* eslint-disable no-console */
'use strict';
const loaf = {
  flour:300,
  water:210,
  hydration:function(){
    return this.flour/this.water *100;
  }
};
console.log(loaf);
console.log(loaf.hydration());
//