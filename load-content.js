fetch("data.json")
  .then(res => {
    return res.json();
  })
  .then(data => {
    console.log(data);
    render(data);
  });

function render(content) {
  console.log(content);

  // Setează titlul paginii
  document.title = content.title;
  
  // Actualizează h1 principal
  const heading1 = document.getElementsByTagName("h1")[0];
  if (heading1) heading1.innerText = content.title;

  // Adaugă paragraful cu informații
  const header = document.getElementsByTagName("header")[0];
  if (header) {
    const paragraph = document.createElement("p");
    paragraph.innerText = content.info;
    paragraph.setAttribute("id", "info");
    header.after(paragraph);
  }

  // Actualizează secțiunea hero
  const heroSection = document.getElementById("hero");
  if (heroSection) {
    const heroSectionH2 = heroSection.getElementsByTagName("h2")[0];
    if (heroSectionH2) heroSectionH2.innerText = content.sectionName;
  }

  // Adaugă imaginile din JSON
  const heroImages = document.getElementById("hero-images");
  if (heroImages) {
    // Adaugă imaginile din JSON
    for (let i = 0; i < content.imageLinks.length; i++) {
      const imageSrc = content.imageLinks[i];
      const image = document.createElement("img");
      image.setAttribute("src", imageSrc);
      image.setAttribute("alt", "Imagine teatru");
      image.style.border = "2px solid rgb(99, 10, 10)";
      image.style.borderRadius = "8px";
      image.style.margin = "10px";
      image.style.maxWidth = "200px";
      image.style.maxHeight = "200px";
      image.style.objectFit = "cover";
      heroImages.appendChild(image);
    }

    // Adaugă imaginile salvate în localStorage (fotografiile utilizatorilor)
    const fotografiiString = localStorage.getItem("teatru-fotografii");
    console.log("fotografiiDinLocalStorage: ", fotografiiString);
    const fotografii = JSON.parse(fotografiiString) || [];
    console.log("fotografii: ", fotografii);

    for (let i = 0; i < fotografii.length; i++) {
      const imageSrc = fotografii[i].linkImagine;
      const titlu = fotografii[i].titlu || "Fotografie teatru";

      const image = document.createElement("img");
      image.setAttribute("src", imageSrc);
      image.setAttribute("alt", titlu);
      image.style.border = "2px solid rgb(99, 10, 10)";
      image.style.borderRadius = "8px";
      image.style.margin = "10px";
      image.style.maxWidth = "200px";
      image.style.maxHeight = "200px";
      image.style.objectFit = "cover";
      heroImages.appendChild(image);
    }
  }
}