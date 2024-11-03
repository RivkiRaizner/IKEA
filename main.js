//id   מערך הקטוגוריות בעת לחיצה נקלט ה
//של הפריט שנבחר ונשלח לפונקיה השולפת מהגיסון בהתאם לקטגוריה הנוכחית
const katArr = document.querySelectorAll('nav>div');
let category = '';
const containerKategory=document.querySelector('#kat');
const search =document.querySelector('#search');
const reset=document.querySelector('.searchSomthing2');
katArr.forEach((kat) => {
    kat.onclick = () => {
        category = kat.id;
        shlof(category);
    }

})
// const bage=document.querySelector('#bage');
//שליפה מהגיסון
let Data;
$.ajax({
    url: 'data.json',
    success: (data) => {
        Data = data;
    }
});
//שליפת נתונים מהגיסון בהתאם לנתון שהתקבל
const shlof = (category) => {
    containerKategory.innerHTML='';
    Data[category].forEach((kind) => {
    createDiv(kind);
    });
}
//יצירת דיב וראייתו על המסך
const createDiv=(kind)=>{
    const div=document.createElement('div');
    div.onclick=()=>{
        sessionStorage.setItem('productBig',JSON.stringify(kind));
        location.pathname=location.pathname.replace(location.pathname.slice(location.pathname.lastIndexOf('/'),location.pathname.length),'/openBig.html');
    }
    div.innerHTML=`<img src="${kind.image}"/><br><small>${kind.name}</small><br><strong>${kind.english}</strong><br><strong>${kind.price} ₪</strong>`
    containerKategory.append(div);
}

search.onkeypress=()=>{
setTimeout(()=>{
containerKategory.innerHTML='';
if(category==='')
{
Data.arr.forEach(noneKategory=>{
searchArr(Data[noneKategory]);
})
}
else
{
   searchArr(Data[category]);
}
if(containerKategory.innerHTML==='')
containerKategory.innerHTML='לא נמצאו תוצאות';
},10)
}
// let dd="jdsf";
const searchArr=(arr)=>{
    let text=search.value;
    arr.forEach(serchKind=>{
       dd=serchKind.english.toLowerCase();
    let string=serchKind.name+" "+serchKind.price+" "+serchKind.makat+" "+serchKind.english+" "+dd;
    if(string.includes(text)){
    createDiv(serchKind);
        }

    })
}
reset.onclick=(event)=>{
    containerKategory.innerHTML='';
}
// bage.onclick=()=>{
//     location.href="shopBage.html";
// }

