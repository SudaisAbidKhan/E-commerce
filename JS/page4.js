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


// show_money list
let no_show_money = document.getElementById("no-show-money");
let show_money = document.getElementById("show-money");
let currency_wrapper = document.getElementById("dropdown");
let money_sa1 = document.querySelector(".money-sa1");
let money_sa2 = document.querySelector(".money-sa2");
let show_pay = document.querySelector(".show-pay");
let currency_items = document.querySelectorAll(".currency-list h3");

show_money.addEventListener("click", () => {
  money_sa1.classList.replace("show", "no-show");
  money_sa2.classList.replace("no-show", "show");
  currency_wrapper.classList.add("show");

  // Optional: hide other dropdowns if needed
  help_sa1?.classList.replace("no-show", "show");
  help_sa2?.classList.replace("show", "no-show");
  help_wrapper?.classList.remove("show");
  lang_sa1?.classList.replace("show", "no-show");
  lang_sa2?.classList.replace("no-show", "show");
  lang_wrapper?.classList.remove("show");
  flag_sa1?.classList.replace("no-show", "show");
  flag_sa2?.classList.replace("show", "no-show");
  ship_wrapper?.classList.remove("show");
});

no_show_money.addEventListener("click", () => {
  money_sa1.classList.replace("no-show", "show");
  money_sa2.classList.replace("show", "no-show");
  currency_wrapper.classList.remove("show");
});

// Add click functionality to currency list items
currency_items.forEach((item) => {
  item.addEventListener("click", () => {
    // Update the main heading
    show_pay.textContent = item.textContent;

    // Reset all items' styles
    currency_items.forEach((i) => (i.style.color = "inherit"));

    // Highlight selected item
    item.style.color = "blue";

    // Optionally close dropdown
    currency_wrapper.classList.remove("show");
    money_sa1.classList.replace("no-show", "show");
    money_sa2.classList.replace("show", "no-show");
  });
});

// show_help list
let no_show_help = document.getElementById("no-show-help");
let show_help = document.getElementById("show-help");
let help_wrapper = document.getElementById("help-dropdown");

let help_sa1 = document.querySelector(".help-sa1");
let help_sa2 = document.querySelector(".help-sa2");

show_help.addEventListener("click", () => {
  help_sa1.classList.replace("show", "no-show");
  help_sa2.classList.replace("no-show", "show");
  help_wrapper.classList.add("show");
  flag_sa1.classList.replace("no-show", "show");
  flag_sa2.classList.replace("show", "no-show");
  ship_wrapper.classList.remove("show");
  lang_sa1.classList.replace("show", "no-show");
  lang_sa2.classList.replace("no-show", "show");
  lang_wrapper.classList.remove("show");
  money_sa1.classList.replace("no-show", "show");
  money_sa2.classList.replace("show", "no-show");
  currency_wrapper.classList.remove("show");
});

no_show_help.addEventListener("click", () => {
  help_sa1.classList.replace("no-show", "show");
  help_sa2.classList.replace("show", "no-show");
  help_wrapper.classList.remove("show");
});

let no_show_flag = document.getElementById("no-show-flag");
let show_flag = document.getElementById("show-flag");
let ship_wrapper = document.getElementById("ship-dropdown");

let flag_sa1 = document.querySelector(".flag-sa1");
let flag_sa2 = document.querySelector(".flag-sa2");

// Targeting the display elements
let show_ship_text = document.querySelector(".show-ship");
let show_ship_img = document.querySelector(".show-ship + img");

// Target all divs in the list
let ship_items = document.querySelectorAll(".ship-list > div");

show_flag.addEventListener("click", () => {
  flag_sa1.classList.replace("show", "no-show");
  flag_sa2.classList.replace("no-show", "show");
  ship_wrapper.classList.add("show");

  // Optional: hide other dropdowns
  help_sa1?.classList.replace("no-show", "show");
  help_sa2?.classList.replace("show", "no-show");
  help_wrapper?.classList.remove("show");
  lang_sa1?.classList.replace("show", "no-show");
  lang_sa2?.classList.replace("no-show", "show");
  lang_wrapper?.classList.remove("show");
  money_sa1?.classList.replace("no-show", "show");
  money_sa2?.classList.replace("show", "no-show");
  currency_wrapper?.classList.remove("show");
});

no_show_flag.addEventListener("click", () => {
  flag_sa1.classList.replace("no-show", "show");
  flag_sa2.classList.replace("show", "no-show");
  ship_wrapper.classList.remove("show");
});

// Click event for each flag
ship_items.forEach((item) => {
  item.addEventListener("click", () => {
    let country = item.querySelector("p").textContent;
    let flag = item.querySelector("img").src;

    // Update displayed text and flag
    show_ship_text.textContent = `Ship to: ${country}`;
    show_ship_img.src = flag;

    // Reset all item styles
    ship_items.forEach((div) => (div.style.border = "none"));

    // Highlight selected
    item.style.border = "2px solid blue";

    // Close the dropdown
    flag_sa1.classList.replace("no-show", "show");
    flag_sa2.classList.replace("show", "no-show");
    ship_wrapper.classList.remove("show");
  });
});

//language
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
lang_items.forEach((item) => {
  item.addEventListener("click", () => {
    let img = item.querySelector("img").src;

    // Set selected image
    show_lang_img.src = img;

    // Reset borders
    lang_items.forEach((div) => (div.style.border = "none"));

    // Highlight selected
    item.style.border = "2px solid blue";

    // Close dropdown
    lang_sa1.classList.replace("show", "no-show");
    lang_sa2.classList.replace("no-show", "show");
    lang_wrapper.classList.remove("show");
  });
});

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
