
let button = document.getElementById("button");
let display = document.getElementById("display");

function doFirst(){
    button.addEventListener("click", save, false);
    displaydata();
}

window.addEventListener("load", doFirst, false);

function save(){
    let key = document.getElementById("key").value;
let value = document.getElementById("value").value;
    sessionStorage.setItem(key, value);
    displaydata();
    key.value= "";
    value.value = "";
}

function displaydata(){
    display.innerHTML = "";
    for(let i = 0; i< sessionStorage.length; i++){
        let a = sessionStorage.key(i);
        let b = sessionStorage.getItem(a);
        display.innerHTML += a+" , "+b+"<br>";
    }
} 
 function clear(){
     sessionStorage.clear();
     location.reload();
 }