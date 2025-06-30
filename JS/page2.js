const minRange = document.getElementById("minRange");
const maxRange = document.getElementById("maxRange");
const minInput = document.getElementById("minInput");
const maxInput = document.getElementById("maxInput");
const applyBtn = document.getElementById("applyBtn");

function updateTrackBackground() {
  const min = +minRange.value;
  const max = +maxRange.value;
  const range = 999999;
  const minPercent = (min / range) * 100;
  const maxPercent = (max / range) * 100;
  document
    .querySelector(".slider-track")
    .style.setProperty("--min", `${minPercent}%`);
  document
    .querySelector(".slider-track")
    .style.setProperty("--max", `${maxPercent}%`);
}

minRange.addEventListener("input", () => {
  let min = parseInt(minRange.value);
  let max = parseInt(maxRange.value);
  if (min > max) {
    min = max;
    minRange.value = max;
  }
  minInput.value = min;
  updateTrackBackground();
});

maxRange.addEventListener("input", () => {
  let min = parseInt(minRange.value);
  let max = parseInt(maxRange.value);
  if (max < min) {
    max = min;
    maxRange.value = min;
  }
  maxInput.value = max;
  updateTrackBackground();
});

minInput.addEventListener("change", () => {
  let val = parseInt(minInput.value);
  if (val < 0) val = 0;
  if (val > parseInt(maxInput.value)) val = parseInt(maxInput.value);
  minRange.value = val;
  minInput.value = val;
  updateTrackBackground();
});

maxInput.addEventListener("change", () => {
  let val = parseInt(maxInput.value);
  if (val > 999999) val = 999999;
  if (val < parseInt(minInput.value)) val = parseInt(minInput.value);
  maxRange.value = val;
  maxInput.value = val;
  updateTrackBackground();
});

applyBtn.addEventListener("click", () => {
  alert(`Applied: Min = ${minInput.value}, Max = ${maxInput.value}`);
});

async function Displaypage2productflex() {
  let response = await fetch("../assets/images/page2_product/p2_products.json");
  let data = await response.json();
  console.log(data);

  let p2_product_items = document.querySelector(".content");
  p2_product_items.classList.add("flex");
  p2_product_items.classList.remove("grid");

  p2_product_items.innerHTML = "";
  data.forEach((element) => {
    p2_product_items.innerHTML =
      p2_product_items.innerHTML +
      `<a href="page4.html"><div class="product">
          <img src="${element.image}" alt="" />
          <div class="sec">  
            <div class="product-title">
              <h3>${element.name}</h3>
              <div class="heart_fav">
                <img src="../assets/images/page2_product/heart.png" alt="" />
              </div>
              </div>
              <h2>${element.discount_price} <s>${element.original_price}</s></h2>
            
            <div class="price">
              <img src="../assets/images/ratings/five.png" alt="five" />
              <p class="reviews">${element.reviews}</p>
              <span></span>
              <p>${element.order} orders</p>
              <span></span>
              <p>Free Shipping</p>
            </div>
            <div class="detail">
              <p>
                ${element.details}
              </p>
              <p>View details</p>
            </div>
          </div>
            
        </div></a>`;
  });
}
async function Displaypage2productgrid() {
  let response = await fetch("../assets/images/page2_product/p2_products.json");
  let data = await response.json();
  console.log(data);

  let p2_product_items = document.querySelector(".content");
  p2_product_items.classList.add("grid");
  p2_product_items.classList.remove("flex");

  p2_product_items.innerHTML = "";
  data.forEach((element) => {
    p2_product_items.innerHTML =
      p2_product_items.innerHTML +
      `<a href="page4.html"><div class="product" style="flex-direction: column; padding:40px 10px 30px 25px; height: 333px;">
          <img src="${element.image}" alt="" />
          <div class="sec" style="border-top: 1px solid #EFF2F4; justify-content: start; width:280px; padding:15px 0px 0px 0px;">  
            
              <div style="display: flex; justify-content: space-between; align-items: center; width:270px; ">
                <h2 style="font-size: 16px;">${element.discount_price} <s>${element.original_price}</s></h2>
              <div class="heart_fav">
                <img src="../assets/images/page2_product/heart.png" alt="" />
              </div>
              </div>
              
            <div class="price">
              <img src="../assets/images/ratings/five.png" alt="five" />
              <p class="reviews">${element.reviews}</p>
            </div>
            <div class="product-title" style="font-weight: 400; color: #606060; width: 200px">
              <h3>${element.name}</h3>
            </div>
          </div>
            
        </div></a>`;
  });
}

