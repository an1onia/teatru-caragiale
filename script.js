console.log("Salut de la Teatrul Caragiale");

const culoareAlb = "rgb(255, 255, 255)";
const culoareRosie = "rgb(99, 10, 10)";

document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM încărcat");
  
  const corp = document.getElementsByTagName("body")[0];
  const butonTema = document.getElementById("theme-button");
  const butonConsola = document.getElementById("consoleBtn");
  
  // Selectare elemente pentru texte
  const articolText = document.querySelector("article p");
  const articolTitlu = document.querySelector("article h2");
  const spectacoleTitluri = document.querySelectorAll(".spectacole-col h3");
  const spectacoleDescrieri = document.querySelectorAll(".spectacole-col p");
  const actoriNume = document.querySelectorAll(".actor-card h3");
  const nePutetiGasi = document.querySelector(".despre_noi h2");
  
  console.log("butonTema exista?", butonTema);
  console.log("butonConsola exista?", butonConsola);

  // Funcție pentru setarea culorii textelor
  function seteazaCuloareTexte(esteTemaInchisa) {
    const culoareText = esteTemaInchisa ? "#FFF" : "#000";
    
    // Articol
    if (articolText) articolText.style.color = culoareText;
    if (articolTitlu) articolTitlu.style.color = culoareText;
    
    // Spectacole
    spectacoleTitluri.forEach(titlu => {
      titlu.style.color = culoareText;
    });
    spectacoleDescrieri.forEach(descriere => {
      descriere.style.color = culoareText;
    });
    
    // Actori
    actoriNume.forEach(nume => {
      nume.style.color = culoareText;
    });
    
    // "Ne puteti gasi"
    if (nePutetiGasi) nePutetiGasi.style.color = culoareText;
  }

  // Butonul pentru consolă
  if (butonConsola) {
    butonConsola.addEventListener("click", function() {
      console.log("Buton consola APĂSAT", Math.random());
      alert("Buton apăsat! Vezi consola (F12)");
    });
  }

  // Butonul pentru temă
  if (butonTema) {
    // Setează tema inițială
    const tema = localStorage.getItem("theme");
    if (tema === 'dark') {
      corp.style.background = culoareRosie;
      corp.style.color = "#FFF";
      butonTema.innerText = "☀️";
      seteazaCuloareTexte(true);
    } else {
      seteazaCuloareTexte(false);
    }
    
    butonTema.addEventListener("click", function() {
      if (corp.style.background === culoareAlb || corp.style.background === "") {
        corp.style.background = culoareRosie;
        corp.style.color = "#FFF";
        butonTema.innerText = "☀️";
        localStorage.setItem("theme", "dark");
        seteazaCuloareTexte(true);
      } else {
        corp.style.background = culoareAlb;
        corp.style.color = "#000";
        butonTema.innerText = "🌑";
        localStorage.setItem("theme", "light");
        seteazaCuloareTexte(false);
      }
    });
  } else {
    // Creează butonul automat dacă nu există
    const butonNou = document.createElement("button");
    butonNou.id = "theme-button";
    butonNou.innerText = "🌑";
    butonNou.style.position = "fixed";
    butonNou.style.top = "20px";
    butonNou.style.right = "20px";
    butonNou.style.padding = "10px 20px";
    butonNou.style.fontSize = "20px";
    butonNou.style.backgroundColor = culoareRosie;
    butonNou.style.border = "2px solid white";
    butonNou.style.borderRadius = "30px";
    butonNou.style.cursor = "pointer";
    butonNou.style.color = "white";
    butonNou.style.zIndex = "1000";
    document.body.prepend(butonNou);
    
    // Setează tema inițială
    const tema = localStorage.getItem("theme");
    if (tema === 'dark') {
      corp.style.background = culoareRosie;
      corp.style.color = "#FFF";
      butonNou.innerText = "☀️";
      seteazaCuloareTexte(true);
    } else {
      seteazaCuloareTexte(false);
    }
    
    butonNou.addEventListener("click", function() {
      if (corp.style.background === culoareAlb || corp.style.background === "") {
        corp.style.background = culoareRosie;
        corp.style.color = "#FFF";
        butonNou.innerText = "☀️";
        localStorage.setItem("theme", "dark");
        seteazaCuloareTexte(true);
      } else {
        corp.style.background = culoareAlb;
        corp.style.color = "#000";
        butonNou.innerText = "🌑";
        localStorage.setItem("theme", "light");
        seteazaCuloareTexte(false);
      }
    });
  }
});