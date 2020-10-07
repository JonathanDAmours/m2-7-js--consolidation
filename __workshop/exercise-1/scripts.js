let header = document.getElementById("header-id");
let h1 = document.getElementById("h1-id");
let navsection = document.getElementById("navsection-id");
let navcontainer = document.getElementById("navcontainer-id");
let btn2018 = document.getElementById("btn2018-id");
let btn2019 = document.getElementById("btn2019-id");
let choicesection = document.getElementById("choicesection-id");
let menu = document.getElementById("menu-id");
let h2 = document.getElementById("h2-id");
let number = document.getElementById("number-id");
let item = document.getElementById("order-id");

// The year in the header changes depending on which year is selected.
btn2018.addEventListener("click", headerChange2018);
btn2019.addEventListener("click", headerChange2019);

let year = 2018;

for (let index = 1; index <= 10; index++) {
  let choice = document.createElement("div");
  choice.className = "that";
  choice.innerText = `${index}`;
  choicesection.appendChild(choice);
  choice.addEventListener("mouseover", () => {
    menuItems(index);
  });
  choice.addEventListener("mouseout", displayh2);
}

function displayh2() {
  h2.innerText = "hover over a #!";
  number.className = "";
  item.className = "";
  number.innerText = "";
  item.innerText = "";
}

function headerChange2018() {
  year = 2018;
  h1.innerText = year;
}
function headerChange2019() {
  year = 2019;
  h1.innerText = year;
}

function menuItems(givenNumber) {
  h2.innerText = "";
  number.classList.add("aaaa");
  item.classList.add("bbbb");
  number.innerText = topTenList[year][givenNumber - 1].id;
  item.innerText = topTenList[year][givenNumber - 1].name;
}
