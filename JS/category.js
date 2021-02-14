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
  const template = document.querySelector("template").content;
  const copy = template.cloneNode(true);
  copy.querySelector("a").textContent = brand.brandname;
  copy.querySelector(
    "a"
  ).href = `productlist.html?brandname=${brand.brandname}`;

  const topParent = document.querySelector("#letter_a");
  const elemParent = topParent.querySelector("ol");
  elemParent.appendChild(copy);
}
