async function DisplaysavedProduct() {
  let response = await fetch(
    "../assets/images/saved_products/saved_product.json"
  );
  let data = await response.json();
  console.log(data);

  let saved_products_items = document.querySelector(".saved-products-list");
  saved_products_items.innerHTML = "";
  data.forEach((element) => {
    saved_products_items.innerHTML =
      saved_products_items.innerHTML +
      `<div class="saved-products-item">
          <div class="saved-products-image">
            <img
              src="${element.image}"
              alt=""
            />
          </div>
          <div class="saved-products-title">
          <p>${element.price}</p>
            <h4>${element.name}</h4>
            <div class="move-cart">
              <img src="../assets/images/shopping-cart.png" style="width: 20px;" alt="">
              <p>Move to cart</p>
            </div>
          </div>
        </div>`;
  });
}

DisplaysavedProduct();

let no_show_lang = document.getElementById("no-show-lang");
let show_lang = document.getElementById("show-lang");
let lang_wrapper = document.getElementById("lang-dropdown");

let lang_sa1 = document.querySelector(".lang-sa1");
let lang_sa2 = document.querySelector(".lang-sa2");

let show_lang_img = document.querySelector(".show-lang"); // Current selected language image
let lang_items = document.querySelectorAll(".lang-list > div"); // List items

show_lang.addEventListener("click", () => {
  lang_sa1.classList.replace("no-show", "show");
  lang_sa2.classList.replace("show", "no-show");
  lang_wrapper.classList.add("show");

  // Optional: hide other dropdowns
  help_sa1?.classList.replace("no-show", "show");
  help_sa2?.classList.replace("show", "no-show");
  help_wrapper?.classList.remove("show");
  flag_sa1?.classList.replace("no-show", "show");
  flag_sa2?.classList.replace("show", "no-show");
  ship_wrapper?.classList.remove("show");
  money_sa1?.classList.replace("no-show", "show");
  money_sa2?.classList.replace("show", "no-show");
  currency_wrapper?.classList.remove("show");
});

no_show_lang.addEventListener("click", () => {
  lang_sa1.classList.replace("show", "no-show");
  lang_sa2.classList.replace("no-show", "show");
  lang_wrapper.classList.remove("show");
});

// Handle click on language options
lang_items.forEach(item => {
  item.addEventListener("click", () => {
    let img = item.querySelector("img").src;

    // Set selected image
    show_lang_img.src = img;

    // Reset borders
    lang_items.forEach(div => div.style.border = "none");

    // Highlight selected
    item.style.border = "2px solid blue";

    // Close dropdown
    lang_sa1.classList.replace("show", "no-show");
    lang_sa2.classList.replace("no-show", "show");
    lang_wrapper.classList.remove("show");
  });
});

// Mobile menu toggle functionality
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const searchForm = document.querySelector('.search-form');
const actions = document.querySelector('.actions');

if (mobileMenuToggle) {
  mobileMenuToggle.addEventListener('click', function() {
    console.log('Mobile menu toggle clicked');
    searchForm.classList.toggle('mobile-visible');
    actions.classList.toggle('mobile-visible');
  });
}


document.addEventListener("click", (e) => {
  // Check if the click is outside any dropdown
  if (!e.target.closest(".language") &&
      !e.target.closest(".pay") &&
      !e.target.closest(".ship") &&
      !e.target.closest(".help-sa1") &&
      !e.target.closest(".help-sa2")) {

    // Close all dropdowns
    lang_wrapper.classList.remove("show");
    lang_sa1.classList.replace("no-show", "show");
    lang_sa2.classList.replace("show", "no-show");

    help_wrapper.classList.remove("show");
    help_sa1.classList.replace("no-show", "show");
    help_sa2.classList.replace("show", "no-show");

    currency_wrapper.classList.remove("show");
    money_sa1.classList.replace("no-show", "show");
    money_sa2.classList.replace("show", "no-show");

    ship_wrapper.classList.remove("show");
    flag_sa1.classList.replace("no-show", "show");
    flag_sa2.classList.replace("show", "no-show");
  }
});



