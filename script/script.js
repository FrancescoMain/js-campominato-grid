let listaElementi = [];
const playBtn = document.getElementById("play");
let numCaselle = 0;
let size = "";

// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.

// evento sul bottone

playBtn.addEventListener ("click" , function() {
  let container = document.getElementById("ms_cont");
  let select = document.getElementById("select").value;
  if (select == 1) {
     numCaselle = 100;
     size = "size1"
  } else if (select == 2) {
    numCaselle = 81;
    size = "size2"
  } else if (select == 3) {
      numCaselle = 49;
      size = "size3"
  }
  console.log(select);
  listaElementi = [];
  console.log(container);
  container.innerHTML = "";

  generaListaElementi(1, numCaselle,listaElementi,"div");

  aggiungiClassiAdArray(listaElementi, "box");

  aggiungiClassiAdArray(listaElementi, size);

  aggiungiElementiAdHtml(listaElementi, "ms_cont")

  for (let index = 0; index < listaElementi.length; index++) {
    let iteam = listaElementi[index];
    iteam.innerHTML = "";
    iteam.append (index + 1); 
    iteam.addEventListener("click", 
    function () {
    iteam.classList.toggle("clicked")
    console.log(index + 1);
    
  })

}
  
})


console.log(listaElementi);



// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
// evento sulla cella

