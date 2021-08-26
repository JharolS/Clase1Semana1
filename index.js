console.log("Hola mundo");

console.log(2+6);

let date=new Date();

console.log("Hoy es " + date);
console.log(`Todays day is ${date}`);

document.body.style.backgroundColor =`#212121`;
document.body.style.color ="#ffffffff";
let p= document.createElement("p");
let t= document.createTextNode("Welcome");
p.appendChild(t);

let h1= document.createElement("h1");
let heading= document.createTextNode(`Today's date is ${date}`);
h1.appendChild(heading);
document.body.appendChild(h1);



document.body.appendChild(p);