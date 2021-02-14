const urlParams = new URLSearchParams(window.location.search);
//in the URL grab ID and store it's value in id
const id = urlParams.get("id");

const url = "https://www.kea-alt-del.dk/t7/api/products/" + id;

//fetch the data
fetch(url)
  .then((res) => res.json())
  .then((data) => showProduct(data));
//populate the page

function showProduct(product) {
  console.log(product);
  document.querySelector(".breadcrumbs .brand").textContent = product.brandname;
  document.querySelector(".breadcrumbs .productname").textContent =
    product.productdisplayname;
  document.querySelector(
    "img.productimage"
  ).src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
  document.querySelector("img.productimage").alt = product.productdisplayname;

  document.querySelector("h3").textContent = product.productdisplayname;
  document.querySelector(
    ".smallinfo"
  ).textContent = `${product.articletype} | ${product.brandname}`;

  document.querySelector(".infoname").textContent = product.productdisplayname;
  document.querySelector(".infoprice").textContent = `DKK ${product.price},-`;
  document.querySelector(".infocolor").textContent = product.basecolour;
  document.querySelector(".infonumber").textContent = product.id;

  document.querySelector(".infobrandname").textContent = product.brandname;
  document.querySelector(".infobrand").textContent = product.brandbio;
}

//product list
