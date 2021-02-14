//create navigation
const letters = "abcdefghijklmnopqrstuvwxyz";

const letterArray = letters.split("");
//console.log(letterArray);

letterArray.forEach(handleLetter);

function handleLetter(letter) {
  createNavLinks(letter);

  //create section
  createBrandSection(letter);
}

function createBrandSection(letter) {
  //create section
  const template = document.querySelector("#sectionTemplate").content;
  const clone = template.cloneNode(true);
  clone.querySelector("h2").textContent = letter;
  clone.querySelector("section").id = `letter_${letter}`;
  document.querySelector(".brandList").appendChild(clone);
}

function createNavLinks(letter) {
  //create nav links
  const temp = document.querySelector("#linkTemplate").content;
  const copy = temp.cloneNode(true);
  copy.querySelector("a").textContent = letter;
  copy.querySelector("a").href = `#letter_${letter}`;
  document.querySelector(".letterLinks ol").appendChild(copy);
}

//fetch data
fetch("https://kea-alt-del.dk/t7/api/brands")
  .then((res) => res.json())
  .then(gotData);

//loop through it
function gotData(data) {
  data.forEach(showBrand);
}

//grab the template clone grab append
function showBrand(brand) {
  //console.log(brand.brandname);
  const template = document.querySelector("#linkTemplate").content;
  const copy = template.cloneNode(true);
  copy.querySelector("a").textContent = brand.brandname;
  copy.querySelector(
    "a"
  ).href = `productlist.html?brandname=${brand.brandname}`;
  const firstLetter = brand.brandname[0].toLowerCase();
  const topParent = document.querySelector(`#letter_${firstLetter}`);
  const elemParent = topParent.querySelector("ol");
  elemParent.appendChild(copy);
}
