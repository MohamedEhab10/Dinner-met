var cards = [
  {
    image: "../images/Beef Tacos.avif",
    rate: "4.6",
    reviews: "(278 reviews)",
    prep: "15 min",
    cook: "20 min",
    serv: "4 people",
    briefR: "Easy",
    briefL: "American",
    title: "Beef Tacos",
    desc: "Flavorful Mexican tacos with seasoned ground beef",
    ingredNumb: {
      one: "500g ground beef",
      two: "8 taco shells",
      three: "1 onion, diced",
      four: "2 tablespoons taco seasoning",
      five: "Shredded lettuce",
      six: "Diced tomatoes",
      seven: "Shredded cheddar cheese",
      eight: "Sour cream",
      nine: "Salsa",
    },
    instrucNumb: {
      one: "Heat a large skillet and brown the beef.",
      two: "Add onion and cook until softened.",
      three: "Stir in taco seasoning and water, simmer 10 min.",
      four: "Warm taco shells.",
      five: "Fill shells with beef.",
      six: "Top with vegetables and sauces.",
    },
    nutrition: {
      cal: "420 kcal",
      protein: "26g",
      carb: "32g",
      fat: "20g",
      fiber: "4g",
      sod: "780mg",
    },
    chef: {
      one: "Drain excess fat from beef",
      two: "Warm shells in oven",
      three: "Prepare toppings first",
      four: "Use turkey for lighter tacos",
    },
  },

  {
    image: "../images/bowl.avif",
    rate: "4.7",
    reviews: "(367 reviews)",
    prep: "15 min",
    cook: "20 min",
    serv: "2 people",
    briefR: "Easy",
    briefL: "Asian",
    title: "Teriyaki Chicken Bowl",
    desc: "Sweet and savory chicken over rice with vegetables",
    ingredNumb: {
      one: "400g chicken thighs",
      two: "1/2 cup teriyaki sauce",
      three: "2 cups cooked rice",
      four: "1 broccoli head",
      five: "1 carrot, julienned",
      six: "Sesame seeds",
      seven: "Green onions",
      eight: "1 tbsp sesame oil",
    },
    instrucNumb: {
      one: "Cook chicken in sesame oil.",
      two: "Add teriyaki sauce and simmer.",
      three: "Steam broccoli and carrots.",
      four: "Add rice to bowls.",
      five: "Add chicken and vegetables.",
      six: "Top with sesame and onions.",
    },
    nutrition: {
      cal: "540 kcal",
      protein: "42g",
      carb: "58g",
      fat: "14g",
      fiber: "4g",
      sod: "1240mg",
    },
    chef: {
      one: "Use thighs for juiciness",
      two: "Add edamame for protein",
      three: "Make homemade teriyaki",
      four: "Great for meal prep",
    },
  },

  {
    image: "../images/shremp.avif",
    rate: "4.8",
    reviews: "(356 reviews)",
    prep: "10 min",
    cook: "15 min",
    serv: "2 people",
    briefR: "Easy",
    briefL: "Seafood",
    title: "Shrimp Scampi",
    desc: "Garlicky shrimp in a white wine butter sauce",
    ingredNumb: {
      one: "400g shrimp",
      two: "300g linguine",
      three: "6 garlic cloves",
      four: "1/2 cup white wine",
      five: "4 tbsp butter",
      six: "Olive oil",
      seven: "Parsley",
      eight: "Lemon",
      nine: "Red pepper flakes",
    },
    instrucNumb: {
      one: "Cook the pasta.",
      two: "Cook garlic in butter + oil.",
      three: "Add shrimp and cook until pink.",
      four: "Add wine & reduce.",
      five: "Add shrimp back with pasta.",
      six: "Top with parsley and lemon.",
    },
    nutrition: {
      cal: "520 kcal",
      protein: "36g",
      carb: "54g",
      fat: "18g",
      fiber: "3g",
      sod: "620mg",
    },
    chef: {
      one: "Don’t overcook shrimp",
      two: "Use good wine",
      three: "Add lemon for freshness",
      four: "Add pasta water for creamier sauce",
    },
  },

  {
    image: "../images/caesar.avif",
    rate: "4.4",
    reviews: "(198 reviews)",
    prep: "15 min",
    cook: "0 min",
    serv: "2 people",
    briefR: "Easy",
    briefL: "Mediterranean",
    title: "Caesar Salad",
    desc: "Classic salad with crispy romaine and creamy dressing",
    ingredNumb: {
      one: "1 romaine lettuce",
      two: "Caesar dressing",
      three: "Parmesan cheese",
      four: "Croutons",
      five: "Anchovies (optional)",
      six: "Lemon",
      seven: "Black pepper",
    },
    instrucNumb: {
      one: "Wash & chop lettuce.",
      two: "Add dressing.",
      three: "Add croutons and cheese.",
      four: "Top with anchovies.",
      five: "Add lemon and pepper.",
    },
    nutrition: {
      cal: "320 kcal",
      protein: "12g",
      carb: "18g",
      fat: "22g",
      fiber: "3g",
      sod: "680mg",
    },
    chef: {
      one: "Use cold lettuce",
      two: "Add grilled chicken",
      three: "Make homemade croutons",
      four: "Dress right before serving",
    },
  },

  {
    image: "../images/chicken.avif",
    rate: "4.5",
    reviews: "(324 reviews)",
    prep: "15 min",
    cook: "15 min",
    serv: "4 people",
    briefR: "Easy",
    briefL: "Asian",
    title: "Chicken Stir-Fry",
    desc: "Quick and healthy stir-fry with vegetables",
    ingredNumb: {
      one: "500g chicken breast",
      two: "Bell peppers",
      three: "Broccoli",
      four: "Carrots",
      five: "Soy sauce",
      six: "Oyster sauce",
      seven: "Sesame oil",
      eight: "Garlic",
      nine: "Ginger",
    },
    instrucNumb: {
      one: "Mix sauces.",
      two: "Cook chicken.",
      three: "Cook garlic + ginger.",
      four: "Add vegetables.",
      five: "Add chicken & sauce.",
      six: "Serve with rice.",
    },
    nutrition: {
      cal: "320 kcal",
      protein: "34g",
      carb: "18g",
      fat: "12g",
      fiber: "5g",
      sod: "840mg",
    },
    chef: {
      one: "Cut ingredients before cooking",
      two: "Don't overcrowd the pan",
      three: "Add nuts for crunch",
      four: "Use high heat",
    },
  },
];
function showCards(card) {
  document.getElementById("card").innerHTML = `
  <div
        class="menu-section row row-cols-sm-1 row-cols-lg-2 justify-content-between m-auto mb-5"
      >
      <div class="menu-image row row-cols-lg-1 position-relative">
          <img 
            src="${card.image}"
            alt="Beef Tacos
"
          />
          <div class="product-rate position-absolute row row-cols-6">
            <i class="fa-solid fa-star  text-warning"></i>
            <h6 class="">${card.rate}</h6>
            <h6 class="text-gray">${card.reviews}</h6>
          </div>
          <div
            class="image-footer row row-cols-3 justify-content-center mx-3 bg-white position-absolute"
          >
            <div class="content row row-cols-1">
              <i class="fa-solid fa-clock main-color fs-5"></i>
              <p class="text-gray m-0">Prep Time</p>
              <h5 class="fw-bold">${card.prep}</h5>
            </div>
            <div class="content row row-cols-1">
              <i class="fa-solid fa-fire-burner fs-4 text-danger"></i>
              <p class="text-gray m-0">Cook Time</p>
              <h5 class="fw-bold">${card.cook}</h5>
            </div>
            <div class="content row row-cols-1">
              <i class="fa-solid fa-users text-primary fs-5"></i>
              <p class="text-gray m-0">Servings</p>
              <h5 class="fw-bold">${card.serv}</h5>
            </div>
          </div>
        </div>
        <div class="menu-text row row-cols-lg-1 py-4">
          <div class="products-brief row row-cols-5">
            <p class="bg-green fw-bold">${card.briefR}</p>
            <p class="bg-blue fw-bold">${card.briefL}</p>
          </div>
          <div class="menu-title row row-cols-3 justify-content-between">
            <h1 class="fw-bold fs-2">${card.title}</h1>
            <div class="title-icons mb-2">
              <i class="fa-solid fa-bookmark"></i>
              <i class="fa-solid fa-share-nodes"></i>
            </div>
          </div>
          <div class="menu-desc">
            <p class="dark-gray">
            ${card.desc}
            </p>
          </div>
          <div class="tabs">
            <ul class="nav nav-tabs row-cols-4" id="myTab" role="tablist">
              <li class="nav-item mb-3" role="presentation">
                <button
                  class="nav-link active"
                  id="ingred-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#ingred-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="ingred-tab-pane"
                  aria-selected="true"
                >
                  <i class="fa-solid fa-list-check mt-1 me-1"></i>
                  Ingredients
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="instruc-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#instruc-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="instruc-tab-pane"
                  aria-selected="false"
                >
                  <i class="fa-solid fa-book-open mt-1 me-1"></i>
                  Instructions
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="nutr-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nutr-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="nutr-tab-pane"
                  aria-selected="false"
                >
                  <i class="fa-solid fa-chart-pie mt-1 me-1"></i>
                  Nutrition
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="chef-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#chef-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="chef-tab-pane"
                  aria-selected="false"
                >
                  <i class="fa-solid fa-lightbulb mt-1 me-1"></i>
                  Chef's Tips
                </button>
              </li>
            </ul>
            <div class="tab-content" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="ingred-tab-pane"
                role="tabpanel"
                aria-labelledby="ingred-tab"
                tabindex="0"
              >
                <div class="ingred-nums px-2 my-3">
                  <p><span>1</span>${card.ingredNumb.one}</p>
                  <p><span>2</span>${card.ingredNumb.two}</p>
                  <p><span>3</span>${card.ingredNumb.three}</p>
                  <p><span>4</span>${card.ingredNumb.four}</p>
                  <p><span>5</span>${card.ingredNumb.five}</p>
                  <p><span>6</span>${card.ingredNumb.six}</p>
                  <p><span>7</span>${card.ingredNumb.seven}</p>
                  <p><span>8</span>${card.ingredNumb.eight}</p>
                  <p><span>9</span>${card.ingredNumb.nine}</p>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="instruc-tab-pane"
                role="tabpanel"
                aria-labelledby="instruc-tab"
                tabindex="0"
              >
                <div class="ingred-nums instruc-nums px-2 my-3">
                  <p>
                    <span>1</span>${card.instrucNumb.one}
                  </p>
                  <p>
                    <span>2</span>${card.instrucNumb.two}
                  </p>
                  <p>
                    <span>3</span>${card.instrucNumb.three}
                  </p>
                  <p>
                    <span>4</span>${card.instrucNumb.four}
                  </p>
                  <p><span>5</span>${card.instrucNumb.five}</p>
                  <p>
                    <span>6</span>${card.instrucNumb.six}
                  </p>
                </div>
              </div>
              <div
                class="tab-pane fade pb-5"
                id="nutr-tab-pane"
                role="tabpanel"
                aria-labelledby="nutr-tab"
                tabindex="0"
              >
                <div class="nutr-tab row row-cols-2">
                  <div class="nutr row row-cols-2">
                    <div class="cal-left row row-cols-3">
                      <i class="fa-solid fa-fire orange-co"></i>
                      <h6>Calories</h6>
                    </div>
                    <h4>${card.nutrition.cal}</h4>
                  </div>
                  <div class="nutr row row-cols-2">
                    <div class="cal-left row row-cols-3">
                      <i class="fa-solid fa-dumbbell blue-co"></i>
                      <h6>Protein</h6>
                    </div>
                    <h4>${card.nutrition.protein}</h4>
                  </div>
                  <div class="nutr row row-cols-2">
                    <div class="cal-left row row-cols-3">
                      <i class="fa-solid fa-wheat-awn yellow-co"></i>
                      <h6>Carbohydrates</h6>
                    </div>
                    <h4>${card.nutrition.carb}</h4>
                  </div>
                  <div class="nutr row row-cols-2">
                    <div class="cal-left row row-cols-3">
                      <i class="fa-solid fa-droplet red-co"></i>
                      <h6>Fat</h6>
                    </div>
                    <h4>${card.nutrition.fat}</h4>
                  </div>
                  <div class="nutr row row-cols-2">
                    <div class="cal-left row row-cols-3">
                      <i class="fa-solid fa-seedling green-co"></i>
                      <h6>Fiber</h6>
                    </div>
                    <h4>${card.nutrition.fiber}</h4>
                  </div>
                  <div class="nutr row row-cols-2">
                    <div class="cal-left row row-cols-3">
                      <i class="fa-solid fa-cube purple-co"></i>
                      <h6>Sodium</h6>
                    </div>
                    <h4>${card.nutrition.sod}</h4>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="chef-tab-pane"
                role="tabpanel"
                aria-labelledby="chef-tab"
                tabindex="0"
              >
                <div class="chef-tab mt-3">
                  <p>
                    <span><i class="fa-solid fa-check"></i></span>${card.chef.one}
                  </p>
                  <p>
                    <span><i class="fa-solid fa-check"></i></span>${card.chef.two}
                  </p>
                  <p>
                    <span><i class="fa-solid fa-check"></i></span>${card.chef.three}
                  </p>
                  <p>
                    <span><i class="fa-solid fa-check"></i></span>${card.chef.four}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button
            onclick="randomCard()"
            class="btn button-foot text-white fw-bold mt-3 "
          >
            <i class="fa-solid fa-rotate text-white"></i> Try Another Recipe
          </button>
          </div>
          </div>
  `;
}
function randomCard() {
  var randomIndex = Math.floor(Math.random() * cards.length);
  showCards(cards[randomIndex]);
}
showCards(cards[0]);
