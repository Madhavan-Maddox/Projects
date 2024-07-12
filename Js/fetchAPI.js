let URL = 'https://api.apis.guru/v2/providers.json';
let btn = document.querySelector(".btn");
let para = document.querySelector(".para");

let format = async ()=>{
    let res = await fetch(URL);
    console.log(res);
    let data = await res.json();
    console.log(data);
    para.textContent = res.status;
}

btn.addEventListener('click', format);



