let productBig=JSON.parse(sessionStorage.getItem('productBig'));
if(!productBig)
location.href="Main.html";
let containerProd=document.querySelector('#containerProd');
containerProd.innerHTML+=`<div><img src="${productBig.image}" class="image"/><br></div><div id="anotherDiv"><small>${productBig.name}</small><br><br><strong class="english">${productBig.english}</strong><br><strong id="price">${productBig.price} ₪</strong><br><small id="makat">מקט : ${productBig.makat} </small><br>
<a id="a" >לחץ כאן לבדיקת מיקום המוצר בחנות</a>
<div id="windows">

</div>
<div id="quantity">
<small>כמות:</small>
<div id="plusMinuse">
    <div class="stylePlus" id="plus">+</div>
    <div class="styleSum_quantity" id="sum_quantity"></div>
    <div class="styleMinus" id="minus">-</div>
</div>
</div> 
<a id="shopBage">הוספה לרשימה שלי</a></div><div id="openWindowes"></div>`;
const plus=document.querySelector('#plus');
const sum_quantity=document.querySelector('#sum_quantity');
const windows=document.querySelector('#windows');
let sum=1;
plus.onclick=()=>{
    sum+=1;
    sum_quantity.innerHTML=sum;
}
const shopBage=document.querySelector('#shopBage');
const allShopArr=document.querySelectorAll('#allShopArr');
const carry = JSON.parse(sessionStorage.getItem('carry')) || [];
sum_quantity.innerHTML=sum.toString();
const minus=document.querySelector('#minus');
const more=document.querySelector('#a');
const money=0;
const toView=document.querySelector('#toView');
const openWindowes=document.querySelector('#openWindowes');
more.onclick=()=>{
    let place;
    windows.innerHTML=`<small class="column">טור: ${productBig.column} </small><br><small class="shelf"> מדף:${productBig.shelf}</small>`;
}
minus.onclick=()=>{
    if(sum>1)
    {
       sum-=1;
       sum_quantity.innerHTML=sum; 
    }
    
}
let index= carry.length;
shopBage.onclick=()=>{
   productBig=JSON.parse(sessionStorage.getItem('productBig'));
    productBig.quentity=sum;
    if(index<1)
    {
        carry[index]=productBig;
        index+=1;
        sessionStorage.setItem('carry',JSON.stringify(carry));
    }
    else
    {
        let flag =true;
        carry.forEach(element => {
            if(element.makat===productBig.makat)
            {
               element.quentity+=productBig.quentity;
               sessionStorage.setItem('carry',JSON.stringify(carry));
               flag=false;
            }
          });   
            if(flag)
            { 
             carry[index]=productBig;
             index+=1;
             sessionStorage.setItem('carry',JSON.stringify(carry));
            }
    }
   
        createBageShop(productBig);

} 
//openWindow.innerHTML=`<h3>המוצר הנרכש כעת </h3>`
const createBageShop=(productBig)=>{
    openWindowes.innerHTML=`<div id="openWindow"><h3>מוצר חדש התווסף לרשימה שלי</h3><img src="${productBig.image}" id="smallImg"/><br><small>${productBig.name}</small><br><strong>${productBig.english}</strong><br><strong>${productBig.price} ₪</strong></div>`
}
