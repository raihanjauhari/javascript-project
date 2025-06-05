(function () {
  let screen = document.querySelector(".screen");
  let buttons = document.querySelectorAll(".btn");
  let clear = document.querySelector(".btn-clear");
  let equal = document.querySelector(".btn-equal");

  console.log(screen);

  buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {
      let value = e.target.dataset.num;
      console.log("Button clicked: ", value); // Debug: cek nilai tombol yang ditekan
      screen.value += value;
      console.log("Screen value after click: ", screen.value); // Debug: cek nilai screen
    });
  });

  equal.addEventListener("click", function (e) {
    if (screen.value === "") {
      screen.value = "";
    } else {
      let answer = eval(screen.value);
      screen.value = answer;
    }
  });

  clear.addEventListener("click", function (e) {
    screen.value = "";
  });
  console.log(screen.value);
})();
