const allShopArr=document.querySelector('#allShopArr');
let carryBage=JSON.parse(sessionStorage.getItem('carry'));
// sessionStorage.setItem('buy',JSON.stringify(carry));
let buy=JSON.parse(sessionStorage.getItem('buy'));
let allSum=0;//משתנה שבו יכנס הסכום הכולל של כל ההזמנה
const removeAll=document.querySelector('#removeAll');
const allSumDiv=document.querySelector('#allSum');
const toPay=document.querySelector('#toPay');
// שליפת המוצרים שברשימת ההזמנות מהסיסנסורג עי שליפת 
carryBage.forEach(productBig => {
    const anotherProduct=document.createElement('div');
    anotherProduct.classList.add('divim');
    anotherProduct.innerHTML=`<img src="${productBig.image}"/><br><small>${productBig.name}</small><br><strong>${productBig.english}</strong><br><strong>${productBig.price} ₪</strong>  
    <div id="plusMinuse2">
    <div class="plus2">+</div>
    <div class="quantity2">${productBig.quentity}</div>
    <div class="minus2">-</div>
</div>
<div class="x"><a> מחק</a></div>`;
    allShopArr.append(anotherProduct);
    allSum+=productBig.quentity*productBig.price;

});
allSumDiv.innerHTML=`₪${allSum}`;
const divim=document.querySelectorAll('.divim');
const plus2=document.querySelectorAll('.plus2');
const minus2=document.querySelectorAll('.minus2');
const sum_quantity2=document.querySelectorAll('.quantity2');
let sum=0;
const x=document.querySelectorAll('.x');
let operator=carryBage[0];
let op;

plus2.forEach((pluses,index) => {
pluses.onclick = minus2[index].onclick= (e)=>{
    mathSum(e.target==pluses,index);
    // carryBage[index].quentity+=1;
    // op='plus';
    // operator=carryBage[index];
    // sum_quantity2[index].innerHTML=carryBage[index].quentity;
    // mathSum(op);
}
});
x.forEach((element,index)=>{
element.onclick=()=>{
    remove(index);
}

});
const remove=(index)=>{
    if (carryBage[index].quentity===0)
    {
       carryBage[index].quentity=1;
    }
    allSum-=carryBage[index].quentity*carryBage[index].price;
    allSumDiv.innerHTML=allSum;
    carryBage=carryBage.filter((element)=>{return element.quentity>0;});
    divim[index].innerHTML='';
}
const mathSum=(ifisPlus,index)=>{
    let math=-1;
    debugger;
    if (ifisPlus)
        math=1;
    carryBage[index].quentity+=math; 
    sum_quantity2[index].innerHTML=carryBage[index].quentity;
       if (carryBage[index].quentity==0)
        remove(index);
        else
        {
            allSum+=carryBage[index].price*math;
            allSumDiv.innerHTML=allSum;
        }

    sessionStorage.setItem('carry',JSON.stringify(carryBage));//  sessionstorege אבל חשבנו שיותר נכון ל localstorege  יש אפשרות להכניס את הנתונים ל  

}
removeAll.onclick=()=>{
    allShopArr.innerHTML='';
    carryBage=[];
    sessionStorage.setItem('carry',JSON.stringify(carryBage));
    allSumDiv.innerHTML=0;
    allSum=0;
    sessionStorage.setItem('allSum',JSON.stringify(allSum));
};
toPay.onclick=()=>{
    sessionStorage.setItem('allSum',JSON.stringify(allSum));
}