function DisplayFilters() {
  const checkboxes = document.querySelectorAll(".custom-checkbox");
  const filter = document.getElementById("filter"); // Make sure this exists in your HTML
  let moveup = document.querySelector(".content");

  filter.innerHTML = "";
  if (filter.innerHTML == "") {
    moveup.style.marginTop = "-36px";
  }

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        const brandName = checkbox.name;
        const filterItem = document.createElement("div");
        filterItem.className = "filter-item";
        filterItem.innerHTML = `
          <p>${brandName}</p>
          <i class="fa-solid fa-xmark cross" data-brand="${brandName}"></i>
        `;
        filter.appendChild(filterItem);

        // Handle remove click
        filterItem.querySelector(".cross").addEventListener("click", () => {
          filterItem.remove();
          checkbox.checked = false;
          if (filter.innerHTML == "") {
            console.log("remove spavce");
            moveup.style.marginTop = "-36px";
          }
        });
        moveup.style.marginTop = "0px";
      } else {
        // Remove the filter if unchecked
        const crossToRemove = filter.querySelector(
          `.cross[data-brand="${checkbox.name}"]`
        );
        if (crossToRemove) {
          crossToRemove.parentElement.remove();
          if (filter.innerHTML == "") {
            console.log("remove spavce");
            moveup.style.marginTop = "-36px";
          }
        }
      }
    });
  });
}

function DisplayConditionsFilters() {
  const checkboxes = document.querySelectorAll(".custom-checkbox-condition");
  const filter = document.getElementById("filter"); // Make sure this exists in your HTML
  let moveup = document.querySelector(".content");

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        const brandName = checkbox.name;
        const filterItem = document.createElement("div");
        filterItem.className = "filter-item";
        filterItem.innerHTML = `
          <p>${brandName}</p>
          <i class="fa-solid fa-xmark cross" data-brand="${brandName}"></i>
        `;
        filter.appendChild(filterItem);

        // Handle remove click
        filterItem.querySelector(".cross").addEventListener("click", () => {
          filterItem.remove();
          checkbox.checked = false;

          if (filter.innerHTML === "") {
            moveup.style.marginTop = "-36px";
          }
        });

        moveup.style.marginTop = "0px";
      } else {
        const crossToRemove = filter.querySelector(
          `.cross[data-brand="${checkbox.name}"]`
        );
        if (crossToRemove) {
          crossToRemove.parentElement.remove();
          if (filter.innerHTML === "") {
            moveup.style.marginTop = "-36px";
          }
        }
      }
    });
  });
}


DisplayFilters();
DisplayConditionsFilters();

let filter = document.querySelector(".filter");

Displaypage2productflex();
updateTrackBackground(); // Call on page load

// let rating_arrow = document.querySelector('.rating-title')
// rating_arrow.addEventListener("click", ()=>{
//     let rating_filter = document.querySelector(".rating-filter")
//     rating_filter.innerHTML = "";
// })

let grid = document.querySelector(".gridbtn");
let flex = document.querySelector(".flexbtn");

grid.addEventListener("click", () => {
  grid.style.backgroundColor = "#eff2f4";
  flex.style.backgroundColor = "white";

  Displaypage2productgrid();
});

flex.addEventListener("click", () => {
  flex.style.backgroundColor = "#eff2f4";
  grid.style.backgroundColor = "white";
  Displaypage2productflex();
});

//category
let no_show_cat = document.getElementById("no-show-cat");
let show_cat = document.getElementById("show-cat");
let cat_wrapper = document.querySelector(".category-list-show");

let cat_sa1 = document.querySelector(".cat-sa1");
let cat_sa2 = document.querySelector(".cat-sa2");

show_cat.addEventListener("click", () => {
  cat_sa1.classList.replace("show", "no-show");
  cat_sa2.classList.replace("no-show", "show");
  cat_wrapper.classList.replace("show", "no-show");
});

no_show_cat.addEventListener("click", () => {
  cat_sa1.classList.replace("no-show", "show");
  cat_sa2.classList.replace("show", "no-show");
  cat_wrapper.classList.replace("no-show", "show");
});

