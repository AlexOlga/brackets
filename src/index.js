module.exports = function check(str, bracketsConfig) {
  // проверка коректности условий
if (str==''){return true};
if (bracketsConfig.length==0){return false};
//создаем массив открытых скобок
 const  open1=bracketsConfig.map((item)=>{return item[0]});
 // задаем объект ( => )
 let newObj={};
 bracketsConfig.forEach((item)=>{ newObj[item[0]]=item[1]});
 
let stek=[];
for (let i=0; i<str.length; i++ ){
    let item=str[i];
    //является ли скобка открытой, если открытая и закрытая скобки одинаковые, открывалась ли уже такая
    if ((open1.includes(item) && (item != newObj[item] )) || ((item==newObj[item]) && (!stek.includes(item))) )
    { stek.push(item);  }
    else {
      // скобка закрывающаяся
         if (stek.length==0){return false} ;
          let n=stek[stek.length-1];
             if (item==newObj[n]) {stek.pop();} 
             else {return false};
      }
    }
    if (stek.length==0) {return true} else {return false};
}

