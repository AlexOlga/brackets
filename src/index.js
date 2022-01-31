module.exports = function check(str, bracketsConfig) {
  // your solution
  if (str==''){return true};
if (bracketsConfig.length==0){return false};
 const  open1=bracketsConfig.map((item)=>{return item[0]});
 let newObj={};
 bracketsConfig.forEach((item)=>{
   newObj[item[0]]=item[1]});
   //console.log('newObj',newObj);
let stek=[];
for (let i=0; i<str.length; i++ ){
  //console.log(`${i} in ${str.length}`);
let item=str[i];
//console.log('item', item);
  if (open1.includes(item)) { stek.push(item);
  //console.log('stak+',stek );
  }
    else {
     // console.log('stak-',stek );
      if (stek.length==0){
     //   console.log('stak pust');
        return false} ;

        let n=stek[stek.length-1];
       // console.log('stak posl', n);
        //console.log ('ob', newObj[n]);
        if (item==newObj[n]) {stek.pop();
         // console.log('stak del',stek );
        } else {return false};
      }
    }
    if (stek.length==0) {return true};
}