//Brand
let no_show_brand = document.getElementById("no-show-brand");
let show_brand = document.getElementById("show-brand");
let brand_wrapper = document.querySelector(".brand-filter");

let brand_sa1 = document.querySelector(".brand-sa1");
let brand_sa2 = document.querySelector(".brand-sa2");

show_brand.addEventListener("click", () => {
  brand_sa1.classList.replace("show", "no-show");
  brand_sa2.classList.replace("no-show", "show");
  brand_wrapper.classList.replace("show", "no-show");
});

no_show_brand.addEventListener("click", () => {
  brand_sa1.classList.replace("no-show", "show");
  brand_sa2.classList.replace("show", "no-show");
  brand_wrapper.classList.replace("no-show", "show");
});

//Features
let no_show_feat = document.getElementById("no-show-feat");
let show_feat = document.getElementById("show-feat");
let feat_wrapper = document.querySelector(".feature-filter");

let feat_sa1 = document.querySelector(".feat-sa1");
let feat_sa2 = document.querySelector(".feat-sa2");

show_feat.addEventListener("click", () => {
  feat_sa1.classList.replace("show", "no-show");
  feat_sa2.classList.replace("no-show", "show");
  feat_wrapper.classList.replace("show", "no-show");
});

no_show_feat.addEventListener("click", () => {
  feat_sa1.classList.replace("no-show", "show");
  feat_sa2.classList.replace("show", "no-show");
  feat_wrapper.classList.replace("no-show", "show");
});

//Price
let no_show_price = document.getElementById("no-show-price");
let show_price = document.getElementById("show-price");
let price_wrapper = document.querySelector(".price-filter");

let price_sa1 = document.querySelector(".price-sa1");
let price_sa2 = document.querySelector(".price-sa2");

show_price.addEventListener("click", () => {
  price_sa1.classList.replace("show", "no-show");
  price_sa2.classList.replace("no-show", "show");
  price_wrapper.classList.replace("show", "no-show");
});

no_show_price.addEventListener("click", () => {
  price_sa1.classList.replace("no-show", "show");
  price_sa2.classList.replace("show", "no-show");
  price_wrapper.classList.replace("no-show", "show");
});

//Condition
let no_show_condition = document.getElementById("no-show-condition");
let show_condition = document.getElementById("show-condition");
let condition_wrapper = document.querySelector(".condition-filter");

let condition_sa1 = document.querySelector(".condition-sa1");
let condition_sa2 = document.querySelector(".condition-sa2");

show_condition.addEventListener("click", () => {
  condition_sa1.classList.replace("show", "no-show");
  condition_sa2.classList.replace("no-show", "show");
  condition_wrapper.classList.replace("show", "no-show");
});

no_show_condition.addEventListener("click", () => {
  condition_sa1.classList.replace("no-show", "show");
  condition_sa2.classList.replace("show", "no-show");
  condition_wrapper.classList.replace("no-show", "show");
});

//Rating
let no_show_rating = document.getElementById("no-show-rating");
let show_rating = document.getElementById("show-rating");
let rating_wrapper = document.querySelector(".rating-filter");

let rating_sa1 = document.querySelector(".rating-sa1");
let rating_sa2 = document.querySelector(".rating-sa2");

show_rating.addEventListener("click", () => {
  rating_sa1.classList.replace("show", "no-show");
  rating_sa2.classList.replace("no-show", "show");
  rating_wrapper.classList.replace("show", "no-show");
});

no_show_rating.addEventListener("click", () => {
  rating_sa1.classList.replace("no-show", "show");
  rating_sa2.classList.replace("show", "no-show");
  rating_wrapper.classList.replace("no-show", "show");
});

let no_show_page = document.getElementById("no-show-page");
let show_page = document.getElementById("show-page");
let page_dropdown = document.getElementById("page-dropdown");

let page_sa1 = document.querySelector(".page-sa1");
let page_sa2 = document.querySelector(".page-sa2");

show_page.addEventListener("click", () => {
  page_sa1.classList.replace("show", "no-show");
  page_sa2.classList.replace("no-show", "show");
  page_dropdown.classList.remove("show");
});

no_show_page.addEventListener("click", () => {
  page_sa1.classList.replace("no-show", "show");
  page_sa2.classList.replace("show", "no-show");
  page_dropdown.classList.add("show");
});



