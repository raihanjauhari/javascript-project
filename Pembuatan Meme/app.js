const generateMemeBtn = document.querySelector(
  ".meme-generator .generate-meme-btn"
);

const memeImage = document.querySelector(".meme-generator img");
// const memeTitle = document.querySelector(".meme-generator .meme-title");
const memeAuthor = document.querySelector(".meme-generator .meme-author");

const updateDetails = (url, source) => {
  memeImage.setAttribute("src", url);
  //   memeTitle.innerHTML = title;
  memeAuthor.innerHTML = `Sumber: ${source}`;
};

const generateMeme = () => {
  fetch("https://candaan-api.vercel.app/api/image/random")
    .then((response) => response.json())
    .then((data) => {
      updateDetails(data.data.url, data.data.source);
    });
};

generateMemeBtn.addEventListener("click", generateMeme);

generateMeme();
