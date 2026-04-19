// Baby Names Start
// 2020 Alberta Baby Names
// https://open.alberta.ca/opendata/frequency-and-ranking-of-baby-names-by-year-and-gender

// Variables for html elements
let goBtn = document.getElementById("go-btn");
let menuSelect = document.getElementById("menu-select");
let container = document.getElementById("container");
let nameCountSpan = document.getElementById("name-count");

// Initialize Array of Baby Names from Text File
let babyNames = await loadTextFile("data/baby-names.txt");

// Event Listener on Go Buttonli
goBtn.addEventListener("click", goBtnClicked);

// Process Go Button Click
function goBtnClicked() {
  // Get Menu Selection
  let selection = menuSelect.value;

  // Process Menu Selection
  if (selection === "display-all") {
    displayAll();
  } else if (selection === "starting-letter") {
    searchStartingLetter();
  } else if (selection === "exact-length") {
    searchExactLength();
  } else if (selection === "range-length") {
    searchRangeLength();
  }
}

// Display All Characters
function displayAll() {
  container.innerHTML = "";
  for (let i = 0; i < babyNames.length; i++) {
    container.innerHTML += `<p>${babyNames[i]}</p>`;
  }
  name_count.innerHTML = babyNames.length;
}

// Display Names with Starting Letter
function searchStartingLetter() {
  container.innerHTML = "";
  let first_letter = prompt("Please enter starting letter:");
  let count = 0;
  for (let i = 0; i < babyNames.length; i++) {
    if (babyNames[i].charAt(0) == first_letter.toUpperCase()) {
      container.innerHTML += `<p>${babyNames[i]}</p>`;
      count++;
    }
  }
  name_count.innerHTML = count;
}
container.innerHTML = "Display Starting Letter";

// Display Names with Exact Length
function searchExactLength() {
  container.innerHTML = "";
  let length = +prompt("Please enter exact length:");
  let count = 0;
  for (let i = 0; i < babyNames.length; i++) {
    if (babyNames[i].length == length) {
      container.innerHTML += `<p>${babyNames[i]}</p>`;
      count++;
    }
  }
  name_count.innerHTML = count;
}

// Display Names within a Range of Lengths
function searchRangeLength() {
  container.innerHTML = "";
  let min = +prompt("Please enter minimum length:");
  let max = +prompt("Please enter maximum legth:");
  let count = 0;
  for (let i = 0; i < babyNames.length; i++) {
    if (babyNames[i].length >= min && babyNames[i].length <= max) {
      container.innerHTML += `<p>${babyNames[i]}</p>`;
      count++;
    }
  }
  name_count.innerHTML = count;
}
