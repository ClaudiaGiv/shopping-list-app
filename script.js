//DOM - document object model - reprezentarea vizuala a elem,entelor html in obiecte js
//1. identificam elementele html necesare din pagina
//elementele: input, buton, lista (ul, li)

//2. identificam flow-ul/procesul pentru functionalitatea de implementat
// dupa introducere textului in input, la apasarea butonului add => se adauga textul ca ultim element in lista
//1. introduc text input
//2. apas nuton add
//3. adaug elemt text in lista

//3. detalii de implementare

//declaram variabile pentru elementele din pagina html
let inputElem = document.getElementById("shopping-input")
let buttonElem = document.getElementById("shopping-button")
let listElem = document.getElementById("shopping-ul")

//identificam actiunea din pagina si atasam un event listener pe el (ascultam, dupa evenimente pe acel element, pe buton)

buttonElem.addEventListener("click", addElementTotList)

//declararea functie
function increment(x){ //corpul metodei incepe cu o acolada
  return x+5;
}

let a = increment(4); //apelarea functiei increment
let b = increment;

//identicam pasii pe care rvem sa ii implementam cand apare evebnimentul de click
//adaugarea elementului din input in lista
function addElementTotList() {
  //1 luam textul din input
  let inputValue = inputElem.value //asignarea unui valori //nitializare = asigarea prima data a unei valori la o variabile
  console.log(inputValue) //console - obiect, log - functie

  //2. adauagam un element nou in lista care contine valoarea din input

  //2.a creeam element li pentru a fi adaugat in lista ul
  let li = document.createElement("li"); // document - obiect

  //2.b setam vaoarea elementul;ui li cu valoarea din input
  li.innerText = inputValue; // li -obiect

  //2.c atasam element li la lista ul
  listElem.appendChild(li) //appendChild - functie
}