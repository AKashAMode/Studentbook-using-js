
const students = [
    "Aarav","Vivaan","Aditya",
    "Ananya","Krishna","arya",
    "Sai","Rohit","Akashy"
];


function getRandomEmg(){

    const faceEmojis = [
        "😓","😀","😂","😍",
        "😎", "😢","😡", "🥳",
        "😱", "🤔","😴","🤗",
        "🙄","😏","🥺","😇",
        "🤩","😻","🙈","😸","😺"
    ];

    const min = 0;
    const max = faceEmojis.length-1;

    const randomIndex = Math.floor(Math.random() * (max-min + 1)) + min;
    
    return faceEmojis[randomIndex];
}

const messagebox = document.getElementById('message');

function loadNum(){
    const phonenum = document.getElementById('phonenum-box');
    phonenum.innerHTML = "";  
    for(let i=0;i<students.length;i++){
     phonenum.innerHTML += `<div class="number-card"> ${getRandomEmg()}  ${i+1})  ${students[i]}</div></br>`;
    } 
}


const numinput = document.getElementById('input');

function addNum(){

    if(numinput.value.length >= 1 && isNaN(numinput.value)){
        students.push(numinput.value);
        numinput.value = "";
        loadNum();
        messagebox.innerHTML = "";
    }else{
        messagebox.innerHTML = "Enter Valid Input !!!!";
    }

}

function removeNum(){
    const productIndex = students.indexOf(numinput.value);
     numinput.value = "";
     students.splice(productIndex, 1);
     loadNum();
}
