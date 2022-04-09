let Qite=['Avropa ','Asiya','Amerika','Afrika','Avstraliya','Antraktida'];

let country=[
    ['Azerbaycan','Almaniya',"Fransa",'Ingiltere' ],
    ['Yaponiya','Cin',"Koreya",'Hindistan'],
    ['ABS.jpg','Kanada',"Meksika",'Brazilya'],
    ['Kongo','Niger',"CAR",'Sudan'],
    ['Avstraliya','Yeni Zellandiya',"Yeni Qivineya",'Yeni Papua'],
    ['Antraktida']
]
let sekil=[
    ['Azerbaycan.png','Almaniya.png',"Fransa.png",'Ingiltere.png' ],
    ['Yaponiya.png','Cin.png',"Koreya.png",'Hindistan.png'],
    ['ABS.png','Canada.png',"Meksika.png",'Braziliya.png'],
    ['Kongo.png','Niger.png',"CAR.png",'Sudan.png'],
    ['Avstraliya.png','Yeni Zellandiya.png',"Yeni Qvineya.png",'Yeni Papua.png'],
    ['Antraktida.png']
]
let SelectQite=document.getElementById('gite')
let SelectOlke=document.getElementById('olke')

onload=function(){
    let opt=`<option value="" selected disabled>  Qite Sec </option>`;
for( let i=0;i<Qite.length; i++){
opt+=`<option value="${i}">  ${Qite[i]} </option>`;
}
SelectQite.innerHTML=opt;
}



function olkem(){
    let opt=`<option value="" selected disabled>  Olke Sec </option>`;
    let value=SelectQite.value;
    for(let i=0; i<country[value].length; i++){
opt+=`<option value="${i}">  ${country[value] [i]} </option>`;
    }
    SelectOlke.innerHTML=opt;
}





let sekill=document.getElementById('img')

SelectOlke.onchange=function(){
let qiteSekil=SelectQite.value;
let olkesekil=SelectOlke.value;

sekill.innerHTML=`<img width="300px" src="${sekil[qiteSekil][olkesekil]}">`
}







