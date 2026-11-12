/* NuBest Nutrition introduction page
   Age finder: shows which NuBest growth products are labeled
   for a given age, based on the age ranges on nubest.com. */

(function () {
  "use strict";

  var BASE = "https://www.nubest.com/products/";

  // Label age ranges as listed on each product page.
  // milk: "any" | "yes" (milk drinkers) | "no" (non-milk drinkers)
  var PRODUCTS = [
    {
      name: "NuBest Tall Kids",
      detail: "Berry chewable multivitamin, ages 2–9",
      minAge: 2, maxAge: 9, milk: "any",
      url: BASE + "nubest-tall-kids-helps-children-grow-taller-aged-2-to-9-doctor-recommended-361505"
    },
    {
      name: "NuBest Tall Gummies",
      detail: "Sugar-free gummy, ages 2+ and teens",
      minAge: 2, maxAge: 18, milk: "any",
      url: BASE + "nubest-tall-gummies"
    },
    {
      name: "NuBest Tall Protein, Chocolate",
      detail: "Protein shake powder, ages 3+ and teens",
      minAge: 3, maxAge: 18, milk: "any",
      url: BASE + "nubesttall-protein-powder-super-growth-boost-for-ages-2-to-teens-chocolate-15-servs-696808"
    },
    {
      name: "NuBest Tall",
      detail: "Capsule for kids 5+ and teens who don’t drink milk daily",
      minAge: 5, maxAge: 18, milk: "no",
      url: BASE + "nubest-tall-60-capsules-growth-height-nanometer-calcium-242508"
    },
    {
      name: "NuBest Tall 10+",
      detail: "Capsule for kids 10+ and teens who drink milk",
      minAge: 10, maxAge: 18, milk: "yes",
      url: BASE + "nubesttall-for-children-and-teenagers-from-10-years-old-doctor-recommended-182008"
    }
  ];

  var ageInput = document.getElementById("age");
  var ageOut = document.getElementById("age-out");
  var bandEl = document.getElementById("finder-band");
  var listEl = document.getElementById("finder-list");
  var markEl = document.getElementById("ruler-mark");
  var milkInputs = document.querySelectorAll('input[name="milk"]');

  function bandLabel(age) {
    if (age <= 4) return "Ages 2–4";
    if (age <= 9) return "Ages 5–9";
    return "Ages 10+";
  }

  function selectedMilk() {
    for (var i = 0; i < milkInputs.length; i++) {
      if (milkInputs[i].checked) return milkInputs[i].value;
    }
    return "yes";
  }

  function matches(product, age, milk) {
    var inRange = age >= product.minAge && age <= product.maxAge;
    var milkOk = product.milk === "any" || product.milk === milk;
    return inRange && milkOk;
  }

  function render() {
    if (!ageInput || !listEl) return;

    var age = parseInt(ageInput.value, 10);
    var milk = selectedMilk();
    var min = parseInt(ageInput.min, 10);
    var max = parseInt(ageInput.max, 10);

    ageOut.textContent = age;
    bandEl.textContent = bandLabel(age);

    // Move the ruler marker to match the chosen age.
    var pct = ((age - min) / (max - min)) * 90 + 5;
    markEl.style.bottom = pct + "%";

    var results = PRODUCTS.filter(function (p) { return matches(p, age, milk); });

    listEl.innerHTML = "";

    if (results.length === 0) {
      var empty = document.createElement("li");
      empty.textContent = "No growth product is labeled for this age. Try the product quiz on nubest.com.";
      listEl.appendChild(empty);
      return;
    }

    results.forEach(function (p) {
      var li = document.createElement("li");
      var a = document.createElement("a");
      a.href = p.url;
      a.target = "_blank";
      a.rel = "noopener";
      a.textContent = p.name;
      var span = document.createElement("span");
      span.textContent = p.detail;
      li.appendChild(a);
      li.appendChild(span);
      listEl.appendChild(li);
    });
  }

  if (ageInput) {
    ageInput.addEventListener("input", render);
    for (var i = 0; i < milkInputs.length; i++) {
      milkInputs[i].addEventListener("change", render);
    }
    render();
  }

})();
