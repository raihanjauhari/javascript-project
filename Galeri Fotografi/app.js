(function () {
  const buttons = document.querySelectorAll(".btn");
  const storageImages = document.querySelectorAll(".store-item");

  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const filter = e.target.dataset.filter;

      storageImages.forEach((item) => {
        if (filter === "all") {
          item.style.display = "block";
        } else {
          if (item.classList.contains(filter)) {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
        }
      });
    });
  });
})();
