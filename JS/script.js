async function Displayhomeproduct() {
  let response = await fetch(
    "../assets/images/home_and_outdoor/home-data.json"
  );
  let data = await response.json();
  console.log(data);

  let home_items = document.querySelector(".home-outdoor-items");
  home_items.innerHTML = "";
  data.forEach((element) => {
    home_items.innerHTML =
      home_items.innerHTML +
      `<a href="page2_3.html"><div class="item item${element.number}">
          <h3>${element.name}</h3>
          <p>${element.price}</p>
          <img src="${element.image}" alt="${element.name}">
        </div></a>`;
  });
}
async function Displayelectronicsproduct() {
  let response = await fetch(
    "../assets/images/electronics/electronics-data.json"
  );
  let data = await response.json();
  console.log(data);

  let electronics_items = document.querySelector(".electronics-items");
  electronics_items.innerHTML = "";
  data.forEach((element) => {
    electronics_items.innerHTML =
      electronics_items.innerHTML +
      `<a href="page2_3.html"><div class="item item${element.number}">
          <h3>${element.name}</h3>
          <p>${element.price}</p>
          <img src="${element.image}" alt="${element.name}">
        </div></a>`;
  });
}
async function DisplayRecommendeditems() {
  let response = await fetch(
    "../assets/images/recommended_items/recommended_items-data.json"
  );
  let data = await response.json();
  console.log(data);

  let recommended_items = document.querySelector(".recommended-grid");
  recommended_items.innerHTML = "";
  data.forEach((element) => {
    recommended_items.innerHTML =
      recommended_items.innerHTML +
      `<a href="page2_3.html"><div class="r-item r-item${element.number}">
          <img src="${element.image}" alt="${element.name}" />
          <div class="r-text">
            <h3>${element.price}</h3>
            <p>${element.name}</p>
          </div>
        </div></a>`;
  });
}
async function DisplaySuppliers() {
  let response = await fetch("../assets/images/flags/flags-data.json");
  let data = await response.json();
  console.log(data);

  let suppliers = document.querySelector(".suppliers-grid");
  suppliers.innerHTML = "";
  data.forEach((element) => {
    suppliers.innerHTML =
      suppliers.innerHTML +
      `<div class="supplier-item supplier-item${element.number}">
          <img src="${element.image}" alt="${element.name}">
          <div class="supplier-text">
            <h3>${element.name}</h3>
            <p>${element.description}</p>
          </div>
        </div>`;
  });
}

Displayhomeproduct();
Displayelectronicsproduct();
DisplayRecommendeditems();
DisplaySuppliers();

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
currency_items.forEach(item => {
  item.addEventListener("click", () => {
    // Update the main heading
    show_pay.textContent = item.textContent;

    // Reset all items' styles
    currency_items.forEach(i => i.style.color = "inherit");

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
ship_items.forEach(item => {
  item.addEventListener("click", () => {
    let country = item.querySelector("p").textContent;
    let flag = item.querySelector("img").src;

    // Update displayed text and flag
    show_ship_text.textContent = `Ship to: ${country}`;
    show_ship_img.src = flag;

    // Reset all item styles
    ship_items.forEach(div => div.style.border = "none");

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
