//remove <main id="main"></main> within body

const element = document.getElementById('main');
element.remove();

const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.innerHTML = "Mae is the champion";
//document.body.append(element);

//const newHeader = document.createElement('newHeader');
//h1.append(newHeader);
//document.h1.append(newHeader);
//function addElement() {
//const newHeader = document.createElement('h1');
//}

//element.className ="newHeader";

//h1.innerHTML ="new Header";

//h1.textContent = "newHeader";
//console.log(h1.textContent);

//let h1 = document.createElement("h1")
////div.append("newHeader")

//console.log(h1.textContent)

