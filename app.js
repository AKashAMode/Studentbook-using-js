


const products = [
    "Laptop",
    "Smartphone",
    "Headphones",
    "Keyboard",
    "Mouse",
];


function getRandomEmg(){

    const productEmojis = [
        "💻","📱", "🎧",  "⌨️", "🖱️", "🖥️",  "📷", "⌚","📠",  
        "📺", "📀", "🔋",  "🔌",  "📡", "📹","🖨️",  "🎥"   
    ];

    const min = 0;
    const max = productEmojis.length-1;

    const randomIndex = Math.floor(Math.random() * (max-min + 1)) + min;
    
    return productEmojis[randomIndex];
}



function loadNum(){
    const phonenum = document.getElementById('phonenum-box');
    phonenum.innerHTML = "";  
    for(let i=0;i<products.length;i++){
     phonenum.innerHTML += `<div class="number-card"> ${getRandomEmg()}  ${i+1})  ${products[i]}</div></br>`;
    } 
}


const numinput = document.getElementById('input');

function addNum(){
    products.push(numinput.value);
    numinput.value = "";
    loadNum();
}


function removeNum(){
    const productIndex = products.indexOf(numinput.value);
    numinput.value = "";
    products.splice(productIndex, 1);
    loadNum();
}