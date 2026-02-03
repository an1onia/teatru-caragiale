const button = document.getElementById('consoleBtn');
button.addEventListener('click', function(){
    console.log('buton apasat');
});

const content = {
  sectionName: "Fotografii",
  imageLinks: [
    "img/alexandria.png",
    "img/chirita.jpg",
    "img/conul-lui-leonida.jpg",
    "img/diana.png",
    "img/emil-gaju.png",
    "img/eugeniu.png",
    "img/hamlet.jpg",
    "img/irina-v.png",
    "img/irina.png",
    "img/jan.jpg",
    "img/margareta.png",
    "img/marta-madan.png",
    "img/mihai.png",
    "img/nicolai-nezluchenko.webp",
    "img/Ninela_Caranfil.png",
    "img/nunta-lui-figaro.jpg",
    "img/petru-h.jpg",
    "img/raisa-hait.webp",
    "img/revizorul.jpg",
    "img/rusanda.png",
    "img/tre-surori.jpg",
    "img/Victor.png",
    "img/vitalie.png"
  ], 
};

console.log(content);

// Set section name
const heroSection = document.getElementById("photos-section");
const heroSectionH2 = heroSection.getElementsByTagName("h1")[0];
heroSectionH2.innerText = content.sectionName;

// Add images
const heroImages = document.getElementById("hero-images");

for (let i = 0; i < content.imageLinks.length; i++) {
  const imageSrc = content.imageLinks[i];
  const image = document.createElement("img");
  image.setAttribute("src", imageSrc);
  heroImages.appendChild(image);
}
