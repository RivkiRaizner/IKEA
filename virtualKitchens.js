const allKitchens=document.querySelector('#allKitchens');
let Data2;
$.ajax({
    url: 'virtualKitchens.json',
    success: (data) => {
        Data2 = data;
        debugger;
        createdata();
    }

});
const createdata = () => {
Data2["kitchens"].forEach((element)=>{
  const kitchenDiv=document.createElement('div');
  kitchenDiv.innerHTML=`<img src="${element.images}"><h3>${element.descreption}</h3>`
  allKitchens.append(kitchenDiv);
});
}
