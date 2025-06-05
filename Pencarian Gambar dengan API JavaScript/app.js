const accesKey = "zGF2htTu9c8BkHEHrPQkLaeOhDwhljNturdBRaJcRFMtfTWFu2TV3q2G";

const formEl = document.querySelector("form");
const inputEl = document.getElementById("search-input");
const searchResults = document.querySelector(".search-results");
const showMore = document.getElementById("show-more-button");

let inputData = "";
let page = 1;

async function searchImages() {
  inputData = inputEl.value;
  const url = `https://api.pexels.com/v1/search?query=${inputData}&page=${page}`;

  const response = await fetch(url, {
    headers: {
      Authorization: accesKey,
    },
  });
  const data = await response.json();

  const results = data.photos;

  if (page === 1) {
    searchResults.innerHTML = "";
  }

  results.map((result) => {
    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add("search-result");
    const image = document.createElement("img");
    image.src = result.src.medium;
    image.alt = result.alt;
    const imageLink = document.createElement("a");
    imageLink.href = result.url;
    imageLink.target = "_blank";
    imageLink.textContent = result.alt;

    imageWrapper.appendChild(image);
    imageWrapper.appendChild(imageLink);
    searchResults.appendChild(imageWrapper);
  });

  page++;
  if (page > 1) {
    showMore.style.display = "block";
  }
}

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  page = 1;
  searchImages();
});

showMore.addEventListener("click", () => {
  searchImages();
});
