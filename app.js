


const number = [9345334435,4343345682,9833423232,
               9345674545,8756454345];


    

function loadNum(){
   
    const phonenum = document.getElementById('phonenum-box');
    phonenum.innerHTML = "";  
    for(let i=0;i<number.length;i++){
     phonenum.innerHTML += `<div class="number-card">${i+1}) ${number[i]}</div></br>`;
    } 
}

function addNum(){
    const numinput = document.getElementById(input);
    number.push(numinput.value);git 
}