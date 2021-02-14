const urlParams = new URLSearchParams(window.location.search);
const brandname = urlParams.get("brandname");
document.querySelector("main>h2").textContent = brandname;
document.querySelector("#nameof").textContent = brandname;
//console.log(brandname);

// const urlParams = new URLSearchParams
const url = "http://kea-alt-del.dk/t7/api/products?brandname=" + brandname;

fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    handleProductList(data);
  });

function handleProductList(data) {
  //console.log(data);
  data.forEach(showProduct);
}

/* 
    <article class="listProduct">
            <img
              src="https://kea-alt-del.dk/t7/images/webp/640/1535.webp"
              alt="Unisex Logo Cap"
            />
            
            <p class="price">
              <span>Prev.</span>
              DKK 699,-
            </p>
    
            <a href="product.html">View More</a>
    </article> 
*/

function showProduct(product) {
  //console.log(product);

  //grab the template
  const template = document.querySelector("#listProductTemplate").content;
  //clone it
  const copy = template.cloneNode(true);
  //change content

  copy.querySelector(
    ".subtle"
  ).textContent = `${product.articletype} | ${product.brandname}`;
  copy.querySelector("h3").textContent = product.productdisplayname;
  copy.querySelector(
    "img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;

  copy.querySelector("a").href = `product.html?id=${product.id}`;

  //ASK ABOUT THIS ONE, HOW NOT TO DELETE SPAN TAG!
  copy.querySelector(".price").textContent = `DKK ${product.price},-`;

  //soldOut onSale
  if (product.soldout) {
    copy.querySelector("article").classList.add("soldOut");
  }
  if (product.discount) {
    copy.querySelector("article").classList.add("onSale");
    copy.querySelector("article .price").classList.add("scratch");
  }

  /*
  <div class="discounted">
              <p>Now DKK 585,-</p>
              <p>-55%</p>
            </div> 
  */

  copy.querySelector(".discounted p").textContent = `DKK ${
    product.price - (product.discount / 100) * product.price
  },-`;

  copy.querySelector(
    ".discounted :last-child"
  ).textContent = `-${product.discount}%`;

  //grab parent
  const parent = document.querySelector(".listGrid");
  //append
  parent.appendChild(copy);
}
