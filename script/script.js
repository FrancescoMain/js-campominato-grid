const listaElementi = [];
const playBtn = document.getElementById("play");
let cont = document.getElementById("ms_cont");


// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.

// evento sul bottone

playBtn.addEventListener ("click" , function() {
  


  generaListaElementi(1, 100,listaElementi,"div");

  aggiungiClassiAdArray(listaElementi, "box");

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

