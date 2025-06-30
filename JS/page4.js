async function DisplayMayLikeItem() {
  let response = await fetch("../assets/images/may_like/may_like.json");
  let data = await response.json();
  console.log(data);

  let may_like_items = document.querySelector(".may-like-list");
  may_like_items.innerHTML = "";
  data.forEach((element) => {
    may_like_items.innerHTML =
      may_like_items.innerHTML +
      `<div class="may-like-item">
            <div class="may-like-image">
              <img src="${element.image}" alt="suitcoat">
            </div>
            <div class="may-like-title">
              <h4>${element.name}</h4>
              <p>${element.price}</p>
            </div>
          </div>`;
  });
}
async function DisplayRelatedProduct() {
  let response = await fetch(
    "../assets/images/related_products/related_product.json"
  );
  let data = await response.json();
  console.log(data);

  let related_products_items = document.querySelector(".related-products-list");
  related_products_items.innerHTML = "";
  data.forEach((element) => {
    related_products_items.innerHTML =
      related_products_items.innerHTML +
      `<div class="related-products-item">
          <div class="related-products-image">
            <img
              src="${element.image}"
              alt=""
            />
          </div>
          <div class="related-products-title">
            <h4>${element.name}</h4>
            <p>${element.price}</p>
          </div>
        </div>`;
  });
}

DisplayRelatedProduct();
DisplayMayLikeItem();

let unsaved = document.getElementById("unsaved");
let saved = document.getElementById("saved");

let sa1 = document.querySelector(".sa1");
let sa2 = document.querySelector(".sa2");

unsaved.addEventListener("click", () => {
  sa1.classList.remove("show");
  sa1.classList.add("no-show");
  sa2.classList.add("show");
  sa2.classList.remove("no-show"); 
});
saved.addEventListener("click", () => {
  sa1.classList.remove("no-show");
  sa1.classList.add("show");
  sa2.classList.add("no-show");
  sa2.classList.remove("show"); 
});
